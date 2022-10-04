const classCube = document.querySelectorAll('.classCube');
const body = document.getElementsByTagName('body')[0];
const container = document.getElementById('container');

window.addEventListener('load', () => {
    for(let i=0;i<16;i++){
        let element = document.createElement('div');
        element.classList.add('classCubes');
        element.style.transform = rotateElement();
        /* element.style.background = colorElement(); */
        element.style.margin = marginElement();
        container.appendChild(element);
        console.log('hello world!');

        let memoryArray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

    for(j=0;j<memoryArray.length;j++){
        element.innerText = memoryArray[j];
        memoryArray.slice(j);
        console.log(memoryArray);
    }

    }

    body.addEventListener('click', () => {
        container.style.background = '#333';
    });

    

    
function rotateElement(){
    const rotateCube = ["rotate(-1deg)", "rotate(3deg)","rotate(8deg)","rotate(10deg)"];
    return rotateCube[Math.floor(Math.random() * rotateCube.length)];
};
/* function colorElement(){
    const colorCube = ['pink', 'brown', 'royalBlue', 'gold'];
    return colorCube[Math.floor(Math.random() * colorCube.length)];
}; */
function marginElement(){
    const marginCube = ["-1px", "3px","5px","8px"];
    return marginCube[Math.floor(Math.random() * marginCube.length)];
};


})
