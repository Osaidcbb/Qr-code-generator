let qrCode = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
let qrPlace = document.querySelector(".qr-place");
let qrImage = document.querySelector("#qr-image");
let input = document.querySelector(".qr-text");

function generateQr(){
qrPlace.value = "";
if(input.value !== ''){
qrImage.src = qrCode + input.value;
}else{
qrPlace.innerHTML = "";
let div = document.createElement("div");
let p = document.createElement("p");
let pText = document.createTextNode("write something in the input field");
p.appendChild(pText);
div.appendChild(p);
qrPlace.appendChild(div);
p.style.color = "red";
setTimeout(() => {
window.location.reload();
}, 2000);

}
};