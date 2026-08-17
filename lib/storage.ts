const STORAGE_KEY = "pizza-discovery-v1:selected-chapter";

export function getStoredChapter(fallback: number): number {
  if (typeof window === "undefined") return fallback;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  const parsed = raw ? Number.parseInt(raw, 10) : NaN;
  return Number.isInteger(parsed) ? parsed : fallback;
}

export function setStoredChapter(id: number): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, String(id));
}
