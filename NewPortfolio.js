
                                        // Dark Mode

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '🔆' : '🌙';
});

                           //    accordian Section

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


                                    // Swiper Configuration
new Swiper('.swiper', {
    // Optional parameters
    spaceBetween:30,
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullet:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
    }
  
    
    
  });


 function openPopup(imgElement) {
  var popup = document.getElementById("popup");
  var popupImg = document.getElementById("popup-img");
  popup.style.display = "block";
  popupImg.src = imgElement.src;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

