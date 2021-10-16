const toggle = document.querySelector(".header-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("toggle-scale");
  menu.classList.toggle("active");
});
// ------------------------- header
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.style.backgroundColor = "#ffec9e";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
// ----------------------playOnScroll
window.addEventListener("scroll", playtoscroll);
const height = document.querySelectorAll(".play-on-scroll");

function playtoscroll() {
  for (let i = 0; i < height.length; i++) {
    let WH = window.innerHeight;
    let top = height[i].getBoundingClientRect().top;
    let RP = 125;
    console.log(WH);
    console.log(top);
    if (top < WH - RP) {
      height[i].classList.add("start");
      // } else {
      //   height[i].classList.remove("start");
      // }
    }
  }
}

// ----------------login
const signIn = document.querySelector(".sign-in");
signIn.addEventListener("click", handleSignIn);
function handleSignIn(e) {
  const template = `
  <div class="page">
      <div class="page-container">
        <div class="page-login">Login</div>
          <div class="page-form">
            <label for="email">Email</label>
            <input type="email" id="email" />
            <label for="password">Password</label>
            <input type="password" id="password" />
            <input type="submit" id="submit" class="button-full" value="Submit" />
          </div>
        </div>
        <ion-icon name="close-circle-outline" class="close"></ion-icon>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", template);
}

const closeSignIn = document.querySelector(".close");
document.addEventListener("click", (e) => {
  console.log(e.target);
  const page = document.querySelector(".page");
  if (e.target.matches(".close")) {
    console.log("aa");
    page.parentNode.removeChild(page);
  }
});
