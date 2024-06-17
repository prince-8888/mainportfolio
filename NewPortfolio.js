let dark=document.querySelector(".fa-moon");
let bod = document.getElementsByTagName("body")[0];
dark.addEventListener("click", () =>{
    bod.classList.toggle("dark");
    
   
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
