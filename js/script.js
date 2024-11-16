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

function scrollToTop() {
  console.log("Scrolled to top");
  
    document.getElementById("scroll-container").scrollTo({top: 0, behavior: "smooth"});
}

