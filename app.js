const boxes = document.querySelectorAll(".box");

function hideToggle(boxId){
    let faqPara = "#para-"+boxId;
    let para = document.querySelector(faqPara);
    para.classList.toggle("hide");
}

function rotateToggle(boxId){
    let faqSvg = "#"+boxId+" svg";
    let reqSvg = document.querySelector(faqSvg);
    reqSvg.classList.toggle("rot-clock");
}

boxes.forEach((box) =>{
    console.log(box);
    box.addEventListener("click", ()=>{
        let boxId = box.getAttribute("id");
        hideToggle(boxId);    
        rotateToggle(boxId);
    });
});