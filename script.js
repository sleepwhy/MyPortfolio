function copyText() {
  const copyInput = "avrol928@gmail.com";
  navigator.clipboard.writeText(copyInput).then(() => {
    alert("Copied! 📋");
  }).catch(err => {
    alert("Error! 😢", err);
  });
}


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




const boxes = document.querySelectorAll('.box, .aboutText, #skills, .progressSys');

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

    // Buradaki metni renklendirelim
    myProgressText.innerHTML = `
    <span style="color:rgb(131, 59, 208);">Skills</span>[<span style="color: #812c60">"</span><span style="color:rgb(255, 255, 255);">${skill.toUpperCase()}</span><span style="color: #812c60">"</span>].<span style="color: #b9c75e;">progress()</span> = <span style="color: #f39c12;">${level}%</span>
  `;
   

    if (level < 30) {
      progressBar.style.backgroundColor = "green";
    } else if (level < 70) {
      progressBar.style.backgroundColor = "orange";
    } else {
      progressBar.style.backgroundColor = "red";
    }
  });
});

  


const aboutText = document.querySelector(".aboutText");

console.log(window.innerWidth);




