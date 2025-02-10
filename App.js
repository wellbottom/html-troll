document.addEventListener("DOMContentLoaded", () => {
    const message = ["No", "Are you sure?", "Are you positive?", "Please...", "Think twice!", "Imma be real sad...", "really really sad...", "pweaseeee~"];
    let i = 0;
  
    // Images used in the app
    const noImg = "./assets/no.gif";  // Path to your 'no' image
    const yesImg = "./assets/kissing.gif";  // Path to your 'yes' image
  
    const handleNoClick = () => {
      const noBtn = document.querySelector("button[name='no-btn']");
      const yesBtn = document.querySelector("button[name='yes-btn']");
      noBtn.textContent = message[i];
      i = (i + 1) % message.length;
      const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
      yesBtn.style.fontSize = `${currentSize * 1.5}px`;
    };
  
    const handleYesClick = () => {
      const noBtn = document.querySelector("button[name='no-btn']");
      const yesBtn = document.querySelector("button[name='yes-btn']");
      const title = document.querySelector("h1[name='title']");
      const img = document.querySelector("img[name='img']");
  
      noBtn.remove();
      yesBtn.remove();
      img.src = yesImg;  // Change image to the 'yes' image
      title.textContent = "Knew you would say yes!! Love 4evah!!";
    };
  
    // Make sure buttons exist before adding event listeners
    const noBtn = document.querySelector("button[name='no-btn']");
    const yesBtn = document.querySelector("button[name='yes-btn']");
    
    if (noBtn && yesBtn) {
      noBtn.addEventListener("click", handleNoClick);
      yesBtn.addEventListener("click", handleYesClick);
    }
  });
  