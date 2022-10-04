const container = document.getElementById('container');

let array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

let avatar = 0;

window.addEventListener('load', () => {
                
        for(var i = array.length-1;i>=0;i--){

        avatar = array.splice(Math.floor(Math.random()*array.length), 1);
          
        let element = document.createElement('div');
        element.classList.add('classCubes');
        element.style.transform = rotateElement();
        element.style.margin = marginElement();
        element.innerText = avatar;
        container.appendChild(element);

        let counter = 0;
        let firstPlay = 0;
        let secondPlay = 0;
            
        element.addEventListener('click', () => {

            
            firstPlay = element.innerText;
            counter++;
            if(counter == 2){
                secondPlay = element.innerText;
            }
            

            /* if(firstPlay !== ) */
            console.log(firstPlay, secondPlay, counter);

            if(counter == 2){
                console.log('hello world');
            }

            
        });
    }


    function rotateElement(){
        const rotateCube = ["rotate(-1deg)", "rotate(3deg)","rotate(8deg)","rotate(10deg)"];
        return rotateCube[Math.floor(Math.random() * rotateCube.length)];
    };
    /* function colorElement(){
        const colorCube = ['pink', 'brown', 'royalBlue', 'gold'];
        return colorCube[Math.floor(Math.random() * colorCube.length)];
    }; */
    function marginElement(){
        const marginCube = ["-1px", "7px","12px","16px"];
        return marginCube[Math.floor(Math.random() * marginCube.length)];
    };


});
