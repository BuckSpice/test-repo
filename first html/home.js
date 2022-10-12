const overlay = document.querySelector(".overlay");

document.querySelector("#show-modal-l1")
.addEventListener("click", () => {overlay.style.display = "block";
document.querySelector("#overlayText").innerText = "You/'re already here, congrats!";

})

document.querySelector("#close-modal-l1").
addEventListener("click", () => {overlay.style.display = "none";
})

document.querySelector("#show-modal-l2")
.addEventListener("click", () => {
    overlay.style.display = "block";
    document.querySelector("#overlayText").innerText = "You\'ll need an Xbox.";

})



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

    if(password.value.length >= 8){
        window.alert("Login Successfull");
        window.location.replace("index.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}