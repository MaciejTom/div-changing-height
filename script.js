const myDiv = document.createElement("div");

document.body.appendChild(myDiv);


myDiv.style.width = "100vw";
myDiv.style.backgroundColor = "red";
myDiv.style.position = "fixed";

document.body.style.height = "300vh";

let grow = true;

let size = 20;


changeHeight = () => {
    myDiv.style.height = size + "px"; 

    if (size <= 10) {
        grow = !grow
        myDiv.style.backgroundColor = "red";

    } else if (size >= window.innerHeight / 2) {
        grow = !grow;
        myDiv.style.backgroundColor = "green";
    }

    if (grow) {
        size += 10
     
    } else if (!grow) {
         size -= 10
   
    }    
}

window.addEventListener('scroll', changeHeight);