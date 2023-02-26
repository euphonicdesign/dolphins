const img = new Image();
img.src = "./img/dog.png";

class Dog {
    constructor(){
        this.hunger = 0;
        this.boredom = 100;
        this.neatness = 0;
        this.size = 30;
    }
    feed(){
        if(this.hunger > 0){
            this.hunger -= 40;
        }
    }
    play(){
        if(this.boredom > 0){
            this.boredom -= 20;
        }
    }
    clean(){
        if(this.neatness > 0){
            this.neatness -= 50;
        }
    }
    metabolyze(){
        if(this.hunger < 100){
            this.hunger++;
        }
        if(this.boredom < 100){
            this.boredom++;
        }
        if(this.neatness < 100){
            this.neatness++;
        }
        if(this.hunger < 20){
            if(this.size < 126){
                this.size++;
            }
        }
    }
    updateCanvas(){
        ctx.fillStyle = "#eee";
        ctx.fillRect(50, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 50, 0, imgWidth * this.size / 100, imgHeight * this.size / 100);
    }

    updateStats(){
        hungerStat.innerHTML = `Hunger: ${this.hunger}`;
        boredomStat.innerHTML = `Boredom: ${this.boredom}`;
        neatnessStat.innerHTML = `Neatness: ${this.neatness}`;
        sizeStat.innerHTML = `Size: ${this.size}`;
    }
}

const dog = new Dog();

 //incarcare imagine
 img.addEventListener("load", loadImage, false);
 function loadImage(e) {
    console.log(e);
    ctx.drawImage(img, 50, 0, imgWidth * dog.size / 100, imgHeight * dog.size / 100);
 }

setInterval(()=>{
    // console.log(dog.hunger, dog.boredom, dog.neatness, dog.size);
    dog.metabolyze();
    dog.updateCanvas();
    dog.updateStats();
},1000);


const hungerStat = document.querySelector(".hunger-stat");
const boredomStat = document.querySelector(".boredom-stat");
const neatnessStat = document.querySelector(".neatness-stat");
const sizeStat = document.querySelector(".size-stat");

const content = document.querySelector(".content");
const feedBtn = document.querySelector(".feed-btn");
const playBtn = document.querySelector(".play-btn");
const cleanBtn = document.querySelector(".clean-btn");

const imgWidth = img.width;
const imgHeight = img.height;

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width=300;
canvas.height=200;
ctx.fillStyle = "#eee";
ctx.fillRect(60, 0, canvas.width, canvas.height);
content.appendChild(canvas);



feedBtn.addEventListener("click", ()=>{
    dog.feed();
});
playBtn.addEventListener("click", () => {
    dog.play();
})
cleanBtn.addEventListener("click", () => {
    dog.clean();
})