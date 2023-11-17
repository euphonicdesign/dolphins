function getStoryChapter1(name) {

    return {
        currentScene: "central",
        currentChapter: "1",
        player: {
            inventory: [
            ]
        },
        lastActionStory: ``,
        conditionsAchieved: [
        ],
        central: {
            story: `The story begins here... Once upon a time...<br><br> 
            (Really?! Remember <strong>${name}</strong> that you can 'restart' at any point. 
            Buena suerte!)<br><br>
            You are now in the central area. This place looks like a big
            intersection with multiple roads coming in and out. It is a
            beautiful day outside and you feel ready to explore the
            surroundings. There are multiple directions where you can go.
            `,
            story2flag: false,
            story2:`
            You are now in the central area. This place looks like a big
            intersection with multiple roads coming in and out. It is a
            beautiful day outside and you feel ready to explore the
            surroundings. There are multiple directions where you can go.
            `,
            choices: [
                {
                    choice: "attic",
                    destination: "attic",
                },
                {
                    choice: "riverside",
                    destination: "riverside",
                },
                {
                    choice: "tree",
                    destination: "tree",
                },
                {
                    choice: "cave",
                    destination: "cave",
                },
            ],
            items: [
            ],
            image: "central.png",
        },
        attic: {
            story: `This place looks like the attic of an old building. Although,
            there is only one window, the rays of the sun are sufficient to reveal most of
            the area and you are able to make your way around. Little specks of dust
             are flowing into the
            air and create an interesting visual effect. There are a couple of
            objects in this forgotten place. One of them is rather shiny and looks
            interesting.
            `,
            story2flag: false,
            story2:`
            This place looks like the attic of an old building. Although,
            there is only one window, the rays of the sun are sufficient to reveal most of
            the area and you are able to make your way around. Little specks of dust
            are flowing into the
            air and create an interesting visual effect.
            `,
            choices: [
                {
                    choice: "central",
                    destination: "central",
                },
            ],
            items: [
                {
                    name: "shield",
                    story: `
                    You get closer to the shiny object and pick up the shield.
                    `,
                },
                {
                    name: "food",
                    story: `
                    You take with you some food.
                    `,
                },
            ],
            image: "attic.png",
        },
        tree: {
            story: `It is where the road has brought you. You would like to advance
            farther, but a giant tree and some luxurious vegetation are blocking
            your way. This natural barrier creates a large area of shade. It looks
            rather impressive and you wonder if there is any way around it...
            On the ground, you notice a sturdy ladder.
            `,
            choices: [
                {
                    choice: "central",
                    destination: "central",
                },
                {
                    choice: "talk to the ladder",
                    destination: "tree",
                    story: `
                    You get closer to the ladder and start talking to her.
                    Probably, not the most intelligent action you could do...
                    `,
                },
                {
                    choice: "climb",
                    destination: "tree",
                    story: `
                    You try to climb the tree,
                    but you slip and get to embrace mother Earth once again...
                    There should be an easier way to get up there!
                    `,
                    storyConditionMet:`
                    You climb the ladder and
                    get up in the tree. The view is beautiful... You can see the
                    entire realm from up here.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_ladder",],
                        "itemsReturned": ["_branches",],
                    },
                },
                {
                    choice: "push ladder",
                    destination: "tree",
                    story: `
                    You push the ladder against the tree.
                    `,
                    storyConditionMet:`
                    The ladder is now standing against the tree.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_ladder",],
                    },
                },
                {
                    choice: "push branch",
                    destination: "tree",
                    story: `
                    You cannot reach the branches...
                    `,
                    storyConditionMet:`
                    Moving the branches, you find a mobile phone and a
                    pair of zapatos por tango...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_branches"],
                        "itemsReturned": ["zapatos","phone"],
                    },
                },
            ],
            image: "tree.png",
        },
        riverside: {
            story: `The road continues down south, and to the left side
            there is a narrow river flowing downstream. You are sitting on the
            right side of the road. From here, you can see green grass and
            a deep forest looming into the background. You hear a strange noise
            coming from nearby. A white unicorn is resting down on the ground.
            He does not look very well...
            `,
            choices: [
                {
                    choice: "central",
                    destination: "central",
                },
                {
                    choice: "princess",
                    destination: "princess",
                },
                {
                    choice: "talk",
                    destination: "riverside",
                    story: `
                    You talk to the unicorn and you find out his story. He needs 
                    your help.
                    `,
                    storyConditionMet:`
                    Suddenly he feels rejuvenated, he gets up and
                    runs into the deep forest. He leaves an interesting flower behind him
                    and you pick it up.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_unicorn strength", "_unicorn hidratation"],
                        "itemsReturned": ["flower"],
                    },
                },
                {
                    choice: "give food",
                    destination: "riverside",
                    story: `
                    You don't have any food left...
                    `,
                    storyConditionMet:`
                    The unicorn eats the little food you offer him. He gets
                    additional strength back..
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["food",],
                        "itemsReturned": ["_unicorn strength"],
                    },
                },
                {
                    choice: "give water",
                    destination: "riverside",
                    story: `
                    You don't have any water left...
                    `,
                    storyConditionMet:`
                    The unicorn drinks the water you have brought him. He gets
                    additional strength back...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["water",],
                        "itemsReturned": ["_unicorn hidratation"],
                    },
                },
            ],
            image: "riverside.png",
        },

        princess: {
            story: `You arrive at another house and choose to enter the main room. It is a
            delightful place. There are some books spread on a nearby
            table. In the middle of the table, there is a vase with some colourful
            flowers, and at the table side there are two comfortable chairs.
            Looking into the background, you see a window and a couple of plants
            showering into the light. You also notice a beautiful princess that is
            looking at you.
            `,
            choices: [
                {
                    choice: "riverside",
                    destination: "riverside",
                },
                {
                    choice: "talk to the princess",
                    destination: "princess",
                    story: `
                    The princess offers you a 
                    cup of coffee and tells you that she had a busy day. She had to
                    leave her office at 3PM, and then run to the university to take an exam.
                    She can now finally rest. You continue to talk. The
                    conversation is nice and stimulating. She feels relaxed now.
                    `,
                    storyConditionMet:`
                    The princess feels relaxed now...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["coffee"],
                    },
                },
                {
                    choice: "give flower",
                    destination: "princess",
                    story: `
                    You don't have any flowers...
                    `,
                    storyConditionMet:`
                    The princess has received your flower and starts smiling.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["flower"],
                        "itemsReturned": ["_smile"],
                    },
                },
                {
                    choice: "give zapatos",
                    destination: "castle",
                    story: `
                    You need a pair of zapatos and make sure the princess is happy...
                    `,
                    storyConditionMet:`
                    You show her the pair of zapatos you have found.
                    They remind you of an Argentinian folk dance called Chacarera, where the man does
                    this pattern with his feet, resembling the attitude of a wild horse. It may look a bit silly, but
                    can be great fun. She finds the zapatos a little bit old fashioned, and shows you
                    her pair of dance shoes. You find the heels just a bit too high and a little bit too
                    sharp, and you ponder on the idea that they could be used as weapons. 
                    She laughs. Everything is fine now and you got a big smile.
                    You take the princess and you go to a new place.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["zapatos","_smile",],
                        "itemsReturned": ["_smile1"],
                    },
                },
                {
                    choice: "give phone",
                    destination: "princess",
                    story: `
                    You don't have any phone...
                    `,
                    storyConditionMet:`
                    The princess starts texting.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["phone",],
                        "itemsReturned": [],
                    },
                },
            ],
            image: "princess.png",
        },

        cave: {
            story: `You arrived here after a 20 minutes' walk to the
            east side of the realm. To reach the cave, you had had to climb up a
            steep hill covered with rocks and muddy terrain. After all this
            effort, you are now inside the cave. It is rather dark and cold,
            so you light up a lamp to look around. Looking deeper into the cave, you notice 
            a mighty dragon. Long streams of smoke flow outside his nostrils and 
            he does not look very friendly. You start to shiver.
            `,
            choices: [
                {
                    choice: "central",
                    destination: "central",
                },
                {
                    choice: "fight",
                    destination: "cave",
                    story: `
                    You attack the dragon,
                    but he is much more powerful and agile than you. To escape
                    his dangerous blows, you throw yourself outside the cave and
                    down the hill. You get a couple of bruises, but you survive.
                    `,
                    storyConditionMet:`
                    You attack the dragon
                    in a valiant attempt to defeat him. The dragon is much more
                    powerful than you, and starts throwing balls of fire.
                    Fortunately, you are protected by your shield, and he cannot hurt you.
                    After 15 minutes, the dragon flies away 
                    and you start searching through the rest of the cave. In one of the corners, 
                    you find some wood and a bottle full of water.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["shield",],
                        "itemsReturned": ["water",],
                    },
                },
                {
                    choice: "run",
                    destination: "central",
                    story: `
                    You start running. The
                    dragon chases you, but you manage to escape!
                    `,
                },
            ],
            image: "cave.png",
        },

        goHome: {
            story: `Back at home...
            `,
            image: "attic.png",
            defaultDestination: "central",
            buttonText: "Let's try this again",
        },

        castle: {
            story: `Inside the room, there is a smooth shiny floor, which looks just perfect!\
            Los zapatos son para bailar... At the end of the room there is a large window,\
            through which you can see the view outside. Something is running in the \
            garden outside the castle. It is a white bunny.
            `,
            choices: [
                {
                    choice: "follow the bunny",
                    destination: "theend",
                    story: `
                    You chose to follow the white\
                    bunny and the princess comes with you. That's interesting...
                    `,
                },
                {
                    choice: "admire the view",
                    destination: "castle",
                    story: `
                    You chose to admire the view. Nothing interesting though...
                    `,
                },
            ],
            image: "castle.png",
        },

        theend: {
            story: `
            Chapter 1 ends here ${name}... In the next chapters, we are going\
            to meet some other interesting characters...
            `,
            choices: [
            ],
            image: "theend.png",
            buttonText: "Select the 2nd chapter from the top"
        },
    }
}