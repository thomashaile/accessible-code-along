window.onload = () => {
  const pageCover = document.createElement('div');
  pageCover.className = 'page-cover';

  const hideReveal = document.createElement('button');
  hideReveal.innerHTML = 'hide/reveal page';
  hideReveal.setAttribute('aria-label', 'this button is visually at the top of the page, but accessibly at the bottom. CSS vs. ARIA');
  hideReveal.onclick = () =>
    pageCover.className.indexOf('hidden') === -1
      ? pageCover.className = "page-cover hidden"
      : pageCover.className = "page-cover";
  pageCover.appendChild(hideReveal);

  document.body.appendChild(pageCover);
}
