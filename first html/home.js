const overlay = document.querySelector("#overlay");


document.querySelector("#show-modal-l1")
.addEventListener("click", () => {overlay.style.display = "block";
})

document.querySelector("#close-modal-l1").
addEventListener("click", () => {overlay.style.display = "none";
})