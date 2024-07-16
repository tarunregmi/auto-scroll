let video = document.querySelector('video[src]');
let btn = document.querySelector('button[aria-label="Next video"]');

// @ts-ignore
video.loop = false;

const next = () => {
  // @ts-ignore
  btn?.click();
};

video?.addEventListener('ended', next, { once: true });

setInterval(() => {
  video?.removeEventListener('ended', next);
  video = document.querySelector('video[src]') as HTMLVideoElement;
  video?.addEventListener('ended', next, { once: true });
  // @ts-ignore
  video.loop = false;
}, 8000);
