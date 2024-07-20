let video: HTMLVideoElement;
let button: HTMLButtonElement;
let container: HTMLDivElement;
let next: () => void;

// Select video element visible in screen
const currentVideo = () => {
  return Array.from(document.querySelectorAll('video[src]')).find((video) => {
    const rect = video.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) return video;
  }) as HTMLVideoElement;
};

function start() {
  const platform = window.location.hostname;
  console.log('Platform "%s"', platform);

  if (platform.includes('facebook')) {
    button = document.querySelector('div[aria-label="Next Card"]') as HTMLButtonElement;
    next = () => button.click();
  } else if (platform.includes('youtube')) {
    button = document.querySelector('button[aria-label="Next video"]') as HTMLButtonElement;
    next = () => button.click();
  } else if (platform.includes('instagram')) {
    container = document.querySelector('main > div') as HTMLDivElement;
    next = () => container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }

  video = currentVideo();
  video.loop = false;
  video.addEventListener('ended', next, { once: true });

  setInterval(() => {
    video.removeEventListener('ended', next);
    video = currentVideo();
    video.loop = false;
    video.addEventListener('ended', next, { once: true });
  }, 8000);
  console.log('Running in "%s"', platform);
}

window.addEventListener('load', () => setTimeout(start, 3000));
