export const SITE_URL = "https://sanaullahmohammed.github.io/portfolio-v5";
export const SITE_NAME = "Mohammed Sanaullah";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const DEFAULT_DESCRIPTION =
  "Mohammed Sanaullah — Bengaluru-based staff engineer building distributed systems, real-time frontends, and event-driven backends across TypeScript, .NET, and the JVM.";

export function absUrl(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${SITE_URL}${path === "/" ? "" : path}`;
}
