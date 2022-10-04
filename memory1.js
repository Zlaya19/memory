const container = document.getElementById('container');

let array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

let avatar = 0;

for(var i = array.length-1;i>=0;i--){
    avatar = array.splice(Math.floor(Math.random()*array.length), 1);
    console.log(avatar);
}

window.addEventListener('load', () => {
    for(i=0;i<16;i++){
        
        let element = document.createElement('div');
        element.classList.add('classCubes');
        element.innerText = avatar;
        container.appendChild(element);         
    }
})

function randomArray(){
    const randomIndex = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
    return randomIndex.splice([Math.floor(Math.random() * randomIndex.length)], 1);
};

console.log(randomArray());