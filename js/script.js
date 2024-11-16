typewrite();

// {
//   name: 'Project 1',
//   subtext: "subtext",
//   description: "long ahh description",
//   small_description: "small ahh",
//   images: [
//     "",
//     ""
//   ],
//   sourceCode: "",
//   documentation: ""

// }

const PROJECTS = [
  {
    name: "SpotiLike 🎶💚 ",
    color: "#198754",
    subtext:
      "Save Spotify songs on-the-go while you're listening to your Liked Songs library or your favorite playlists with custom hotkeys! ",
    description:
      "This app lets you have a custom hotkey linked to one of your custom playlists in Spotify that would take the current song you're listening to, and put that on the playlist for you. This allows you not have to re-open Spotify to like/save a song. I wrote this simple script because I found it annoying that I had to re-open Spotify just to save a song that I liked. I did not want to interrupt my workflow but at the same time didn't want to miss a cool track either! ",
    small_description:
      "The application utilizes the Spotify API by authorizing the user, while running a hotkey thread in the background, so that the hotkey would work globally. The main purpose of the application is to allow users to like / save the songs they're listening to without interrupting their workflow (without having to switch to the Spotify window). ",
    images: [
      "https://github.com/senuka-b/SpotiLike-GUI/raw/main/readme/home.png",
      "https://github.com/senuka-b/SpotiLike-GUI/raw/main/readme/home.png",
    ],
    sourceCode:
      "https://github.com/senuka-b/SpotiLike-GUI/raw/main/readme/home.png",
    documentation:
      "https://github.com/senuka-b/SpotiLike-GUI/raw/main/readme/home.png",
  },

  {
    name: "Discode 🧑🏻‍💻🤖",
    color: "#A020F0",

    subtext:
      "An application that allows you to create Discord bots without having to write any code. ",
    description:
      'Discode is an open-source node-based discord bot builder created with the sole aim of being as simple as possible. This app is best suited for simple bots, and creating highly complex bots is not advisable. Through a collection of logical and action-based nodes, you can create simple discord bot logic with no code experience required. The app is simply like a "scratch" for Discord bots, allowing users with no coding experience to have a bot of their own.  ',
    small_description:
      'The application utilizes ReactFlow + The Discord.py API Wrapper around Discord\'s API to create a node-based no-code drag and drop logic creator. converting the nodes into sequential logic. The application uses a locally running server to host the bot in the background, which users can turn on or off or reload based on the changes you make to the bot\'s logic. Check out the <span><a target="_blank" href="https://youtu.be/H8Y8U3d_Mk4">Concept Video</a></span>',
    images: [
      "https://senuka-b.github.io/discode/images/banner.png",
      "https://senuka-b.github.io/discode/images/getting-started/new_project.gif",
    ],
    sourceCode: "https://github.com/senuka-b/discode",
    documentation: "https://senuka-b.github.io/discode",
  },
];

setupProjects();

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

  document
    .getElementById("scroll-container")
    .scrollTo({ top: 0, behavior: "smooth" });
}

function setupProjects() {
  let carouselInner = document.getElementById("carousel-inner");
  let indicators = document.getElementById("indicators");

  let projectHTML = "";
  let indicatorHTML = "";

  PROJECTS.forEach((project, index) => {
    console.log(index);

    indicatorHTML += `
      <button type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="${index}" class="${index === 0 ? "active" : ""}" 
          aria-label="Project ${index}"></button>
    `;

    projectHTML += `
      <div class="carousel-item active">
        <div class="card shadow">
            <div class="card-body ">
                <div style="background-color: ${project.color}" class="rounded-3">

                    <h3
                        class="card-title fw-bold p-3 pb-1 mb-0 rounded-1">
                        ${project.name}
                    </h3>
                    <h6
                        class="card-subtitle  p-3 fs-5 text-body-secondary">
                        ${project.subtext}
                    </h6>

                    <div class="card-text p-3">
                        <div class="row">
                            <div class="col">
                                <p class="fs-5">
                                    ${project.description}
                                </p>

                                <p>
                                    ${project.small_description}
                                </p>
                            </div>
                            <div class="col ms-auto">
                                <table class="table table-hover ">
                                    <tr>

                                    ${project.images
                                      .map((image) => {
                                        return `<td class="p-0 m-0">
                                            <img style="height: 100%; width: 100%;"
                                                src="${image}">
                                        </td>`;
                                      })
                                      .join("")}
                                        
                            
                                    </tr>

                                </table>

                                <div class="row w-100">
                                    <div class="col w-100">


                                        <a href="${project.sourceCode}"
                                            class="btn btn-outline-info w-100"
                                            target="_blank">
                                            Source Code On
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 50 50"
                                                    width="20px"
                                                    height="20px">
                                                    <path
                                                        d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
                                                </svg>
                                            </span></a>
                                    </div>
                                    <div class="col">
                                        <a href="${project.documentation}"
                                            class="btn btn-outline-info w-100"
                                            target="_blank">Documentation
                                            📘</a>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    </div>  
    
  `;
  });

  indicators.innerHTML = indicatorHTML;
  carouselInner.innerHTML = projectHTML;
}
