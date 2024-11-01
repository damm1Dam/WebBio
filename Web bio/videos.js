// videos.html

const videos = [
    {
        title: "Сохранение экосистем",
        url: "https://www.youtube.com/embed/VIDEO_ID_1"
    },
    {
        title: "Секреты устойчивого развития",
        url: "https://www.youtube.com/embed/VIDEO_ID_2"
    }
];

const videosDiv = document.getElementById('videos');
videosDiv.innerHTML = "";

videos.forEach(video => {
    videosDiv.innerHTML += `
        <div class="video">
            <h3>${video.title}</h3>
            <iframe width="100%" height="215" src="${video.url}" frameborder="0" allowfullscreen></iframe>
        </div>
    `;
});