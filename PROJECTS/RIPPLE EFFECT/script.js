let btn = document.querySelectorAll(".btn");

btn.forEach(buttons=>{
    buttons.addEventListener("click",(e)=>{
        const x = e.pageX;
        const y = e.pageY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft =e.target.offsetLeft;

        const xSide = x - buttonLeft;
        const yside = y - buttonTop;

        const ripple = document.createElement("div");
        ripple.classList.add("ripple");
        ripple.style.top = yside + "px";
        ripple.style.left = xSide + "px";

        buttons.appendChild(ripple);
        setTimeout(() => {
            ripple.remove()
        }, 500);


    })
})