import Cookies from "js-cookie";

export async function fetch(url, options = {}) {
  options.method = options.method || "GET";
  options.headers = options.headers || {};

  if (options.method.toUpperCase() !== "GET") {
    options.headers["Content-Type"] = options.headers["Content-Type"] || "application/json";
    options.headers["XSRF-Token"] = Cookies.get("XSRF-Token");
  }

  const res = await window.fetch(url, options);
  console.log(res);
  const contentType = res.headers.get("content-type");

  if (contentType && contentType.includes("application/json")) {
    const data = await res.json();
    res.data = data;
  }

  if (res.status >= 400) throw res;

  return res;
}

export function restoreCSRF() {
  return fetch("/api/csrf/restore");
}
