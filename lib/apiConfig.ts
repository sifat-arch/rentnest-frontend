export function getBackendUrl(): string {
  let url = (process.env.BACKEND_API_URL || "http://localhost:5000").trim();
  if (url.startsWith("BACKEND_API_URL=")) {
    url = url.replace(/^BACKEND_API_URL=/, "").trim();
  }
  url = url.replace(/^["']|["']$/g, "").trim();
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = `https://${url}`;
  }
  return url.replace(/\/+$/, "");
}

// Globally sanitize process.env.BACKEND_API_URL as a safeguard
if (typeof process !== "undefined" && process.env) {
  process.env.BACKEND_API_URL = getBackendUrl();
}
