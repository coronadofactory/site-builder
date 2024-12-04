export function youtube() {

    const videos = document.querySelectorAll('[cf-src]');
    for (const video of videos) {
        video.setAttribute('src',video.getAttribute('cf-src'));
        video.removeAttribute('cf-src');
    }

}
