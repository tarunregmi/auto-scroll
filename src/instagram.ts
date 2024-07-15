// For Instagram Only
const windowHeight = window.innerHeight;
const container = document.querySelector('main > div');

const scrollDown = () => container?.scrollBy({ top: windowHeight, behavior: 'smooth' });
const currentVideo = () => {
  return Array.from(document.querySelectorAll('video')).find((video) => {
    const rect = video.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) return video;
  });
};

let video = currentVideo();
video?.addEventListener('ended', scrollDown, { once: true });

setInterval(() => {
  video?.removeEventListener('ended', scrollDown);
  video = currentVideo();
  video?.addEventListener('ended', scrollDown, { once: true });
}, 8000);
