const hungerStat = document.querySelector(".hunger-stat");
const boredomStat = document.querySelector(".boredom-stat");
const neatnessStat = document.querySelector(".neatness-stat");
const sizeStat = document.querySelector(".size-stat");

const content = document.querySelector(".content");
const message = document.querySelector(".message");
const feedBtn = document.querySelector(".feed-btn");
const playBtn = document.querySelector(".play-btn");
const cleanBtn = document.querySelector(".clean-btn");


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width=300;
canvas.height=200;
ctx.fillStyle = "#eee";
ctx.fillRect(50, 0, canvas.width, canvas.height);

let img = new Image();
img.src = "./img/dog.png";
img.onload = function(){
    ctx.drawImage(img, 50, 0, img.width * 0.3, img.height * 0.3);
} 


class Dog {
    constructor(){
        this.hunger = 0;
        this.boredom = 100;
        this.neatness = 100;
        this.size = 30;
        this.boredFlag = true;
        this.hungerFlag = true;
        this.dirtyFlag = true;
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
        if(this.neatness < 100){
            this.neatness += 50;
        }
    }
    metabolyze(){
        if(this.hunger < 100){
            this.hunger++;
        }
        if(this.boredom < 100){
            this.boredom++;
        }
        if(this.neatness > 1){
            this.neatness--;
        }
        if(this.hunger < 20){
            if(this.size < 126){
                this.size++;
            }
        }
        if(this.boredom > 99){
            this.boredFlag = true;
        } else {
            this.boredFlag = false;
        }
        if(this.hunger > 30){
            this.hungryFlag = true;
        } else{
            this.hungryFlag = false;
        }
        if(this.neatness > 30){
            this.dirtyFlag = true;
        } else{
            this.dirtyFlag = false;
        }

    }
    updateCanvas(){
        ctx.fillStyle = "#eee";
        ctx.fillRect(50, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 50, 0, img.width * this.size / 100, img.height * this.size / 100);
    }

    updateStats(){
        hungerStat.innerHTML = `Hunger: ${this.hunger}`;
        boredomStat.innerHTML = `Boredom: ${this.boredom}`;
        neatnessStat.innerHTML = `Neatness: ${this.neatness}`;
        sizeStat.innerHTML = `Size: ${this.size}`;
    }

    displayMessage() {
        if(this.boredFlag && !message.innerHTML.includes("bored")){
            message.innerHTML += "I am bored! ";
        } else {
            message.innerHTML = "";
        }
        if(this.hungryFlag && !message.innerHTML.includes("hungry")){
            message.innerHTML += "I am hungry! ";
        }
    }
}

const dog = new Dog();



setInterval(()=>{
    // console.log(dog.hunger, dog.boredom, dog.neatness, dog.size);
    dog.metabolyze();
    dog.updateCanvas();
    dog.updateStats();
    dog.displayMessage();
},1000);


feedBtn.addEventListener("click", ()=>{
    dog.feed();
});
playBtn.addEventListener("click", () => {
    dog.play();
})
cleanBtn.addEventListener("click", () => {
    dog.clean();
})