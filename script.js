console.log("Welcome to Spotify");

//Initialize the variables
let bottomCover = document.getElementById("bottom-cover");
let coverImg = document.getElementById("cover-img");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

bottomCover.style.display = "none";

let songs = [
  {
    songName: "Blue - Yung kai",
    filePath: "songs/1.mp3",
    coverPath: "cover/1.jpg",
  },
  {
    songName: "To you",
    filePath: "songs/2.mp3",
    coverPath: "cover/2.jpg",
  },
  {
    songName: "Roi",
    filePath: "songs/3.mp3",
    coverPath: "cover/3.jpg",
  },
  {
    songName: "Running up that...",
    filePath: "songs/4.mp3",
    coverPath: "cover/4.jpg",
  },
  {
    songName: "Baby blue",
    filePath: "songs/5.mp3",
    coverPath: "cover/5.jpg",
  },
  {
    songName: "Tainu khabar nhi",
    filePath: "songs/6.mp3",
    coverPath: "cover/6.jpg",
  },
  {
    songName: "Stay with me",
    filePath: "songs/7.mp3",
    coverPath: "cover/7.jpg",
  },
  {
    songName: "Belong Together",
    filePath: "songs/8.mp3",
    coverPath: "cover/8.jpg",
  },
  {
    songName: "I like the way...",
    filePath: "songs/9.mp3",
    coverPath: "cover/9.jpg",
  },
  {
    songName: "We fell in...",
    filePath: "songs/10.mp3",
    coverPath: "cover/10.jpg",
  },
  {
    songName: "She knows",
    filePath: "songs/11.mp3",
    coverPath: "cover/11.jpg",
  },
  {
    songName: "Future days",
    filePath: "songs/12.mp3",
    coverPath: "cover/12.png",
  },
  {
    songName: "Let her go",
    filePath: "songs/13.mp3",
    coverPath: "cover/13.jpg",
  },
  {
    songName: "Alucinante...",
    filePath: "songs/14.mp3",
    coverPath: "cover/14.jpg",
  },
  {
    songName: "Los Voltaje",
    filePath: "songs/15.mp3",
    coverPath: "cover/15.jpg",
  },
  {
    songName: "Passo Bem Solto",
    filePath: "songs/16.mp3",
    coverPath: "cover/16.jpg",
  },
  {
    songName: "Tomada...",
    filePath: "songs/17.mp3",
    coverPath: "cover/17.jpg",
  },
  {
    songName: "Through the valley",
    filePath: "songs/18.mp3",
    coverPath: "cover/18.jpg",
  },
  {
    songName: "Washing machine hearts",
    filePath: "songs/19.mp3",
    coverPath: "cover/19.jpg",
  },
  {
    songName: "Apna bana le",
    filePath: "songs/20.mp3",
    coverPath: "cover/20.jpg",
  },
];

songItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

function addImage(src) {
  const img = document.createElement("img");
  img.src = src;
  img.style.height = "60px";
  img.style.borderRadius = "50%";

  if (window.innerWidth > 400) {
    bottomCover.appendChild(img);
    coverImg.src = src;
    bottomCover.style.display = "block";
    bottomCover.style.opacity = "1";
  } else {
    bottomCover.style.display = "none";
  }
}

// audioElement.play();
// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

    masterSongName.innerText = songs[songIndex].songName;
    addImage(songs[songIndex].coverPath);
    if (window.innerWidth > 400) {
      bottomCover.style.display = "block";
      bottomCover.style.opacity = "1";
    }
    masterSongName.style.opacity = 1;
    gif.style.opacity = 1;
    coverImg.style.animationPlayState = "running";
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    audioElement.currentTime = 0;
    masterSongName.style.opacity = 1;
    gif.style.opacity = 0;
    coverImg.style.animationPlayState = "paused";
  }
});

// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;

  if (progress == 100) {
    if (songIndex >= 21) {
      songIndex = 0;
    } else {
      songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    addImage(songs[songIndex].coverPath);
    if (window.innerWidth > 400) {
      bottomCover.style.display = "block";
      bottomCover.style.opacity = "1";
    }
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
  }

  myProgressBar.style.background = `linear-gradient(to right, #1db954 ${progress}%, #797671 ${progress}%)`;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
  // console.log(currentTime);

  // let time = audioElement.currentTime / 60.00;

  // console.log(time.toFixed(2))
  // 💡 Update the fill color using gradient
  myProgressBar.style.background = `linear-gradient(to right, #1db954 ${progress}%, #797671 ${progress}%)`;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
    // addImage(songs[songIndex].coverPath);
    if (audioElement.paused) {
      audioElement.play();
      //   masterPlay.classList.add("fa-circle-pause");
      //   masterPlay.classList.remove("fa-circle-play");
    } else {
      audioElement.pause();
      //   masterPlay.classList.add("fa-circle-play");
      //   masterPlay.classList.remove("fa-circle-pause");
    }
  });
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      let clickedIndex = parseInt(e.target.id);

      // If same song and it's playing → pause
      if (songIndex === clickedIndex && !audioElement.paused) {
        audioElement.pause();
        e.target.classList.remove("fa-circle-pause");
        e.target.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;
        coverImg.style.animationPlayState = "paused"; // ✅ Correctly pauses rotating cover
        return;
      }
      // Else → play new song
      else makeAllPlays(); // reset all mini buttons
      songIndex = clickedIndex;
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");

      audioElement.src = songs[songIndex].filePath;
      masterSongName.innerText = songs[songIndex].songName;
      addImage(songs[songIndex].coverPath);
      if (window.innerWidth > 400) {
        bottomCover.style.display = "block";
        bottomCover.style.opacity = "1";
      }
      audioElement.currentTime = 0;
      audioElement.play();

      masterSongName.style.opacity = 1;
      gif.style.opacity = 1;
      bottomCover.style.transition = "0.8s ease-in";
      coverImg.style.animationPlayState = "running";
      bottomCover.style.display = "block";
      bottomCover.style.opacity = "1";
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 21) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  addImage(songs[songIndex].coverPath);
  if (window.innerWidth > 400) {
    bottomCover.style.display = "block";
    bottomCover.style.opacity = "1";
  }
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  coverImg.style.animationPlayState = "running";
  masterSongName.style.opacity = 1;
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  addImage(songs[songIndex].coverPath);
  if (window.innerWidth > 400) {
    bottomCover.style.display = "block";
    bottomCover.style.opacity = "1";
  }

  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  coverImg.style.animationPlayState = "running";
  masterSongName.style.opacity = 1;
});
