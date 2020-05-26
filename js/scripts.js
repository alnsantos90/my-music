const elMusic = document.querySelectorAll(".music")

elMusic.forEach( (music, index) => {
  const t = document.querySelectorAll("h3 small")[index] 

  // MOUSE HOVER
  music.addEventListener("mouseenter", e => {
    t.classList.add("hide") 
  })

  // MOUSE LEAVE
  music.addEventListener("mouseleave", e => {
    t.classList.remove("hide") 
  })

  // MOUSE CLICK
  music.addEventListener("click", e => {
    const item = e.target
    const active = document.querySelector(".active")
    active.classList.remove("active")
    music.classList.toggle("active")

    console.log(item);
  })

})

