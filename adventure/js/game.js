console.log("The javascript file has been loaded.");

let story;

const startButton = document.querySelector("#start-button");
const content = document.querySelector("#content");

startButton.addEventListener("click", function() {
    const nameInput = document.querySelector("#name-input");
    story = getStoryChapter1(nameInput.value);
    renderScene();
});

function getInputs(){
    let input = "";
    if(!story[story.currentScene].choices){
        return "";
    }
    for(let i=0; i<story[story.currentScene].choices.length; i++){
        // console.log(story[story.currentScene].choices[i].choice);
        input += `
            <input 
                data-destination=${story[story.currentScene].choices[i].destination} 
                id="radio${(i+1)}" 
                type="radio" 
                name="choices">
            <label for="radio${(i+1)}">${story[story.currentScene].choices[i].choice}</label>
        `;
    }

    return input;
};

function getPickInputs(){
    let input = "";
    if(!story[story.currentScene].items){
        return "";
    }
    let numberOfChoices = story[story.currentScene].choices.length;
    for(let i=0; i<story[story.currentScene].items.length; i++){
        // console.log(story[story.currentScene].choices[i].choice);
        input += `
            <input 
                data-destination=${story.currentScene}
                data-action-type="pick"
                data-item=${story[story.currentScene].items[i].name} 
                id="radio${(numberOfChoices+i+1)}" 
                type="radio" 
                name="choices">
            <label for="radio${(numberOfChoices+i+1)}">pick ${story[story.currentScene].items[i].name}</label>
        `;
    }

    return input;
};

function getInventory(){
    let input = "";

    if(story.player.inventory){
        for(let i=0; i<story.player.inventory.length; i++){
            //check if the item has an _ mark, then do not display
            if(story.player.inventory[i].substring(0,1)!="_")
                input += `${story.player.inventory[i]}, `;
        }
    }
    input = input.slice(0,input.length-2);

    return input;
}

function getItemsAroundYou(){
    let input = "";

    if(story[story.currentScene].items){
        for(let i=0; i<story[story.currentScene].items.length; i++){
            input += `${story[story.currentScene].items[i].name}, `;
        }
    }

    input = input.slice(0,input.length-2);
    return input;
}



function renderScene() {
    let text = "Continue";
    let image = "";
    if(story[story.currentScene].image){
        image = "<img></img>";
    }
    if(story[story.currentScene].buttonText){
        text = story[story.currentScene].buttonText;
    }
    content.innerHTML = `
        <button id="chapter1-button" class="chapter-buttons">Chapter 1</button>
        <button id="chapter2-button" class="chapter-buttons">Chapter 2</button>
        <button id="chapter3-button" class="chapter-buttons">Chapter 3</button>
        <button id="chapter4-button" class="chapter-buttons">Chapter 4</button>
        <button id="chapter5-button" class="chapter-buttons">Chapter 5</button>
        <button id="save-button">Save</button>
        <button id="load-button">Load</button>
        <br>
        <h1>Chapter ${story.currentChapter}</h1>
        <p>${displayLastActionText()}</p>
        <p>${displayStoryText()}</p>
        ${image}<br>
        <p>
            ${getConditionsAchieved()}<br>
            Inventory: ${getInventory()} <br>
            Around you: ${getItemsAroundYou()}
            <br>
            What next?
        <p>
        
        ${getInputs()}
        ${getPickInputs()}
        <br><br>
        <button id="submit-button">${text}</button>
        `;
    if(story[story.currentScene].image){
        document.querySelector("img").src = `./img/ch${story.currentChapter}/${story[story.currentScene].image}`;
    }
    let submitButton = document.querySelector("#submit-button");
    submitButton.addEventListener("click", getInputValue)

    setChapterButtonsLogic();
    setLoadSaveButtonsLogic();
};

