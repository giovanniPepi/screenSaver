const body = document.querySelector("body");
const canv = document.createElement("canvas");
canv.setAttribute("height", "");
canv.setAttribute("width", "");
body.appendChild(canv);

const ctx = canv.getContext('2d');
const WDT = document.documentElement.clientWidth;
const HGT = document.documentElement.clientHeight;

canv.width = WDT;
canv.height = HGT;



rnd = (numb) => Math.floor(Math.random()*numb);

const defaultCircleNumber = 1000;
let circleNumber = defaultCircleNumber;
const defaultCircleSize = 5;
let circleSize = defaultCircleSize;

changeCircleNumber = (n) => {
    return circleNumber = n;
};

changeCircleSize = (n) => {
    return CircleSize = n;
};

drawNormal = () => {
    ctx.clearRect(0, 0, WDT, HGT);
        for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(0,150,0,0.5)';
    ctx.arc(rnd(WDT), rnd(HGT), rnd(`${circleSize}`), 0, 2 * Math.PI);
    ctx.fill();
    }
}

drawInfection = () => {
    ctx.clearRect(0, 0, WDT, HGT);
        for (let i = 0; i < circleNumber; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(200,10,10,0.5)';
    ctx.arc(rnd(WDT), rnd(HGT), rnd(`${circleSize}`), 0, 2 * Math.PI);
    ctx.fill();
    }
}


function addHTML() {
    const headerDiv = document.createElement("div");
    headerDiv.setAttribute("class", "headerDiv");
       
    const changeSizeInpt = document.createElement('input');
    changeSizeInpt.setAttribute("class", "changeSizeInpt"); 
    changeSizeInpt.setAttribute("type", "range");
    changeSizeInpt.setAttribute("min", "1");
    changeSizeInpt.setAttribute("max", "30");
    changeSizeInpt.setAttribute("value", "5");

    const sizeP1 = document.createElement("p");
    sizeP1.setAttribute("class", "sizeP1");
    sizeP1.textContent=`Circle Size: ${circleSize}`;


    headerDiv.appendChild(changeSizeInpt);
    headerDiv.appendChild(sizeP1);
    body.prepend(headerDiv);

    

}


function updateCircleSize (value) {
    circleSize = `${value}`;
    sizeP1 = document.querySelector(".sizeP1");
    sizeP1.textContent=`Circle Size: ${circleSize}`;
}

function getEventListeners () {
    const changeSizeInpt = document.querySelector(".changeSizeInpt");
    changeSizeInpt.onchange = (e) => updateCircleSize(e.target.value);
    changeSizeInpt.onmousenve = (e) => updateCircleSize(e.target.value);
    window.addEventListener('mousemove', drawNormal);
}


addHTML();
getEventListeners();

/*window.addEventListener('mousemove', drawSmall);
window.addEventListener('mousemove', drawBig); */
