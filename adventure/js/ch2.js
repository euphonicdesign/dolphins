function getStoryChapter2(name) {

    return {
        currentScene: "starting_place",
        currentChapter: "2",
        player: {
            inventory: [ "ideas",
            ]
        },
        lastActionStory: ``,
        conditionsAchieved: [
        ],
        starting_place: {
            story: `
            Continuing from last time...
            As you follow the white bunny, you start feeling a mild warm sensation 
            throughout  your body. Slowly, your senses give up on you, and you lose 
            consciousness. When you wake up, you realize you are in a different place. 
            There is something peculiar about it. Something has changed, but you can't 
            put your finger on it. For sure, the air is different. It is fresh, and 
            you can breathe easily.You look around for the princess, but she's gone.
            What has happened?
            `,
            story2flag: false,
            story2:`
            You are now in the starting place area. It is warm and sunny outside.The 
            wind is blowing softly. There are several ways to go around.
            `,
            choices: [
                {
                    choice: "bridge end",
                    destination: "bridge_end",
                },
                {
                    choice: "house",
                    destination: "house",
                },
                {
                    choice: "library",
                    destination: "library",
                },
                
                
            ],
            items: [
            ],
            image: "starting_place.png",
        },
        library: {
            story: `
            You pass by several house blocks and take several turns. The people you 
            encounter along the way seem to be occupied with their daily activities. 
            You realize you are in a small quiet town. It feels good to be away from 
            the agitation of the big city. A couple more turns, and you reach what 
            seems to be an ancient school. Curiosity drives you in, and you find a 
            library that is open.
            `,
            story2flag: false,
            story2:`
            You are now in the library area. There are several bookcases standing 
            against the wall. Books of all sizes and shapes fill the shelves.
            `,
            choices: [
                {
                    choice: "starting place",
                    destination: "starting_place",
                },
                {
                    choice: "research",
                    destination: "library",
                    story: `
                    You go to the library to do some research, but you realize that now 
                    may not be the best moment. You feel there are some other things to 
                    attend first.<br>
                    <em>Morning would be a good time...</em>
                    `,
                    storyConditionMet:`
                    You start to research the French language. You find a couple of good 
                    books, some old lectures, some tapes, and a few filmstrips. The grammar 
                    and sounds seem so complicated and pretentious, but you stick with it. 
                    After a few hours, you get the basics. You can now understand and also
                    speak 'un peu de francais'.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_morning",],
                        "itemsReturned": ["_Francais",],
                    },
                },
            ],
            items: [
            ],
            image: "library.png",
        },
        house: {
            image: "house.png",
            story: `
            As you walk, you find yourself in front of a small house and decide to
            enter. Inside, you find a desk with a computer, a table, a bed, and a
            very old bookshelf that has several books.
            `,
            story2flag: false,
            story2:`
            You are now in the house area. Everything looks fine. The room is well
            lit and it has a desk with a computer, a table, a bed, and a very old
            bookshelf.
            `,
            choices: [
                {
                    choice: "starting place",
                    destination: "starting_place",
                },
                {
                    choice: "read",
                    destination: "house",
                    story: `
                    You go to the bookshelf to read something. Except a couple of fairy 
                    tales, that stir your imagination, you find most of the books plain 
                    boring, or it could be that you just don't understand them. In any 
                    case, you decide to do something else.
                    `,
                },
                {
                    choice: "play",
                    destination: "map",
                    story: `
                    You go to the desk and turn on the computer. While the computer boots 
                    up, you notice a pair of keys next to the monitor. You start playing 
                    some video games. One of them contains a colourful map that you 
                    can visualize in full-screen mode.
                    `,
                    storyConditionMet:`
                    You go to the desk and turn on the computer. While the computer boots 
                    up, you notice a pair of keys next to the monitor. You start playing 
                    some video games. One of them contains a colourful map that you 
                    can visualize in full-screen mode.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["ideas",],
                        "itemsReturned": ["keys",],
                    },
                },
                {
                    choice: "eat",
                    destination: "house",
                    story: `
                    You are not hungry at this time of the day. 
                    <em>Morning would be a good time to grab something to eat... If you have any food left...</em>
                    `,
                    storyConditionMet:`
                    You feel hungry so you grab the food you got from the sailor and
                    prepare yourself a nice meal. You take a couple of bites. It's good,
                    it's tasty, in fact, it's the best food you have had lately.
                    Good mix of various nutrients.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["food","_morning"],
                        "itemsReturned": ["_strength",],
                    },
                },
            ],
            items: [
            ],
            
        },

        map: {
            image: "map.jpg",
            story: `
            As you walk, you find yourself in front of a small house and decide to
            enter. Inside, you find a desk with a computer, a table, a bed, and a
            very old bookshelf that has several books.
            `,
            story2flag: false,
            story2:`
            You are now in the house area. Everything looks fine. The room is well
            lit and it has a desk with a computer, a table, a bed, and a very old
            bookshelf.
            `,
            choices: [
                {
                    choice: "house",
                    destination: "house",
                },
            ],
            items: [
            ],
            
        },

        bridge_end: {
            image: "bridge_end.png",
            story: `
            You climb a small hill and reach a high land platform from which you 
            can see the surroundings. There is a big bridge in front of you, and at 
            the other end, you notice an outdated car that seems to be abandoned. 
            In the far distance, you can see the white golden shores of the sea and 
            a long dam extending far into the sea. Waves of various sizes and shapes 
            create strips of white foam as they come towards the shore. You cross the 
            bridge, and find yourself at the other end. This place looks like a 
            medium sized cross-road. There is a colourful mural nearby with some 
            shapes engraved on it. To your right side, there is an abandoned old car.
            `,
            story2flag: false,
            story2:`
            You are now in the bridge end area. This place looks like a medium sized \
            cross-road. There is a colourful mural nearby with some shapes engraved \
            on it. To your right side, there is an abandoned old car.
            `,
            choices: [
                {
                    choice: "alley split",
                    destination: "alley_split",
                },
                {
                    choice: "starting place",
                    destination: "starting_place",
                },
                {
                    choice: "contemplate mural",
                    destination: "bridge_end",
                    story: `
                    You get closer to the mural. The carvings seem to depict young 
                    people playing different sports on the beach. Some of them are 
                    swimming, some others are playing various other games. There are a
                    couple of seagulls flying above in the air. Several fish schools 
                    swim in the sea, and a group of dolphins are having fun.
                    `,
                },
                {
                    choice: "drive car",
                    destination: "drive_stop",
                    story: `
                    You try the door of the car, but it's locked. \
                    You try to force it, to no avail.
                    <em>You need some keys.</em>
                    `,
                    storyConditionMet:`
                    You get closer to the car and start inspecting it. From the 
                    outside, it looks rather old and out-fashioned. You wonder if it 
                    is still working. You try the keys that you have, and much to 
                    your surprise, the door opens. Although, it's been awhile since 
                    you last time drove, you start the car and press the gas pedal. 
                    It's rolling!
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["keys",],
                        "itemsReturned": ["car",],
                    },
                },
            ],
            items: [
            ],
            
        },

        alley_split: {
            image: "alley_split.jpg",
            story: `
            You walk along a sand alley covered by the shade of the trees which 
            reside on its sides. On each side, there are buckets of dandelions and 
            other small flowers that have yellow and blue colours. The alley splits 
            into 3 directions. One seems to be heading to the dam, the other one to 
            the sunny beach, and the third one to the summer games area.
            `,
            story2flag: false,
            story2:`
            You are now in the alley split area. On the sides, there are trees,
            buckets of dandelions, and other small flowers that have yellow and 
            blue colours. The alley splits into 3 directions. One seems to be 
            heading to the dam, the other one to the sunny beach, and the third 
            one to the summer games area.
            `,
            choices: [
                {
                    choice: "bridge end",
                    destination: "bridge_end",
                },
                {
                    choice: "dam",
                    destination: "dam",
                },
                {
                    choice: "summer games",
                    destination: "summer_games",
                },
                {
                    choice: "sunny beach",
                    destination: "sunny_beach",
                },
            ],
            items: [
            ],
            
        },

        summer_games: {
            image: "summer_games.png",
            story: `
            You take the route to the right. There are several trees along the way 
            and colourful buildings sprinkled here and there. You reach what seems to 
            be an open basketball court.
            `,
            story2flag: false,
            story2:`
            You are now in the summer games area. In front of you there is an open \n\
            basketball court surrounded by trees.
            `,
            choices: [
                {
                    choice: "alley split",
                    destination: "alley_split",
                },
                {
                    choice: "play",
                    destination: "summer_games",
                    story: `
                    It's been awhile since you played a game, so 
                    you decide to take a couple of shots with a makeshift ball. It seems 
                    your accuracy is not as good as it used to be, and you miss good form. 
                    <em>Perhaps you should 
                    swim a bit before trying again and make sure you have a proper basketball...</em>
                    `,
                    storyConditionMet:`
                    You missed playing a good game, so you decide to take a couple \n\
                    of shots. Since you are in good form, you run for the final shot \n\
                    towards the basketball ring, and then jump up in the air as high \n\
                    as you can. This gives you a sense of freedom. You grab the ring \n\
                    with the left hand and with the right hand you do a perfect slam-dunk. \n\
                    You let the ring go, and land back on the ground.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["basketball","_good form"],
                        "itemsReturned": ["_understanding",],
                    },
                },
            ],
            items: [
            ],
            
        },

        sunny_beach: {
            image: "sunny_beach.jpg",
            story: `
            You go to the sunny beach. The sand is warm, so you take your shoes off
            and start walking barefoot. It feels nice. There are several people on
            the beach, and they seem to be having fun. The sea waves are coming and
            going. Where the sand gets wet, you notice an interesting seashell. It's
            one of those big ones that always stand apart.
            `,
            story2flag: false,
            story2:`
            You go to the sunny beach. The sand is warm, so you take your shoes off \n\
            and start walking barefoot. It feels nice. There are several people on \n\
            the beach, and they seem to be having fun.
            `,
            choices: [
                {
                    choice: "alley split",
                    destination: "alley_split",
                },
                {
                    choice: "swim",
                    destination: "sunny_beach",
                    story: `
                    You go to swim, but the water is still cold. Perhaps you should try 
                    again some other time. Make sure you have eaten something before diving in.
                    `,
                    storyConditionMet:`
                    You test the water with your feet. The water is good! You dive in 
                    and go full speed ahead. The sea is calm today, and you advance 
                    effortlessly. After a couple of minutes, you stop swimming to catch 
                    your breath. You turn towards the shore and notice that people are 
                    now only tiny little dots on the beach. You start floating on your 
                    back, enjoying the weightlessness sensation, the free massage of the 
                    water waves, and the caressing touch of the sun rays. You turn again
                    towards the shore and start swimming back until you can touch with 
                    your feet solid ground underneath. The whole thing has been a bit 
                    taxing on your body, but at the same time you feel a sense of relaxation.
                    You feel you are in good form now.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_strength"],
                        "itemsReturned": ["_good form",],
                    },
                },
                {
                    choice: "pick seashell",
                    destination: "sunny_beach",
                    story: `
                    You pick the seashell and put it close to your ear. You hear the 
                    sea waves of a distant beach and some nice tune in the background.
                    `,
                    storyConditionMet:`
                    You already have one.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["seashell",],
                    },
                },
            ],
            items: [
            ],
            
        },

        dam: {
            image: "dam.jpg",
            story: `
            You pass by a beautiful beach with golden sand dunes. In some places, 
            the trees create areas of shade. The sea waves come and go. When you 
            reach the dam, you notice that it advances far into the sea. You walk on 
            it until you reach the middle. Behind the rocks, you notice the fishing 
            rod of a fisherman. You go to his place. He looks calm and relaxed.
            `,
            story2flag: false,
            story2:`
            You are now in the dam area. Behind the rocks, you notice the fishing
            rod of a fisherman. You go to his place. He looks calm and relaxed.
            `,
            choices: [
                {
                    choice: "alley split",
                    destination: "alley_split",
                },
                {
                    choice: "lighthouse",
                    destination: "lighthouse",
                },
                {
                    choice: "watch seahorses",
                    destination: "dam",
                    story: `
                    You get close to the water level to observe the seahorses. They 
                    swim peacefully in the proximity of the algae and rocky formations. 
                    They move in rhythmical patterns with a lot of grace and elegance by 
                    flapping their tiny little wings, and by moving their tails up and 
                    down. They seem not to be bothered at all by the big face that is 
                    looking at them. Although they don't speak much, they make an 
                    impression on you. You take a pen and some paper and do a seahorse 
                    drawing. Looking far into the distance, you notice the end of the dam.
                    `,
                    storyConditionMet:`
                    The seahorses swim peacefully in the proximity of the algae and rocky
                    formations.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["seahorse drawing",],
                    },
                },
                {
                    choice: "talk",
                    destination: "dam",
                    story: `
                    You greet the fisherman and chat a bit about the weather and the 
                    sea. It seems that the other day, there was a thunderstorm with big 
                    lightning bolts, which stirred the sea. Now the sea is calm, but 
                    there are no fish around, only a couple of seahorses. 
                    <em>Try coming also during the morning...</em>
                    `,
                    storyConditionMet:`
                    You talk to the fisherman and he says there are plenty of fish. 
                    They attract groups of dolphins.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_morning"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        lighthouse: {
            image: "lighthouse.png",
            story: `
            You continue your walk up the dam, and farther into the sea until you
            reach a lighthouse. The lighthouse seems to be closed.
            `,
            story2flag: false,
            story2:`
            You are now in the lighthouse area. The lighthouse seems to be closed.
            It is surrounded by rocks.
            `,
            choices: [
                {
                    choice: "dam",
                    destination: "dam",
                },
                {
                    choice: "climb",
                    destination: "lighthouse",
                    story: `
                    You climb the rocks. From up here, you can see the open sea. The 
                    wind blows softly and cools you off from the heat of the sun. The 
                    sea waves hit the rocks and create big splashes. Some of the water 
                    drips reach you; they are cold. Looking far away into the distance, 
                    you notice a tiny dot floating above the horizon line. It must be a 
                    ship sailing around.
                    <br>
                    <em>Have you talked to the fisherman?</em>
                    `,
                    storyConditionMet:`
                    You get closer to the water and immerse your feet \n\
                    in it. The water is still cool after yesterday's thunderstorm, but \n\
                    the sensation is nice, because it is contrasting with the heat outside.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_fisherman talked"],
                        "itemsReturned": [],
                    },
                    returnedItems: ["_lighthouse visited"],
                },
                {
                    choice: "climb higher",
                    destination: "house",
                    story: `
                    Perhaps you should return here later to watch the sunset.
                    <br>
                    <em>Make sure you know the tune of the song and that you have talked to an exotic girl.</em>
                    `,
                    storyConditionMet:`
                    You climb the rocks. From up here, you can see the open sea. The wind is 
                    almost totally absent. You look far into the distance. At the horizon line, 
                    you notice many ships that are sailing towards the sunset. They have goldish/reddish 
                    colours and they come in various shapes and sizes. The sunset rays create a warm 
                    wonderful atmosphere. The strong heat of the day has resided and now it feels just 
                    perfect. There are a few clouds close to the horizon. They are back-lit by the big 
                    red ball of the sun, which is dissolving slowly into the sea. You realize it's evening 
                    now and it's been a very long day. As you feel a bit tired, you decide to head home to 
                    get some rest. You go inside the house and fall asleep in an instant. When you wake up 
                    in the morning, you realize the mermaids song language is a known one. It's French! 
                    Perhaps you should study it a little bit.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["song", "_talked to exotic girl"],
                        "itemsReturned": ["_morning"],
                    },
                },
                {
                    choice: "climb highest",
                    destination: "lighthouse",
                    story: `
                    Perhaps you should return here some other time. 
                    <em>Morning would be a good time for it, while you have additional strength...</em>
                    `,
                    storyConditionMet:`
                    You climb the rocks and... something amazing is undergoing in \n\
                    front of your eyes. A large group of dolphins are swimming together \n\
                    making noises, jumping up in the air, and making big splashes when \n\
                    diving back into the water. They seem happy and friendly, and make \n\
                    a big impression on you. You create a drawing.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_morning", "_strength"],
                        "itemsReturned": ["dolphin drawing"],
                    },
                },
            ],
            items: [
            ],
            
        },

        drive_stop: {
            image: "drive_stop.jpg",
            story: `
            You drive to the right. After a ten minutes' ride, you notice on the 
            left side of the road some trees and some dense vegetation. You can stop 
            near the trees, continue driving to the right side, or return to the left 
            side.
            `,
            story2flag: false,
            story2:`
            You are now in the drive stop area. You can stop near the trees, or 
            continue driving in the desired direction.
            `,
            choices: [
                {
                    choice: "bridge end",
                    destination: "bridge_end",
                },
                {
                    choice: "trees",
                    destination: "trees",
                },
                {
                    choice: "city intersection",
                    destination: "city_intersection",
                },
            ],
            items: [
            ],
            
        },

        trees: {
            image: "trees.png",
            story: `
            You choose to go near the trees. The branches of the trees are adorned
            with small yellow flowers that smell nice.
            `,
            story2flag: false,
            story2:`
            The branches of the trees are adorned with small yellow flowers that \n\
            smell nice.
            `,
            choices: [
                {
                    choice: "drive stop",
                    destination: "drive_stop",
                },
                {
                    choice: "listen",
                    destination: "palm_beach",
                    story: `
                    Something's missing... 
                    <em>Hmmmm, have you found any seashells lately?</em>
                    `,
                    storyConditionMet:`
                    As you listen, you hear a low sound that seems to repeat itself. The sound 
                    seems to originate from the area behind the trees. You realize it is the same 
                    sound as the one you have heard in the seashell - the sea waves and sea wind 
                    concerting together. For sure there must be a hidden beach behind this dense 
                    vegetation. You start moving branches and make your way through until you reach 
                    a marvellous beach. You catch your breath under the shade of a palm tree and start 
                    noticing the surroundings. Seagulls are flying above the sea, making calls from 
                    time to time. On the beach, there is a group of mermaids giggling. 
                    Close to the water, you notice several sand castles. Altough fragile, 
                    they seem to resist the sea waves that are hitting them incessantly.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["seashell",],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        palm_beach: {
            image: "palm_beach.png",
            story: `
            You are now in the palm beach area. Seagulls are flying above the sea, 
            making calls from time to time. On the beach, there is a group of mermaids 
            giggling. Close to the water, you notice several sand castles that seem 
            to resist all the coming waves.
            `,
            story2flag: false,
            story2:`
            You are now in the palm beach area. Seagulls are flying above the sea, 
            making calls from time to time. On the beach, there is a group of 
            mermaids giggling. Close to the water, you notice several sand castles 
            that seem to resist all the coming waves.
            `,
            choices: [
                {
                    choice: "trees",
                    destination: "trees",
                },
                {
                    choice: "watch seagulls",
                    destination: "palm_beach",
                    story: `
                    The seagulls seem to enjoy themselves. They make big circles in the 
                    air followed by sharp drops into the sea to catch small fish. They go 
                    with the flow and navigate the sea winds effortlessly. The small ones 
                    have white feathers and grey beaks; they tend to be very fast in their 
                    aerial manoeuvres. The big ones have large wings and orange beaks; 
                    they glide high up in the air supervising the entire shore. The 
                    seagulls' activity makes an impression on you and you create a drawing.
                    `,
                    storyConditionMet:`
                    The seagulls seem to enjoy themselves. They make big circles in the 
                    air followed by sharp drops into the sea to catch small fish. They go 
                    with the flow and navigate the sea winds effortlessly. The small ones 
                    have white feathers and grey beaks; they tend to be very fast in their 
                    aerial manoeuvres. The big ones have large wings and orange beaks; 
                    they glide high up in the air supervising the entire shore. The 
                    seagulls' activity makes an impression on you.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["seagull drawing"],
                    },
                },
                {
                    choice: "give ideas",
                    destination: "palm_beach",
                    story: `
                    The mermaids look confused and start laughing.
                    `,
                    storyConditionMet:`
                    The mermaids continue to look confused and start laughing.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "give seashell",
                    destination: "palm_beach",
                    story: `
                    You need to get a seashell first and need to speak to more people. <br></br>
                    <em>Did you visit the lighthouse lately? Have you talked to the exotic girl?</em>
                    `,
                    storyConditionMet:`
                    The mermaids take the seashell and start singing a beautiful song 
                    in a language you don't understand. You are a bit disappointed that 
                    you cannot grasp any of the words. You may need to explore and meet 
                    more people.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["seashell", "_talked to exotic girl", "_lighthouse visited"],
                        "itemsReturned": ["song"],
                    },
                },
            ],
            items: [
            ],
            
        },

        city_intersection: {
            image: "city_intersection.jpg",
            story: `
            You drive to the right until you reach the outskirts of another city. 
            The city seems to expand on a large area of land, and you wonder what you 
            will find here. You enter a road intersection, which has a big artisanal 
            fountain in the middle. From here, you can go into several directions.
            `,
            story2flag: false,
            story2:`
            You are now in the city intersection area. There is a big artisanal
            fountain in the middle. From here, you can go into several directions.
            `,
            choices: [
                {
                    choice: "drive stop",
                    destination: "drive_stop",
                },
                {
                    choice: "east city",
                    destination: "east_city",
                },
                {
                    choice: "port",
                    destination: "port",
                },
            ],
            items: [
            ],
            
        },

        east_city: {
            image: "east_city.jpg",
            story: `
            You drive to the right until you reach the east side of the city. You 
            stop the car and go for a stroll on the side walk. You encounter a girl 
            that is dressed in a white dress, and who is looking at you.
            `,
            story2flag: false,
            story2:`
            You are now in the east city area. A girl dressed in a white dress is 
            standing in front of you.
            `,
            choices: [
                {
                    choice: "city intersection",
                    destination: "city_intersection",
                },
                {
                    choice: "talk",
                    destination: "city_intersection",
                    story: `
                    The girl has an exotic look and she is staring at you with her 
                    beautiful light-blue eyes. She tries to tell you something in a 
                    language that you don't understand. You are confused. <br><br>
                    
                    <em>Perhaps now it would be a good time to return to the lighthouse.
                    Make sure you know how to speak the girl's language and you have the tune of the song.</em>
                    `,
                    storyConditionMet:`
                    You talk to her, and find out that her name is Alice. She's looking 
                    for her pet. You cannot do much in that respect. After her departure, 
                    just a few meters down the sidewalk, you find a basketball and you take 
                    it with you.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_Francais", "_lighthouse visited", "song"],
                        "itemsReturned": ["basketball"],
                    },
                    returnedItems: ["_talked to exotic girl"],
                },
            ],
            items: [
            ],
            
        },

        port: {
            image: "port.png",
            story: `
            You take the up route and drive along the coastline until you \n\
            reach the port. To the east, you see lines of ships and big naval cranes \n\
            moving cargo around. In your area, there are mainly light vessels used by \n\
            tourists and sailing enthusiasts. You get closer to one of the ships. This \n\
            one has a tall mast and long white sails. On one of its sides there is a \n\
            shiny inscription. It says 'Princess'. You go aboard and you encounter a \n\
            sailor, who is looking far into the sea. He has a couple of drawings on his \n\
            table.
            `,
            story2flag: false,
            story2:`
            You are now in the port area. To the east, you see lines of ships and \n\
            big naval cranes moving cargo around. In your area, there are mainly \n\
            light vessels used by tourists and sailing enthusiasts. You get aboard \n\
            one of the ships and notice that the sailor is looking far into the sea. \n\
            He has a couple of drawings on his table.
            `,
            choices: [
                {
                    choice: "city intersection",
                    destination: "city_intersection",
                },
                {
                    choice: "talk",
                    destination: "theend",
                    story: `
                    You talk to the sailor. He has interesting stories to tell. You ask 
                    him whether he has any food aboard and he kindly offers you some. He 
                    has a riddle for you. He asks you 'What is freedom?' You are a bit 
                    surprised, and don't know how to answer that. What does he mean?

                    <em>A solid understanding of what freedom is and a couple of drawings offered 
                    may help here...</em>
                    `,
                    storyConditionMet:`
                    You talk to the sailor. The sailor looks at the 3 drawings he got 
                    from you: the one with the seagull, the one with the seahorse, and 
                    the one with the dolphin. He smiles knowingly at you, and you smile, 
                    because now... you know what freedom is...
                    You are now at the end of the chapter. Suddenly another thought 
                    crosses your mind: 'Ou est la princesse?' You must find her! Another 
                    journey is about to start! 
                    To be continued...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_understanding", "_smile1", "_smile2", "_smile3"],
                        "itemsReturned": [],
                    },
                    returnedItems: ["food", "_fisherman talked"],
                },
                {
                    choice: "give seahorse drawing",
                    destination: "port",
                    story: `
                    You don't have any seahorse drawings...
                    `,
                    storyConditionMet:`
                    The sailor takes the drawing and smiles at you. He puts it down, on 
                    the table next to him.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["seahorse drawing"],
                        "itemsReturned": ["_smile1"],
                    },
                },
                {
                    choice: "give seagull drawing",
                    destination: "port",
                    story: `
                    You don't have any seagull drawings...
                    `,
                    storyConditionMet:`
                    The sailor takes the drawing and smiles at you. He puts it down, on 
                    the table next to him.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["seagull drawing"],
                        "itemsReturned": ["_smile2"],
                    },
                },
                {
                    choice: "give dolphin drawing",
                    destination: "port",
                    story: `
                    You don't have any dolphin drawings...
                    `,
                    storyConditionMet:`
                    The sailor takes the drawing and smiles at you. He puts it down, on 
                    the table next to him.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["dolphin drawing"],
                        "itemsReturned": ["_smile3"],
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
            ],
            items: [
            ],
            buttonText: "Select the 3rd chapter from the top"
            
        },

    }
}