// Facebook
const btn = document.querySelector('div[aria-label="Next Card"]');
let video = document.querySelector('video');

const next = () => {
  // @ts-ignore
  btn?.click();
  video = document.querySelector('video');
};

video?.addEventListener('ended', next, { once: true });

setInterval(() => {
  video?.removeEventListener('ended', next);
  video = document.querySelector('video');
  video?.addEventListener('ended', next, { once: true });
}, 8000);
