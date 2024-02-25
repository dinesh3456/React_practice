const generateButton = document.getElementById("generate-button");
const visualizationContainer = document.getElementById("visualization-container");
const speedSlider = document.getElementById("speed-slider");

let sortingSpeed = 50 

speedSlider.addEventListener("input",function(){
    sortingSpeed = parseInt(speedSlider.value);
})

function generateBars(){
    const array=[];
    for(let i=0;i<70;i++){
        array.push(Math.floor(Math.random()*401));
    }
    visualizationContainer.innerHTML="";
    array.forEach(height=>{
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${height}px`;
        visualizationContainer.append(bar);
    })

}

generateButton.addEventListener("click",generateBars);
generateBars();