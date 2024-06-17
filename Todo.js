let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn=document.querySelector("button");

btn.addEventListener("click",function(){
    
    let item=document.createElement("li");
    
    item.innerText=inp.value;
    ul.appendChild(item);

  let delbtn=document.createElement("button");
    delbtn.classList.add("delete");
    delbtn.innerText="Delete";
    item.appendChild(delbtn);

    inp.value="";
});


ul.addEventListener("click",function(event){
  if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    console.log(listItem);
    listItem.remove();
  }
})
