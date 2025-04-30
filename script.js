// Hello!
///////////////////////////////////////////////////////


// i++ yazısı

const span = document.getElementById("codeText");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let interval = null;

span.addEventListener("mouseenter", () => {
  let iteration = 0;
  const finalText = "i++";

  clearInterval(interval);
  
  interval = setInterval(() => {
    span.textContent = finalText
      .split("")
      .map((char, idx) => {
        if (idx < iteration) return finalText[idx];
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if (iteration >= finalText.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
});

span.addEventListener("mouseleave", () => {
  span.textContent = "code";
});

///////////////////////////////////////////////////////




// Show ayarları

const boxes = document.querySelectorAll('.box, .whtText, .whatBox, #skills, .progressSys, .aboutDiv, .project, .projects-title');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 
});

boxes.forEach(box => {
    observer.observe(box);
});

///////////////////////////////////////////////////////






// Progress-bar özellikleri

const progressBar = document.querySelector('.progress-bar');
const myProgressText = document.querySelector('.text-info');

const skillLevels = {
  csharp: 70,
  c: 40,
  net: 35,
  sql: 70,
  cpp: 85,
  html: 90,
  css: 80,
  bootstrap: 75,
  python: 60,
};

document.querySelectorAll('.logo-track img').forEach(img => {
  img.addEventListener('mouseover', () => {
    const skill = img.dataset.skill;
    const level = skillLevels[skill] || 0;

    progressBar.style.width = level + '%';
    progressBar.setAttribute('aria-valuenow', level);

    if(isDarkModeOpened){
      myProgressText.innerHTML = `
      <span style="color:rgb(131, 59, 208);">Skills</span>[<span style="color: #812c60">"</span><span style="color:rgb(255, 255, 255);">${skill.toUpperCase()}</span><span style="color: #812c60">"</span>].<span style="color: #b9c75e;">progress()</span> = <span style="color: #f39c12;">${level}%</span>
    `;
    }
    else{
      myProgressText.innerHTML = `
      <span style="color:rgb(131, 59, 208);">Skills</span>[<span style="color: #812c60">"</span><span style="color:rgb(255, 0, 0);">${skill.toUpperCase()}</span><span style="color: #812c60">"</span>].<span style="color:rgb(35, 144, 50);">progress()</span> = <span style="color: #f39c12;">${level}%</span>
    `;
    }

   

    if (level < 30) {
      progressBar.style.backgroundColor = "green";
    } else if (level < 70) {
      progressBar.style.backgroundColor = "orange";
    } else {
      progressBar.style.backgroundColor = "red";
    }
  });
});

///////////////////////////////////////////////////////



  
// Pop-up ayarları

const buttons = document.querySelectorAll(".projectImg");  
const popup = document.querySelector(".main-popup");
const closeButton = document.querySelector(".popup-close");
const popupImg = document.querySelector("#popupImg");
const popupTitle = document.querySelector(".popup-title");
const checkItBtn = document.querySelector(".checkItBtn");

buttons.forEach(el => {
  el.addEventListener("click", e => {
    popup.style.display = "flex";
    
    const imgSrc = e.target.src;
    const imgTitle = e.target.dataset.title;
    const imgLink = e.target.dataset.link;

    popupImg.setAttribute("src", imgSrc);
    popupTitle.innerText = imgTitle;
    checkItBtn.onclick = () => {
      window.open(imgLink, "_blank"); 
    };
  });
});

closeButton.addEventListener("click", e => {
    popup.style.display = "none"; 
});

popup.addEventListener("click", e => {
    if (e.target.className === "main-popup") {
        popup.style.display = "none"; 
    }
});

///////////////////////////////////////////////////////






const main = document.querySelector('main');
const floatTheme = document.querySelector(".floating-box");
const project = document.querySelectorAll(".project");
const footer = document.querySelector("footer");

let isDarkModeOpened = true;

floatTheme.addEventListener("click", () => {
  console.log("sdfasd");
  if(isDarkModeOpened){
    main.style.backgroundColor = "#f9f9f9";
    document.documentElement.style.setProperty('--other-text-color', '#222222');
    document.documentElement.style.setProperty('--box-color', '#de2d3c');
    document.documentElement.style.setProperty('--icon-color', '#24242c');
    myProgressText.style.backgroundImage = "url('SVGs/codingBGlight.svg')";

    project.forEach(el => {
      el.style.backgroundImage = "url('SVGs/projectBGlight.svg')";
    })


    footer.style.background = "url('SVGs/footerBGlight.svg')";
    document.documentElement.style.setProperty('--border-cl', '#9f2251');
    document.documentElement.style.setProperty('--back-color-2', 'black');

    floatTheme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    floatTheme.style.backgroundColor = "black";
    floatTheme.style.color = "white";
  }
  else{

    main.style.backgroundColor = "var(--back-color-3)";
    document.documentElement.style.removeProperty('--other-text-color');
    document.documentElement.style.removeProperty('--box-color');
    document.documentElement.style.removeProperty('--icon-color');
    myProgressText.style.backgroundImage = "url('SVGs/codingBG.svg')";

    project.forEach(el => {
      el.style.background = "url('SVGs/projectBG.svg') no-repeat center / cover";
    })
    footer.style.background = "url('SVGs/footerBG.svg')";

    document.documentElement.style.removeProperty('--border-cl');
    document.documentElement.style.removeProperty('--back-color-2');

    floatTheme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    floatTheme.style.backgroundColor = "white";
    floatTheme.style.color = "black";
  }

  

  isDarkModeOpened = !isDarkModeOpened;
})













