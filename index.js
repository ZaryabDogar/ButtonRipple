const btn=document.querySelector(".btn")
btn.addEventListener("mouseover",(e)=>{
    const y=e.pageY -btn.offsetTop
    const x =e.pageX - btn.offsetLeft
    btn.style.setProperty("--xpos",x +"px")
    btn.style.setProperty("--ypos",y +"px")
})