function getStoryChapter3(name) {

    return {
        currentScene: "port",
        currentChapter: "3",
        player: {
            inventory: [
            ]
        },
        lastActionStory: ``,
        conditionsAchieved: [
        ],
        port: {
            image: "port.jpg",
            story: `
            Continuing from last time...<br>
            You are still in the port area with this pressing thought on your
            mind,
            and a lot of determination. Time to get moving!
            `,
            story2flag: false,
            story2:`
            You take the up route and drive along the coastline until you
            reach the port. To the east, you see lines of ships
            and big naval cranes moving cargo around. In your area, there are
            mainly light vessels used by tourists and sailing enthusiasts.
            You get closer to one of the ships. This one has a tall mast and
            long white sails. On one of its sides there is a shiny inscription.
            It says 'Princess'. You go aboard and
            you encounter a sailor, who is looking far into the sea. He has a
            couple of drawings on his table.
            `,
            choices: [
                {
                    choice: "city intersection",
                    destination: "city_intersection",
                },
            ],
            items: [
            ],
            
        },

        city_intersection: {
            image: "city intersection.jpg",
            story: `
            In the middle of the interesection there is a
            big artisanal fountain. You could either go right to visit the east city,
            or you could go up to return to the port.
            `,
            story2flag: false,
            story2:`
            In the middle of the interesection there is a
            big artisanal fountain. You could either go right to visit the east city,
            or you could go up to return to the port.
            `,
            choices: [
                {
                    choice: "port",
                    destination: "port",
                },
                {
                    choice: "east city",
                    destination: "east_city",
                },
            ],
            items: [
            ],
            
        },

        east_city: {
            image: "east city.jpg",
            story: `
            You could continue driving to the right and exit the city, or you
            could choose to go left and return to the city intersection.
            `,
            story2flag: false,
            story2:`
            You could continue driving to the right and exit the city, or you
            could choose to go left and return to the city intersection.
            `,
            choices: [
                {
                    choice: "city intersection",
                    destination: "city_intersection",
                },
                {
                    choice: "forest",
                    destination: "forest",
                },
            ],
            items: [
            ],
            
        },

        forest: {
            image: "forest.jpg",
            story: `
            You go right, and drive on this route until you reach the
            edge of a forest. The road leading into the forest is not paved.
            Knowing that your car is not in a very good shape, and that the brakes are
            not working very well, you ponder whether you should continue on this
            way, or not. You check the gas indicator, and  it seems there is not too much
            fuel left in the reservoir either. You think about
            it for a second, and then you decide to walk on foot into the forest.
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "camping",
                    destination: "camping1",
                },
                {
                    choice: "admire vegetation",
                    destination: "forest",
                    story: `
                    As you walk, you admire the vegetation and all the greenery that
                    surrounds you.
                    The branches of the trees cast long shadows on the ground.
                    Through the branches, you see and hear various
                    birds that are chirping and singing
                    melodic trills.
                    The air is very rich and pleasant, and
                    you feel at peace.
                    The more you advance, the more you find things
                    that captivate your attention, and make you want to go even further
                    into the forest.
                    At some point, you ask yourself whether you should return. It is then
                    when you realize that nothing in your environment would
                    indicate your way back. You are lost...
                    `,
                },
            ],
            items: [
            ],
            
        },

        camping1: {
            image: "camping1.jpg",
            story: `
            You continue to walk until you encounter a large and empty trunk
            of an old tree, fallen down on the ground. Behind it, you find what
            seems to be the remnants of a camping fire. Someone must have been
            here before... There are some rocks arranged in a concentric manner,
            and some ashes and leftovers of the wood that must have burnt
            inside the containment.
            Not too far away, you also notice a pile of neatly arranged wood
            sticks.
            You would like to advance beyond this point,
            but you stop... Something is blocking the way. There is large spider web covering the way ahead...
            `,
            story2flag: false,
            story2:`
            In the middle of this place there is what seems to be the remnants of a
            camping fire with some ashes and wood leftovers, surrounded by rocks.
            Not too far away, there is a pile of neatly arranged wood sticks.
            You want to advance beyond this point,
            but a large spider web is preventing you from doing it...
            `,
            choices: [
                {
                    choice: "web",
                    destination: "web",
                    story: `
                    You go towards the spider web. It looks very peculiar from the outside.
                    `
                },
                {
                    choice: "fireplace",
                    destination: "fireplace",
                    story: `
                    You go towards the fireplace.
                    `,
                },
                {
                    choice: "get stick",
                    destination: "camping1",
                    story: `
                    You pick up a stick from the nearby pile.
                    `,
                    storyConditionMet:`
                    You already have one.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["stick"],
                    },
                },
                
            ],
            items: [
            ],
            
        },

        web: {
            image: "web.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "camping",
                    destination: "camping1",
                },
                {
                    choice: "watch",
                    destination: "web",
                    story: `
                    You get closer to the web and start looking at the details.
                    It seems rather sticky... Better not to touch it!
                    But wait! There is something there making small movements.
                    A small ladybug seems to be entrapped...
                    `,
                    storyConditionMet:`
                    You get closer to the web, and start looking at the details.\
                    It seems rather sticky... Better not to touch it!
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_ladybug observation"],
                    },
                },
                {
                    choice: "release",
                    destination: "web",
                    story: `
                    Nothing to release...
                    `,
                    storyConditionMet:`
                    With a careful touch, you manage to release the ladybug. She flies away and lands on a pile of dry leafs. You pick up a couple of them.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_ladybug observation"],
                        "itemsReturned": ["leafs"],
                    },
                },
                {
                    choice: "push",
                    destination: "web",
                    story: `
                    Too sticky... you would rather not do that!
                    `,
                    storyConditionMet:`
                    Really sticky... you would rather not do that!
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use stick",
                    destination: "web",
                    story: `
                    You need to find a stick.
                    `,
                    storyConditionMet:`
                    The web seems to be highly resistant. What sort of spider\
                    web is this?
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["stick"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use torch",
                    destination: "forest_clearing",
                    story: `
                    You need to find a torch.
                    `,
                    storyConditionMet:`
                    You use the lighting torch on the spider web and the web melts away.
                    You are now able to pass!
                    You walk ahead and reach a medium sized open area surrounded by trees.
                    There are many flowers growing around with colors ranging from
                    bright red to full white. The flowers are large and fragrant. They
                    seem to be wild peonies.  It's strange, because you thought they
                    grew only in the Spring. At the edge of the
                    area, next to the forest trees, you notice some mushrooms.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["torch"],
                        "itemsReturned": ["_web melted"],
                    },
                },
                
            ],
            items: [
            ],
            
        },

        fireplace: {
            image: "fireplace1.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            You get closer to the fireplace. A circle of rocks surrounds some ashes and wood
            leftovers.
            `,
            choices: [
                {
                    choice: "camping",
                    destination: "camping1",
                },
                {
                    choice: "watch",
                    destination: "fireplace",
                    story: `
                    `,
                    storyConditionMet:`
                    You watch the campfire. There are a couple of rocks arranged
                    in a circle, and in the middle of it, there is a small fire burning
                    lightly. From time to time you hear some pops and cracks, and you see
                    small red dots raising up into the air and then vanishing
                    away. Unless you add more dry leafs, the fire is going to
                    fade away pretty soon.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_fire started"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use rock",
                    destination: "fireplace",
                    story: `
                    You need a rock and make sure the fireplace is prepared.
                    `,
                    storyConditionMet:`
                    You take your rock and then you pick a second one from the circle
                    of stones. You pick the one that shines the most,
                    and then you strike the two of them to create a
                    spark... Unfortunately, it doesn't work like in the movies,
                    and there is one more detail you might have overlooked -
                    these are not flint stones! Fortunately, there was a box of
                    matches next to the shiny rock you have picked up, and you
                    use it to light up
                    the fire. You are as happy as a child with the result!
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["rock","_fireplace prepared"],
                        "itemsReturned": ["_fire started"],
                    },
                },
                {
                    choice: "use leafs",
                    destination: "fireplace",
                    story: `
                    You need to find a some leafs first.
                    `,
                    storyConditionMet:`
                    You remove the ashes and other wood leftovers, you take the
                    dry leafs you have
                    collected, and then you spread them inside the circle of rocks.
                    You make sure sure they are distributed evenly, and there is
                    enough air in between.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["leafs"],
                        "itemsReturned": ["_fireplace prepared"],
                    },
                },
                {
                    choice: "use stick",
                    destination: "fireplace",
                    story: `
                    You need a stick and make sure the fire is started.
                    `,
                    storyConditionMet:`
                    You push the end of the stick into the fire and then you
                    pull it out. You have just created an olympic torch.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["stick", "_fire started"],
                        "itemsReturned": ["torch"],
                    },
                },
                
            ],
            items: [
                {
                    name: "rock",
                    story: `
                    You have picked up a rock.
                    `,
                },
            ],
            
        },

        forest_clearing: {
            image: "forest clearing.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            This place is surrounded by trees and there are
            many flowers growing around, with colors ranging from
            bright red to full white. The flowers are large and fragrant. They
            seem to be wild peonies. At the edge of the
            area, next to the forest trees, you notice some mushrooms.
            `,
            choices: [
                {
                    choice: "squirell",
                    destination: "squirell",
                },
                {
                    choice: "mushrooms",
                    destination: "mushrooms",
                    story: `
                    You get closer to the mushrooms area. There is a big tree in front
                    of you that looks quite old, with a very large crown, and a wide trunk.
                    The branches seem heavy and leaning a bit towards the ground. It is
                    adorned with beautiful blooming flowers.
                    At its base grow multiple groups of mushrooms. You can distinguish two kinds.
                    There are the colourful mushrooms, which almost look like candies.
                    Unfortunately, they have a high level of toxicity, and generally
                    speaking, they are not edible.
                    There are also the simple mushrooms. They have a white/brownish shade,
                    and look very plain. These are the types that are healthy and edible.
                    Which one would you choose?
                    `,
                },
                {
                    choice: "peonies",
                    destination: "peonies",
                    story: `
                    You move closer to the flowers. The peonies are blooming and have
                    white and bright red colors.
                    This place has a nice fragrance. You avail yourself of the opportunity
                    and lie
                    back down on the grass. Birds are chirping. The sun is warm. Life is good.
                    While laying down on your back, you notice a butterfly flying
                    around.
                    `,
                },
                {
                    choice: "whistle",
                    destination: "waterfall",
                    story: `
                    You start whistling... Nothing happens.
                    `,
                    storyConditionMet:`
                    A little skeptical at first, you decide to give it a try.
                    You hold your hands together, creating a hollow space
                    between your thumbs. Then, you make  a little opening close
                    to the thumbs, and start blowing air into it, just
                    like you were doing when you were a child. This creates a
                    particular sound that resembles the sound made by
                    deers. Nothing happens.
                    You try whistling again, this time blowing more air and for 
                    a longer period of time.
                    Still, no response.
                    You blow air again. This time, after a pause of 3 seconds, you
                    hear back the sound of the deers. They must be getting closer...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_deers sound"],
                        "itemsReturned": [],
                    },
                },
                
            ],
            items: [
            ],
            
        },

        mushrooms: {
            image: "mushrooms.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "forest clearing",
                    destination: "forest_clearing",
                },
                {
                    choice: "pick colourful",
                    destination: "mushrooms",
                    story: `
                    You cannot help it, and go for the colourful mushrooms.\
                    As you touch them, you get some sort of allergic reaction,\
                    and you start feeling bad. This sensation lasts for about\
                    half an hour.
                    `,
                    storyConditionMet:`
                    You would rather not do that again. It may have side effects.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "pick simple",
                    destination: "mushrooms",
                    story: `
                    You start inspecting the mushrooms. They look the right
                    kind, the type that can be eaten. They are rich in vitamin D.
                    You take a bite and your energy level goes up. You feel good!
                    You take a couple of them as food reserve.
                    `,
                    storyConditionMet:`
                    You already have some.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["mushrooms"],
                    },
                },
                
            ],
            items: [
            ],
            
        },

        peonies: {
            image: "peonies.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "forest clearing",
                    destination: "forest_clearing",
                },
                {
                    choice: "follow butterfly",
                    destination: "peonies",
                    story: `
                    You go after the butterfly as he graciously flies from
                    flower to flower. At some point, he lands on a flower and stays longer
                    than usual. You get closer, and notice the rainbow on its
                    flaping wings, as well as its long and curved antennas. Suddenly, you hear a long
                    sound coming from the woods, and the butterfly flies away. The
                    sound has a mysterious tone, but at the same time it has a familiar touch.
                    Yes, you remember clearly now, it is the sound that
                    deers make when roaming around the forest. Your father used to
                    teach you when you were a child how to attract them.
                    `,
                    storyConditionMet:`
                    You go after the butterfly as he graciously flies from
                    flower to flower. At some point, he lands on a flower and stays longer
                    than usual. You get closer, and notice the rainbow on its
                    flaping wings, as well as its long and curved antennas. Suddenly, you hear a long
                    sound coming from the woods, and the butterfly flies away. The
                    sound has a mysterious tone, but at the same time it has a familiar touch.
                    Yes, you remember clearly now, it is the sound that
                    deers make when roaming around the forest. Your father used to
                    teach you when you were a child how to attract them.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_deers sound"],
                    },
                },
                
            ],
            items: [
            ],
        },

        squirell: {
            image: "squirell.jpg",
            story: `
            You go right and arrive at a place where there are a couple of trees spread
            around, and some low grass that is growing and covering the ground.
            While you look at the trees and how the sunlight falling through their branches
            creates
            patches of golden areas on the grass, with the corner of the eye, you
            catch some movement in the grass, and then nothing. You thought
            it was just an illusion, but then the same thing happens again!
            Something like a small ball of brownish/reddish color is moving around
            with quick, but light steps. It is a lovely squirrel! It has a lot of
            energy, moving around, going up in the trees, and then jumping from branch
            to branch. Then coming down, then coming to you, then leaving and
            moving around once more.
            `,
            story2flag: false,
            story2:`
            Here, there are a couple of trees spread around, and some low grass
            that is growing and covering the ground. The sunlight falling through the branches
            of the trees creates
            patches of golden areas on the grass. The super agile squirrel is still
            around. It has a lot of
            energy, moving around, going up in the trees, and then jumping from branch
            to branch. Then coming down, then coming to you, then leaving and
            moving around once more.
            `,
            choices: [
                {
                    choice: "forest clearing",
                    destination: "forest_clearing",
                },
                {
                    choice: "give walnut",
                    destination: "shrubs",
                    story: `
                    You don't have any walnuts that you can give to the squirell...
                    `,
                    storyConditionMet:`
                    As soon as you take out the walnut, the squirrel
                    stops wandering around, raises on two of its feet and looks
                    at you holding its tail up in the air. In an instant she is next
                    to you. You give her the walnut. She picks it and then runs
                    up towards the tallest tree, climbing to the top.
                    You lose the squirrel from sight but you notice another
                    peculiar inhabitant of the forest.<br>
                    It is a bird with a very long beak. Must be a woodpecker.
                    The woodpecker flies away to another tree and you can no
                    longer see it. However you hear it starting to hit the wood.
                    You go in the direction of the sound. When you reach it,
                    the woodpecker flies away to a different tree and start
                    pecking at the tree. You go towards it.
                    After a couple more times. You reach another area.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["walnut"],
                        "itemsReturned": [],
                    },
                },
                
            ],
            items: [
            ],
        },
        waterfall: {
            image: "waterfall.jpg",
            story: `
            Now that you have mastered the technique, you call the deers
            once more. The next moment, you hear some tree leaves
            swishing, and a couple of sparkling eyes appearing from
            behind the shrubs. A little cautious at first, they get
            closer to you, revealing their big antlers and strong bodies.
            They are now in front of you, within an arm's length distance.
            You could almost touch them. They look at you straight into the
            eyes for
            a few moments, and then they turn and go into the woods.
            You follow them until you reach an
            impressive scene. The waterfall that reveals in front of you
            is making a soothing noise. At its base, the
            water is calm and clear. The deers go to drink some water.
            There are some walnuts on the ground, just below the trees.
            `,
            story2flag: false,
            story2:`
            The waterfal that reveals in front of you
            is making a soothing noise. At its base, the
            water is calm and clear.
            `,
            choices: [
                {
                    choice: "forest clearing",
                    destination: "forest_clearing",
                },
                {
                    choice: "watch deers",
                    destination: "waterfall",
                    story: `
                    You watch the deers drinking water...
                    `,
                },
                {
                    choice: "pick walnut",
                    destination: "waterfall",
                    story: `
                    You have picked up a walnut.
                    `,
                    storyConditionMet:`
                    You already have one.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["walnut"],
                    },
                },
                {
                    choice: "drink",
                    destination: "waterfall",
                    story: `
                    As you are getting closer to the water to drink some,
                    in the reflection,
                    you notice the head of a white unicorn,
                    which is standing right behind you.
                    This makes you thrill for one second... The unicorn then
                    raises one of his legs and
                    touches you lightly, pushing you slightly towards the water,
                    and then he stops. For a split of a second you thought you were
                    going to fall into the water... Funny unicorn...
                    `,
                    storyConditionMet:`
                    You are not thirsty anymore...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_water"],
                    },
                },
                {
                    choice: "talk",
                    destination: "waterfall",
                    story: `
                    Talking by yourself is not considered the most wise thing to do...
                    `,
                    storyConditionMet:`
                    You talk to the unicorn. He seems to be having a good time...
                    The unicorn tells you that due to the fact that he knows
                    you, he is
                    going to tell you a little secret. It is about the
                    symbiosis between moss and trees. Yes, you remember,
                    you learned about it in school. Moss tends to grow on a
                    particular side of the tree - the north side.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_water", "_blueberries received"],
                        "itemsReturned": ["_moss knowledge"],
                    },
                },
                {
                    choice: "give blueberries",
                    destination: "waterfall",
                    story: `
                    Who would you give the blueberries to?...Do you have any?...
                    `,
                    storyConditionMet:`
                    The unicorn looks at you and raises one of its eyebrows. He asks
                    you whether you think he looks like a bear? Unicorns don't
                    eat blueberries... That's why they are called white
                    unicorns, and NOT blue unicorns... You don't know what to
                    say... He then adds, that he was just pulling your leg,
                    and he eats the blueberries in an instant... Indeed, very
                    funny unicorn...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_water", "blueberries"],
                        "itemsReturned": ["_blueberries received"],
                    },
                },
                
            ],
            items: [
            ],
        },

        shrubs: {
            image: "shrubs.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            You notice a couple of shrubs and a distinctive tree that is growing in a very an uncommon form.
            `,
            choices: [
                {
                    choice: "forest clearing",
                    destination: "forest_clearing",
                },
                {
                    choice: "get blueberries",
                    destination: "shrubs",
                    story: `
                    You get some blueberries.
                    `,
                    storyConditionMet:`
                    You already have some...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["blueberries"],
                    },
                },
                {
                    choice: "observe tree",
                    destination: "lianas",
                    story: `
                    You look at the tree. Seem to be covered with different shades of green and brown.
                    `,
                    storyConditionMet:`
                    You look closer. Part of the tree is covered with green moss.
                    Moss grows on that part because of the way the sun rises
                    and sunsets. There is more humidity towards the north side.
                    Since you now know where north is, you choose to go into
                    that direction. You walk until you reach
                    the banks of a river that is flowing rapidly. You try the water
                    and it seems to be rather cold and deep. How could you cross onto the
                    other side?
                    There are a couple of rocks in the middle of the river, but they are too far to jump on, and
                    too small to hold ones equilibrium. The trees on your side might
                    be the key. There are some lianas growing up. If you could only
                    grab one of their ends.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_moss knowledge"],
                        "itemsReturned": [],
                    },
                },
                
            ],
            items: [
            ],
        },

        lianas: {
            image: "lianas.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            There is a river in front of you that is flowing very rapidly.
            There are a couple of rocks in the middle of it, but they are too far away to jump on,
            and
            too small to hold ones equilibrium. The trees on your side might
            be the key. There are some lianas growing up... If you could only
            grab one of their ends....
            `,
            choices: [
                {
                    choice: "grab lianas",
                    destination: "train",
                    story: `
                    You try reaching one of the lianas, but to no avail. They are
                    too high, and climbing the tree may not be the best
                    solution. You know that from experience! You know how it
                    feels to embrace mother earth in an unplanned manner...
                    There are better ways...
                    `,
                    storyConditionMet:`
                    You roll the liana end around your wrist, and holding it strongly
                    with both hands you move back to create some momentum, and then
                    you rush forward and jump across the river 'Tarzan style'.
                    You land safely on the other side of the river.
                    The forest clears away here, and you have an open view of the
                    surroundings. The place looks like a meadow covered with grass
                    and vegetation. Some wild grain plants and sunflowers are also present.
                    The color cast is the one created by the sunlight
                    of a late afternoon. In front of you, not very far away, you notice
                    the shiny reflections of a big block of metal sitting on rails.
                    The rails go far into the distance and tend to have an S shape
                    as they get closer to the distant hills.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_free liana"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use stick",
                    destination: "lianas",
                    story: `
                    You use the stick to move the end of the liana until it falls\
                    down. You can now reach the liana with your own hands.
                    `,
                    storyConditionMet:`
                    You have done that already...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_free liana"],
                    },
                },
                
            ],
            items: [
            ],
        },

        train: {
            image: "train.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            It is an interesting train having only the engine and one car.
            The engine has a long shape with one big wheel in
            the back and several smaller ones towards the front. Its design is
            very interesting, having several curves and lines converging towards key
            points. On one side, there is a small panel
            and a hole.
            `,
            choices: [
                {
                    choice: "admire metal object",
                    destination: "train",
                    story: `
                    You move closer to the big metal object. Looks like a train, but one\
                    of a type you have not encountered before. There is only\
                    the engine and one car. The engine has a long shape with one big wheel in\
                    the back and several smaller ones towards the front. Its design is\
                    very interesting, having several curves and lines converging towards key\
                    points. It has a very nice shape. On one side, there is a small panel\
                    and a hole.  Might be powered by solar power, but you do not\
                    know for sure.
                    `,
                },
                {
                    choice: "open panel",
                    destination: "train",
                    story: `
                    The panel is locked...
                    `,
                    storyConditionMet:`
                    You open the panel, and inside you find an electronic board.
                    Looks familiar. Must be the control unit...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_unlocked panel"],
                        "itemsReturned": ["_controls"],
                    },
                },
                {
                    choice: "use rock",
                    destination: "train",
                    story: `
                    You strike the panel with the rock and manage to unlock it.
                    `,
                    storyConditionMet:`
                    You have done that already...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_unlocked panel"],
                    },
                },
                {
                    choice: "tinker controls",
                    destination: "theend",
                    story: `
                    You require access to the control unit...
                    `,
                    storyConditionMet:`
                    You start to investigate whether you can start the train.
                    There are a couple of switches and jumpers that you can set
                    in different positions, but without some sort of instructions
                    it is difficult to figure out how they work. You try a couple of
                    them and notice how several of the leds change color.
                    At some point, the train makes a big sound and you hear what seems
                    to be cogs in motion. You work on it for almost one hour, but
                    you still have no clue how to start and control this thing.
                    Your morale is at the bottom, until something else happens...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_controls"],
                        "itemsReturned": [],
                    },
                },
                
            ],
            items: [
            ],
        },

        theend: {
            image: "theend.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "relax",
                    destination: "theend",
                    story: `
                    You feel someone's presence near you and a light touch on your
                    shoulder. A nice feminine voice is talking. When you
                    turn around, she asks you something, and shows you a couple of
                    schematics. 'Where you looking for this?', she asks.  You were actually
                    looking for her... but anyways, coming back to the story... You take
                    the schematics , happy to see her again, and while you work on
                    figuring out how to start the train, you continue the conversation.
                    It ends up that at some point in time you got out of her sight, and she couldn't
                    find you anymore. She wondered what happened, and while
                    looking around, she found an interesting place with wild peonies that had
                    a very nice scent. Then she found this train...
                    You continue to work on the controller and adjust the parameters
                    so that the ride ahead is fast and comfortable. You pay special
                    attention to the P and I components. You start the train and do
                    a final test. Everything is set up for the upcoming journey. You are
                    very happy with the result, and exclaim 'Voila!'.
                    The princess looks at you with an inquiring look... and then she
                    asks you: 'What took you so long? You should have asked me...'
                    <br><br>Chapter 3 ends here. You may now proceed to the next one.
                    `,
                },
                
            ],
            items: [
            ],
        },

    }
}