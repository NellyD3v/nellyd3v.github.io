const overlayTop = document.getElementById("overlay-top");
const overlayBottom = document.getElementById("overlay-bottom");
const descriptionSection = document.getElementById("description");
const image = document.getElementById("bg");

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        descriptionSection.style.display = "block";
        overlayTop.style.height = "0";
        overlayBottom.style.height = "0";
    
        setTimeout(() => {
            image.style.filter = "none";
            image.style.boxShadow = "inset 0 0 60px black";
        }, 1500);
    
        console.log("done");
    }, 800);
});