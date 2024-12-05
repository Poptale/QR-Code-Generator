let image = document.querySelector("img");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let p = document.querySelector(".sorry");
btn.addEventListener("click", ()=>{
    if(input.value===""){
        image.src = "qrfind.png";
        image.style.height = "150px";
        image.style.width = "150px";
        p.style.display = "inline";

    } else {
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
    image.style.height = "300px";
    image.style.width = "300px";
    p.style.display = "none";
};
});