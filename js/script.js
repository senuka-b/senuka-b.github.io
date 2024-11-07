typewrite();

particlesJS.load("particles-js", "assets/snow.json", function () {
  console.log("callback - particles.js config loaded");
});

function typewrite() {
  var typed = new Typed("#subText", {
    strings: [
      "I'm a software engineer... and a full-stack magician.",
      "I bridge the gap between design & database.",
      "Software developer by night, student by day.",
      "Java enthusiast, always learning.",
      "I specialize in a variety of fields!",
      "I write code... and sometimes it even works!",
      "Delivering perfect software is my thing.",
      "Building things is my passion.",
    ],
    typeSpeed: 68,
    smartBackspace: true,
    shuffle: true,
    loop: true,
    backSpeed: 60,
  });
}


// SCROLLING -> Next page

let maximum_scroll_to_go = 10;
let scroll_tries = 0;

window.addEventListener("scroll",function(){

});

window.onwheel = function () {
  var limit =
    Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    ) -
    window.innerHeight -
    1;

  var distanceScrolled = document.documentElement.scrollTop || document.body.scrollTop;

  if (distanceScrolled === limit) {
    console.log('yes');
    console.log(++scroll_tries);
    
    if (scroll_tries >= maximum_scroll_to_go) {
      console.log("Do it now")
    }
    
  } else if (distanceScrolled < limit) {
    scroll_tries = 0;
  }
};
