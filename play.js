var video = document.querySelector(".bg-video");
var btn = document.querySelector(".btn-play");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.style.backgroundColor = "lightslategray";
    btn.classList.remove("btn-stop");
    btn.style.backgroundImage = "url('media/btn-play.svg')";
  } else {
    video.pause();
    btn.classList.add("btn-stop");
    btn.style.backgroundImage = "url('media/btn-stop.svg')";
  }
}