function getInputValue(){
    // console.log("You clicked the button");
    let inputs = document.querySelectorAll('input[type="radio"]');
    let labelInputs = document.querySelectorAll('label');
    for(let i=0; i < inputs.length; i++){
        if(inputs[i].checked) {

            



            let conditionMet = false;
            //check if there is a story text for the action and 
            for(let j=0;j<story[story.currentScene].choices.length;j++)
                if(story[story.currentScene].choices[j].choice === labelInputs[i].textContent){
                    
                    story.lastActionStory = story[story.currentScene].choices[j].story;
                    

                    //check if action returns items
                    if(story[story.currentScene].choices[j].returnedItems){
                        // console.log(story[story.currentScene].choices[j].returnedItems);
                        let returnedItems = story[story.currentScene].choices[j].returnedItems;
                        //if yes, push items into the inventory
                        for(let s=0;s<returnedItems.length;s++){
                            story.player.inventory.push(returnedItems[s]);
                        }
                        //and empty array
                        story[story.currentScene].choices[j].returnedItems.splice(0,returnedItems.length);
                    }

                    
                    //check if the story condition has been met already
                    if(story[story.currentScene].choices[j].condition){
                        if(story[story.currentScene].choices[j].condition["conditionMet"]){
                            story.lastActionStory = story[story.currentScene].choices[j].storyConditionMet;
                            conditionMet = true;
                        }
                        else{
                            //conditionMet = false
                            //check if action returns items when items required are empty
                            if(story[story.currentScene].choices[j].condition["itemsRequired"].length == 0){
                                let itemsReturned = story[story.currentScene].choices[j].condition["itemsReturned"];

                                //add returned items to player inventory
                                for(let i=0;i<itemsReturned.length; i++){
                                    story.player.inventory.push(itemsReturned[i]);
                                }

                                //remove returned items from action inventory
                                story[story.currentScene].choices[j].condition["itemsReturned"].splice(0,itemsReturned.length);

                                //conditionMet becomes true
                                story[story.currentScene].choices[j].condition["conditionMet"] = true;

                            }
                            else {
                                //condition met false and items required
                                //check if items in inventory
                                let itemsRequired = story[story.currentScene].choices[j].condition["itemsRequired"];
                                // console.log(itemsRequired);
                                
                                let itemsArePresentInTheInventory = true;
                                for(let i=0;i<itemsRequired.length;i++){
                                    let itemPresent = false;
                                    for (k=0;k<story.player.inventory.length;k++){
                                        if(itemsRequired[i] == story.player.inventory[k]){
                                            itemPresent = true;
                                            break;
                                        }
                                    }
                                    if(!itemPresent) {
                                        itemsArePresentInTheInventory = false;
                                    }
                                }
                                // console.log(itemsArePresentInTheInventory);
                                if(itemsArePresentInTheInventory){
                                    // console.log("items are present in the inventory")
                                    //set conditionMet
                                    story[story.currentScene].choices[j].condition["conditionMet"] = true;
                                    //set last action
                                    story.lastActionStory = story[story.currentScene].choices[j].storyConditionMet;
                                    //retrieve itemsReturned
                                    let itemsReturned = story[story.currentScene].choices[j].condition["itemsReturned"];
                                    for(let i=0;i<itemsReturned.length;i++){
                                        story.player.inventory.push(itemsReturned[i]);
                                    }
                                    itemsReturned.splice(0,itemsReturned.length);
                                }
                            }

                            //check conditionMet
                            //story[story.currentScene].choices[j].condition["conditionMet"] = true;
                        
                            if(story[story.currentScene].choices[j].condition["conditionMet"]){
                                story.currentScene = inputs[i].getAttribute("data-destination");
                            }
                            renderScene();
                            return;
                        
                        }
                    }
                    
                }
            renderScene();


            //check if action is of type pick
            if(inputs[i].getAttribute("data-action-type")){
                if(inputs[i].getAttribute("data-action-type")==="pick"){
                    let array = story[story.currentScene].items;
                    let itemName = inputs[i].getAttribute("data-item");

                    //find the index of the item and store it in j
                    let index = -1;
                    for(let j=0;j<array.length;j++){
                        if(array[j].name === itemName){
                            index = j;
                            break;
                        } 
                    }

                    //add last action story
                    story.lastActionStory = array[index].story;

                    //remove item from scene items
                    if (index !== -1) {
                        array.splice(index, 1);
                    }
                    //move item to player inventory
                    story.player.inventory.push(itemName);  
                }
            }

            
            //check if action is of type give
            let action = labelInputs[i].textContent;
            console.log(action);
            if(action.indexOf("give")==0){
                //check if player inventory has action items required
                let itemsRequired = "";
                let indexChoice = -1;
                
                
                for(let j=0;j<story[story.currentScene].choices.length;j++){
                    console.log("Bingo!");
                    if(story[story.currentScene].choices[j].choice === labelInputs[i].textContent){
                        indexChoice = j;
                        itemsRequired = story[story.currentScene].choices[j].condition["itemsRequired"];
                    }
                }
                    
                let playerHasItems = true;
                for (let k=0; k<itemsRequired.length; k++){
                    if(!story.player.inventory.includes(itemsRequired[0])){
                        playerHasItems = false;
                        break;
                    }
                }

                if(playerHasItems){
                    story.lastActionStory = story[story.currentScene].choices[indexChoice].storyConditionMet;
                    story[story.currentScene].choices[indexChoice].condition["conditionMet"] = true;

                    //return conditionsAchieved
                    //return into player inventory the action returned items
                    let itemsReturned = story[story.currentScene].choices[indexChoice].condition["itemsReturned"];
                    for (let i=0;i<itemsReturned.length;i++){
                        // story.conditionsAchieved.push(itemsReturned[i]);
                        story.player.inventory.push(itemsReturned[i]);
                    }

                    //remove items from player
                    let array = story.player.inventory;
                    for (let i=0; i<itemsRequired.length;i++){
                        let itemName = itemsRequired[i];

                        // find the index of the item and store it in j
                        let index = -1;
                        for(let j=0;j<array.length;j++){
                            if(array[j] === itemName){
                                index = j;
                                break;
                            } 
                        }

                        //remove item from player
                        if (index !== -1) {
                            array.splice(index, 1);
                        }
                    }
                    
                }
                
            }

            



            // if(conditionMet){
                story.currentScene = inputs[i].getAttribute("data-destination");
            // }
            

            renderScene();
            return;
        }
    }

    //in case nothing is selected go to a default destination, or do nothing
    if(story[story.currentScene].defaultDestination){
        story.currentScene = story[story.currentScene].defaultDestination;
        renderScene();
    }
    
}

