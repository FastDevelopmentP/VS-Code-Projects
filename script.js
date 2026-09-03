const videos = [
    "videos/Squat.mp4",
    "videos/Max-log.mp4",
    "videos/Raw-squat.mp4",
    "videos/Silver-dollar.mp4"
];

const videoPlayer = document.querySelector("#rotating-video");
let currentVideo = 0;

videoPlayer.addEventListener("ended", () => {
    currentVideo = (currentVideo + 1) % videos.length;
    videoPlayer.src = videos[currentVideo];
    videoPlayer.play();
});
