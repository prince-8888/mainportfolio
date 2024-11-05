// let dark=document.querySelector(".fa-moon");
// let bod = document.getElementsByTagName("body")[0];
// dark.addEventListener("click", () =>{

//     bod.classList.toggle("dark");


//     // bob.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
    
   
// });


const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '🌞' : '🌙';
});


const accordians=document.querySelectorAll('.accordian');
for(acc of accordians){
    const icon=acc.querySelector('.icon');
    const answer=acc.querySelector('.answer');

    acc.addEventListener('click', () => {
        icon.classList.toggle('active');
        answer.classList.toggle('active');
    });

}

// skills js

document.addEventListener("DOMContentLoaded", () => {
  const skillItems = document.querySelectorAll(".skill-item");

  skillItems.forEach(item => {
      const percent = item.getAttribute("data-percent");
      const circleProgress = item.querySelector(".circle-progress");
      const numberDisplay = item.querySelector(".number");

      // Calculate the offset based on the percentage
      const offset = 283 - (283 * percent) / 100;
      circleProgress.style.strokeDashoffset = offset;

      // Animate the percentage number
      let currentPercent = 0;
      const interval = setInterval(() => {
          if (currentPercent <= percent) {
              numberDisplay.textContent = `${currentPercent}%`;
              currentPercent++;
          } else {
              clearInterval(interval);
          }
      }, 20); // Adjust speed as needed
  });
});

