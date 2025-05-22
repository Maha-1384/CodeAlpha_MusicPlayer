const songs = [
    {
        id: 1,
        title: "Dreams",
        artist: "Joakim Karud",
        category: "Chill",
        src: "musics/land-of-dreams-238341.mp3"
    },
    {
        id: 2,
        title: "Afsanay",
        artist: "Young Stunners",
        category: "Rap",
        src: "musics/afsanay.mp3"
    },
    {
        id: 3,
        title: "Groove Mera",
        artist: "Young Stunners, Aima Baig, Naseebo Lal",
        category: "Rap",
        src: "musics/groove-mera.mp3"
    },
    {
        id: 4,
        title: "Naachne Ka Shaunq",
        artist: "Raftaar ft. Brodha V",
        category: "Rap",
        src: "musics/naachne-ka-shaunq.mp3"
    },
    {
        id: 5,
        title: "Afreen Afreen",
        artist: "Rahat Fateh Ali Khan",
        category: "Sufi",
        src: "musics/afreen-afreen.mp3"
    },
    {
        id: 6,
        title: "Tera Woh Pyar",
        artist: "Momina Mustehsan & Asim Azhar",
        category: "Romantic",
        src: "musics/tera-woh-pyar.mp3"
    },
    {
        id: 7,
        title: "Baari",
        artist: "Bilal Saeed & Momina Mustehsan",
        category: "Romantic",
        src: "musics/baari.mp3"
    },
    {
        id: 8,
        title: "Dil Diyan Gallan",
        artist: "Atif Aslam",
        category: "Romantic",
        src: "musics/dil-diyan-gallan.mp3"
    },
    {
        id: 9,
        title: "Jeene Laga Hoon",
        artist: "Atif Aslam",
        category: "Romantic",
        src: "musics/jeene-laga-hoon.mp3"
    },
    {
        id: 10,
        title: "Tajdar-e-Haram",
        artist: "Atif Aslam",
        category: "Sufi",
        src: "musics/tajdar-e-haram.mp3"
    },
    {
        id: 11,
        title: "Woh Lamhe",
        artist: "Atif Aslam",
        category: "Sad",
        src: "musics/woh-lamhe.mp3"
    },
    {
        id: 12,
        title: "Tera Ban Jaunga",
        artist: "Akhil Sachdeva & Tulsi Kumar",
        category: "Romantic",
        src: "musics/tera-ban-jaunga.mp3"
    },
    {
        id: 13,
        title: "Mustt Mustt",
        artist: "Nusrat Fateh Ali Khan",
        category: "Qawwali",
        src: "musics/mustt-mustt.mp3"
    },
    {
        id: 14,
        title: "Bhar Do Jholi Meri",
        artist: "Amjad Sabri",
        category: "Qawwali",
        src: "musics/bhar-do-jholi-meri.mp3"
    },
    {
        id: 15,
        title: "Dama Dam Mast Qalandar",
        artist: "Abida Parveen",
        category: "Qawwali",
        src: "musics/dama-dam-mast-qalandar.mp3"
    },
    {
        id: 16,
        title: "We Rollin",
        artist: "Shubh",
        category: "Rap",
        src: "musics/we-rollin.mp3"
    },
    {
        id: 17,
        title: "G.O.A.T.",
        artist: "Diljit Dosanjh",
        category: "Rap",
        src: "musics/goat.mp3"
    },
    {
        id: 18,
        title: "Desi Hip Hop",
        artist: "Manj Musik, Roach Killa, Sarb Smooth",
        category: "Rap",
        src: "musics/desi-hip-hop.mp3"
    },
    {
        id: 19,
        title: "Kya Baat Ay",
        artist: "Harrdy Sandhu",
        category: "Rap",
        src: "musics/kya-baat-ay.mp3"
    },
    {
        id: 20,
        title: "Satisfya",
        artist: "Imran Khan",
        category: "Rap",
        src: "musics/satisfya.mp3"
    },
    {
        id: 21,
        title: "Lahore",
        artist: "Guru Randhawa",
        category: "Pop",
        src: "musics/lahore.mp3"
    },
    {
        id: 22,
        title: "High Rated Gabru",
        artist: "Guru Randhawa",
        category: "Pop",
        src: "musics/high-rated-gabru.mp3"
    },
    {
        id: 23,
        title: "Lehenga",
        artist: "Jass Manak",
        category: "Pop",
        src: "musics/lehenga.mp3"
    },
    {
        id: 24,
        title: "Coka",
        artist: "Sukh-E",
        category: "Pop",
        src: "musics/coka.mp3"
    },
    {
        id: 25,
        title: "Nikle Current",
        artist: "Jassi Gill ft. Neha Kakkar",
        category: "Pop",
        src: "musics/nikle-current.mp3"
    },
    {
        id: 26,
        title: "Filhall",
        artist: "B Praak",
        category: "Sad",
        src: "musics/filhall.mp3"
    },
    {
        id: 27,
        title: "Keh Gayi Sorry",
        artist: "Jassie Gill",
        category: "Sad",
        src: "musics/keh-gayi-sorry.mp3"
    },
    {
        id: 28,
        title: "Saada Pyar",
        artist: "AP Dhillon & Gurinder Gill",
        category: "Sad",
        src: "musics/saada-pyar.mp3"
    },
    {
        id: 29,
        title: "Heer",
        artist: "Waris Shah",
        category: "Folk",
        src: "musics/heer.mp3"
    },
    {
        id: 30,
        title: "Jugni",
        artist: "Alam Lohar",
        category: "Folk",
        src: "musics/jugni.mp3"
    },
    {
        id: 31,
        title: "Tere Tille Ton",
        artist: "Kuldeep Manak",
        category: "Folk",
        src: "musics/tere-tille-ton.mp3"
    },
    {
        id: 32,
        title: "Chitta Kukkad",
        artist: "Surinder Kaur & Prakash Kaur",
        category: "Folk",
        src: "musics/chitta-kukkad.mp3"
    },
    {
        id: 33,
        title: "Kali Teri Gut",
        artist: "Diljit Dosanjh",
        category: "Folk",
        src: "musics/kali-teri-gut.mp3"
    }
];