function salvareStare() {
    console.log("se salveaza starea: ", story);
    localStorage.setItem('stare', JSON.stringify(story));
}


function setLoadSaveButtonsLogic(){
    const saveButton = document.querySelector("#save-button");
    saveButton.addEventListener("click",()=>{
        //console.log("Se salveaza starea: ", story);
        localStorage.setItem('story', JSON.stringify(story));
    })

    const loadButton = document.querySelector("#load-button");
    loadButton.addEventListener("click",()=>{
        //console.log("Se incarca starea: ");
        //nameInput
        story = JSON.parse(localStorage.getItem('story'));
        renderScene();
    })
}

function setChapterButtonsLogic() {
    const chapter1Button = document.querySelector("#chapter1-button");
    chapter1Button.addEventListener("click",()=>{
        console.log("Click");
        //nameInput
        story = getStoryChapter1("");
        renderScene();
    })

    const chapter2Button = document.querySelector("#chapter2-button");
    chapter2Button.addEventListener("click",()=>{
        console.log("Click Chapter 2");
        //nameInput
        story = getStoryChapter2("");
        renderScene();
    })

    const chapter3Button = document.querySelector("#chapter3-button");
    chapter3Button.addEventListener("click",()=>{
        console.log("Click Chapter 3");
        //nameInput
        story = getStoryChapter3("");
        renderScene();
    });

    const chapter4Button = document.querySelector("#chapter4-button");
    chapter4Button.addEventListener("click",()=>{
        console.log("Click Chapter 4");
        //nameInput
        story = getStoryChapter4("");
        renderScene();
    });

    const chapter5Button = document.querySelector("#chapter5-button");
    chapter5Button.addEventListener("click",()=>{
        console.log("Click Chapter 5");
        //nameInput
        story = getStoryChapter5("");
        renderScene();
    });
}

function displayStoryText() {
    let input = "";

    if(story[story.currentScene].story2flag && story[story.currentScene].story2){
        input = story[story.currentScene].story2;
    }
    else {
        input = story[story.currentScene].story;
        story[story.currentScene].story2flag = true;
    }

    return input;
};

function displayLastActionText(){
    //check if there was a last action performed and display the text
    input = "";

    if(story.lastActionStory){
        input = story.lastActionStory;
    }

    return input;

}

function getConditionsAchieved(){
    let input = "Conditions achieved:  ";

    if(story.player.inventory){
        for(let i=0; i<story.player.inventory.length; i++){
            //check if the item has an _ mark, then do display
            if(story.player.inventory[i].substring(0,1)=="_")
                input += `${story.player.inventory[i].slice(1,story.player.inventory[i].length)}, `;
        }
    }
    input = input.slice(0,input.length-2);

    return input;
}
