const overlay = document.querySelector(".overlay");

document.querySelector("#show-modal-l1")
.addEventListener("click", () => {overlay.style.display = "block";
})

document.querySelector("#close-modal-l1").
addEventListener("click", () => {overlay.style.display = "none";
})

document.querySelector("#show-modal-l2")
.addEventListener("click", () => {overlay.style.display = "block";
})

document.querySelector("#close-modal-l2").
addEventListener("click", () => {overlay.style.display = "none";
})
/* i made the id's for overlay into class, i think it'll help later when i figure out this problem
with the l2 popup showing up as l1, maybe. */


// LOGIN JS PAGE//

function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}
function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length");

    if(password.Value.length >= 8){
        alert("Login Successfull");
        window.location.replace("index.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}