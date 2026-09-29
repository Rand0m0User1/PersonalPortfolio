const KEY = "homeScrollY";

function scrollToInstant(y: number) {
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, y);
  html.style.scrollBehavior = previous;
}

export function saveHomeScroll() {
  sessionStorage.setItem(KEY, String(window.scrollY));
}

export function restoreHomeScroll() {
  const saved = sessionStorage.getItem(KEY);
  sessionStorage.removeItem(KEY);

  if (window.location.hash) return;

  const y = saved ? Number(saved) : 0;
  requestAnimationFrame(() => requestAnimationFrame(() => scrollToInstant(y)));
}

export function scrollToTopInstant() {
  scrollToInstant(0);
}
