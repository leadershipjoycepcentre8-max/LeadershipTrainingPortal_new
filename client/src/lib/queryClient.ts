import { QueryClient, QueryFunction } from "@tanstack/react-query";

const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL ?? "";

function buildUrl(path: string) {
  // If already absolute, just return
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const base = API_BASE_URL || "";
  if (!base) {
    // Fallback to relative URL (useful for local dev when backend and frontend are on same origin)
    return path;
  }

  return `${base.replace(/\/$/, "")}${path}`;
}

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(method: string, url: string, body?: any) {
  const res = await fetch(import.meta.env.VITE_API_BASE_URL + url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // IMPORTANT for cookies
    body: body ? JSON.stringify(body) : undefined,
  });

  // If request failed, throw the parsed error message
  if (!res.ok) {
    let errText = await res.text();
    try {
      throw new Error(JSON.parse(errText).error || errText);
    } catch {
      throw new Error(errText);
    }
  }

  // Return parsed JSON body
  return res.json();
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const path = queryKey.join("/") as string;
    const res = await fetch(buildUrl(path), {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