const audio = document.getElementById('audio-player');
const playlistEl = document.getElementById('playlist');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const volumeSlider = document.getElementById('volume-slider');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const seekBar = document.getElementById('seek-bar');

let currentIndex = 0;
let isPlaying = false;
let filteredSongs = songs.slice();
let isSeeking = false;

function formatTime(time) {
    const minutes = Math.floor(time / 60) || 0;
    const seconds = Math.floor(time % 60) || 0;
    return minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
}

function loadCategories() {
    const categories = Array.from(new Set(songs.map(s => s.category))).sort();
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categoryFilter.appendChild(option);
    });
}

function renderPlaylist() {
    playlistEl.innerHTML = '';
    filteredSongs.forEach((song, index) => {
        const songItem = document.createElement('div');
        songItem.classList.add('song-item');
        if (index === currentIndex) songItem.classList.add('active');
        songItem.dataset.index = index;

        const title = document.createElement('div');
        title.className = 'song-title';
        title.textContent = song.title;

        const artist = document.createElement('div');
        artist.className = 'song-artist';
        artist.textContent = song.artist;

        const category = document.createElement('div');
        category.className = 'song-category';
        category.textContent = song.category;

        songItem.appendChild(title);
        songItem.appendChild(artist);
        songItem.appendChild(category);

        songItem.addEventListener('click', () => {
            if (currentIndex !== index) {
                currentIndex = index;
                loadCurrentSong();
                playAudio();
                renderPlaylist();
            }
        });

        playlistEl.appendChild(songItem);
    });
}

function loadCurrentSong() {
    const song = filteredSongs[currentIndex];
    if (!song) {
        audio.src = '';
        currentTimeEl.textContent = '0:00';
        durationEl.textContent = '0:00';
        seekBar.value = 0;
        seekBar.max = 100;
        return;
    }
    audio.src = song.src;
    audio.load();
}

function playAudio() {
    audio.play()
        .then(() => {
            isPlaying = true;
            updatePlayPauseBtn();
        })
        .catch(e => {
            console.warn('Audio play prevented:', e);
        });
}

function pauseAudio() {
    audio.pause();
    isPlaying = false;
    updatePlayPauseBtn();
}

function togglePlayPause() {
    if (isPlaying) pauseAudio();
    else playAudio();
}

function updatePlayPauseBtn() {
    playPauseBtn.innerHTML = isPlaying ? '&#10074;&#10074;' : '&#9654;';
}

function nextSong() {
    if (filteredSongs.length === 0) return;
    currentIndex++;
    if (currentIndex >= filteredSongs.length) {
        currentIndex = 0;
    }
    loadCurrentSong();
    playAudio();
    renderPlaylist();
}

function prevSong() {
    if (filteredSongs.length === 0) return;
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = filteredSongs.length - 1;
    }
    loadCurrentSong();
    playAudio();
    renderPlaylist();
}

function updateVolume() {
    audio.volume = volumeSlider.value;
}

audio.addEventListener('timeupdate', () => {
    if (!isSeeking) {
        currentTimeEl.textContent = formatTime(audio.currentTime);
        seekBar.value = audio.currentTime;
    }
    if (!isNaN(audio.duration)) {
        durationEl.textContent = formatTime(audio.duration);
        seekBar.max = audio.duration;
    } else {
        durationEl.textContent = "0:00";
        seekBar.max = 100;
    }
});

audio.addEventListener('ended', nextSong);

seekBar.addEventListener('input', () => {
    isSeeking = true;
    currentTimeEl.textContent = formatTime(seekBar.value);
});

seekBar.addEventListener('change', () => {
    audio.currentTime = seekBar.value;
    if (!isPlaying) {
        currentTimeEl.textContent = formatTime(audio.currentTime);
    }
    isSeeking = false;
});

function filterSongs() {
    const query = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    filteredSongs = songs.filter(song => {
        const matchSearch =
            song.title.toLowerCase().includes(query) ||
            song.artist.toLowerCase().includes(query) ||
            song.category.toLowerCase().includes(query);
        const matchCategory = category === 'all' || song.category === category;
        return matchSearch && matchCategory;
    });
    if (!filteredSongs.length) {
        currentIndex = -1;
        audio.pause();
        audio.src = '';
        currentTimeEl.textContent = '0:00';
        durationEl.textContent = '0:00';
        seekBar.value = 0;
        seekBar.max = 100;
    } else {
        if (currentIndex >= filteredSongs.length || currentIndex < 0) {
            currentIndex = 0;
        }
        loadCurrentSong();
        if (isPlaying) playAudio();
    }
    renderPlaylist();
}

function initVolume() {
    volumeSlider.value = 0.6;
    audio.volume = 0.6;
}

playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);
volumeSlider.addEventListener('input', updateVolume);
searchInput.addEventListener('input', filterSongs);
categoryFilter.addEventListener('change', filterSongs);

function init() {
    loadCategories();
    filteredSongs = songs.slice();
    currentIndex = 0;
    loadCurrentSong();
    renderPlaylist();
    initVolume();
}

window.addEventListener('load', init);
