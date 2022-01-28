window.addEventListener("load",()=>{
    const sounds = document.querySelectorAll(".sound");
     const pads= document.querySelectorAll(".pads div");
     const visual =  document.querySelector(".visual");
     const colors = [ " #ff6b6b",
     "#ff9ff3",
    " #54a0ff",
    " #5fd11d",
    " #00d2d3",
     "#A3CB38",
    " #EE5A24",
    " #786fa6",
    " #FEA47F",
    " #f5cd79"
    ];



 pads.forEach((pad,index)=>{
     pad.addEventListener("click", function()
     {
         sounds[index].currentTime=0;
         sounds[index].play();
          createBubbles(index);
     });
 });


// create bubles
 const createBubbles = (index)=>{
      const bubble = document.createElement("div");
       visual.appendChild(bubble);
        bubble.style.backgroundColor= colors[index];
         bubble.style.animation = "jump 1s ease";
 };


});