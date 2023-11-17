function getStoryChapter4(name) {

    return {
        currentScene: "watch_train",
        currentChapter: "4",
        player: {
            inventory: [
            ]
        },
        lastActionStory: ``,
        conditionsAchieved: [
        ],
        watch_train: {
            image: "watch train.jpg",
            story: `
            Continuing from last time...<br>
            Apparently she had all the 
            mathematics sorted out already... There must be more then 
            what meets the eye!
            `,
            story2flag: false,
            story2:`
            Test.
            `,
            choices: [
                {
                    choice: "onboard",
                    destination: "train_car",
                    story: `
                    You onboard the train and sit down. The seats are nice and comfortable. The windows are large and clear, giving you a good view of the surroundings. At the window's sides, you notice a pair of curtains made from high-quality fabrics. Whoever designed the interior of the cabin must have very good taste. It makes you feel at ease and relaxed. Then, the train starts moving... It is a smooth ride! If it weren't for the windows and for the objects outside, you would not be able to tell if you are moving or holding position.
                    `,
                },
            ],
            items: [
            ],
            
        },

        train_car: {
            image: "train car.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "wake up",
                    destination: "central_train_station",
                    story: `
                    No need to do that. The princess is awake.
                    `,
                    storyConditionMet:`
                    Few hours pass until you get close to the outskirts of a very large city. The train is moving more slowly now and continues to advance until it reaches the central train station. It makes a quiet sound and comes to a full stop by the platform. You gently touch the princess, and she wakes up while stretching her body. You get off the train and step onto the platform.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_princess asleep"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "watch window",
                    destination: "watch_window",
                    story: `
                    You look outside the window. The train passes along hills, trees, villages and towns, rivers and bridges, meadows, and lots of other beautiful scenery. Sometimes you see people that smile and wave at you. The landscape you encounter along the way is varied. This makes the trip even more interesting...
                    `,
                },
                {
                    choice: "watch princess",
                    destination: "train_car",
                    story: `
                    The princess rests her head on your shoulder and starts dreaming. She looks serene and happy.
                    `,
                    storyConditionMet:`
                    The princess rests her head on your shoulder and starts dreaming. She looks serene and happy.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_princess asleep"],
                    },
                },
                
                
            ],
            items: [
            ],
            
        },

        watch_window: {
            image: "watch window.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "watch interior",
                    destination: "train_car",
                    story: `
                    You are inside the train car.
                    `,
                },
            ],
            items: [
            ],
            
        },

        central_train_station: {
            image: "central train station.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            The train has not changed position.
            `,
            choices: [
                {
                    choice: "small park",
                    destination: "small_park",
                },
                {
                    choice: "watch train",
                    destination: "central_train_station",
                    story: `
                    You inspect the train once more. Seems to be deactivated now.
                    The more you watch it from the outside, the more curios
                    you become... You continue to
                    remain impressed with the technology that makes it work.
                    What powers the train?
                    `,
                    storyConditionMet:`
                    The train is activated. You continue to remain
                    impressed with technology behind it.  It is a marvel of
                    modern engineering...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_train activated"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "start train",
                    destination: "central_train_station",
                    story: `
                    You still need to find a way to activate the train.
                    `,
                    storyConditionMet:`
                    Good, so the train is now working. You are set to go.
                    You can operate it yourself
                    and choose to go to a couple of locations.
                    After all, you still have to find what you have been
                    looking for...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_train activated"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use blueprint",
                    destination: "central_train_station",
                    story: `
                    You need to find the blueprint first.
                    `,
                    storyConditionMet:`
                    You take a closer look at the train and at the
                    blueprint.
                    You now understand how it works... It is a marvel of modern
                    engineering.
                    You leverage the schematics and you activate the train.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["blueprint"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        small_park: {
            image: "small park.jpg",
            story: `
            You exit the central train station and go up.
            You watch the surroundings to get a feeling of how the city might
            be. The streets are very clean and tidy and
            there are only a few cars
            parked around. The sidewalks have trees
            spaced evenly throughout, and the buildings are somewhat distinctive.
            You walk up ahead and pass by a small park. Close to some
            benches, you notice a couple of pigeons that are dressing up
            and arranging their feathers. It is very
            quiet and there are no people around. It is still early morning...
            Why is it early morning?
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "walk",
                    destination: "small_park_side",
                    story: `
                    You continue to walk, and as you pass the park, you start feeling a\
                    strong sensation inside your chest. Something is missing...\
                    when you needed her most...
                    `,
                },
            ],
            items: [
            ],
            
        },

        small_park_side: {
            image: "small park side.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "keep walking",
                    destination: "part_1",
                },
            ],
            items: [
            ],
            
        },

        part_1: {
            image: "part 1.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            Part One.
            `,
            choices: [
                {
                    choice: "continue",
                    destination: "city_streets",
                    story: `
                    You continue walking and pass a couple more intersections. The architecture of the city is really impressing. The buildings are larger and higher than what you have seen until now. More and more people start to appear on the streets and the traffic builds up. You feel a bit lost.
                    `,
                },
            ],
            items: [
            ],
            
        },

        city_streets: {
            image: "city streets.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "ask for directions",
                    destination: "bridge",
                    story: `
                    You ask a person on the street for some directions, and decide to take a tram to shorten your trip. You arrive at the destination and start looking around. You are close to a river that flows throughout the city. On each side of the river there are sidewalks with trees and streetlights. Looks like a good promenade area. There are several bridges allowing people to pass from one side to the other. You are right at one of them. On the left side of the bridge, you notice a row of apartment buildings and a number of trees that define the skyline. On the right side, there are many tall trees and decorative vegetation that make up a large green area. You see a long alley passing through.
                    `,
                },
            ],
            items: [
            ],
            
        },

        bridge: {
            image: "bridge.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            You are now in the bridge area. On the left side there is a row of apartment buildings, while on the right side there is a long alley passing through some large green area.
            `,
            choices: [
                {
                    choice: "room",
                    destination: "room",
                },
                {
                    choice: "long alley",
                    destination: "long_alley",
                },
                {
                    choice: "central train station",
                    destination: "central_train_station_2",
                },
                {
                    choice: "downtown",
                    destination: "downtown_square",
                    story: `
                    Seems to go downtown. No time for that now. Maybe later...
                    `,
                    storyConditionMet:`
                    You go downtown. You have never been to this area before.
                    You are in a big city square. Not far away from the artisanal
                    fountain, there is a block of buildings. One of them has a large
                    door facing the street.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_dance classes unlocked"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "watch river",
                    destination: "watch_river",
                    story: `
                    You go to the top of the bridge and watch the water flow. You have swum in much less pleasant waters... This one looks clear and deep enough. It is like having your own swimming lane in front of the house... You entertain the idea of going for a swim, and then you realize... just because you can do something, doesn't necessarily mean that you should do it, or that you are entitled to do it. It all depends on the ecology of the situation.
                    `,
                    storyConditionMet:`
                    The water is clear and flows smoothly. There are some ducks and seagulls swiming in it. What do the seagulls do here? 
                    In the evening, this place looks rather nice with all the
                    street lights highlighting the trees on each side of the
                    river.
                    Could be an interesting photo. If only you had a camera...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_student met"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use seeds",
                    destination: "bridge",
                    story: `
                    You don't have any...
                    `,
                    storyConditionMet:`
                    Maybe not. It needs to stay dry.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["seeds"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        room: {
            image: "room.jpg",
            story: `
            You go to one of the apartment buildings on the left side of the bridge. There, you find a nice room where you can leave your belongings and have a rest. The room is not very large, but it is quiet. You like that, it helps you focus. The room has a large window through which you can see the tall trees outside. In the middle, there is a desk and close to it some book shelves. You can put some of your things there. There are a couple of posters on the walls and furniture. The room looks especially nice in the morning, during the sunrise, as the rays of light pass through the trees outside and hit the interior of the room creating a very nice ambient with beautiful morning colors.
            `,
            story2flag: false,
            story2:`
            You are now in the room area. The room is not that big, but it is quiet. You like that, it helps you focus. In the middle, there is a desk and right close to it some book shelves. There are a couple of posters on the walls and furniture.
            `,
            choices: [
                {
                    choice: "bridge",
                    destination: "bridge",
                },
                {
                    choice: "watch posters",
                    destination: "room",
                    story: `
                    You take a look at the posters. The one in the middle has a blue sky background and an air baloon rising into the air. The one on the left showcases a young female with black hair and beautiful elfine-like features. She is wearing some sort of combat outfit, similar to what an amazon, or an earth-like being would wear. Despite looking a bit dangerous, she is quite attractive. Must be a game character from a computer magazine, or something like that. The poster on the right showcases a child looking through the lens of a photo camera. The camera looks bigger than her, must be a DSLR type. She is somewhere in the nature. It is a nice calendar photo.
                    `,
                },
                {
                    choice: "watch desk",
                    destination: "watch_desk_2",
                    story: `
                    It looks empty... <em>You have no ideas yet...</em>
                    `,
                    storyConditionMet:`
                    You watch your desk. There are several items on it, including a list of ideas.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_ideas written"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use ideas",
                    destination: "room",
                    story: `
                    You don't have any good ideas yet... <em>Attending some lectures may help.</em>
                    `,
                    storyConditionMet:`
                    You write down a list of ideas.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_lectures attended"],
                        "itemsReturned": ["_ideas written"],
                    },
                },
                {
                    choice: "use notes",
                    destination: "room",
                    story: `
                    You don't have any notes yet...
                    `,
                    storyConditionMet:`
                    You review your class notes.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["notes"],
                        "itemsReturned": ["_notes written"],
                    },
                },
                {
                    choice: "do homework",
                    destination: "room",
                    story: `
                    You don't have any notes yet...
                    `,
                    storyConditionMet:`
                    You review your homework project. In order to complete\
                    it, you would need some extra input from your colleagues,\
                    unless you have done that already.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["notes"],
                        "itemsReturned": ["homework"],
                    },
                },
            ],
            items: [
            ],
            
        },

        long_alley: {
            image: "long alley.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            At the right side of the bridge there is a zebra crossing. You cross the street and enter the long alley. There are trees on each side. At the end of it, you see a large open space.
            `,
            choices: [
                {
                    choice: "bridge",
                    destination: "bridge",
                },
                {
                    choice: "open space",
                    destination: "open_space",
                },
            ],
            items: [
                {
                    name: "seeds",
                    story: `
                    You picked up some seeds.
                    `,
                },
            ],
            
        },

        open_space: {
            image: "open space.jpg",
            story: `
            You walk up ahead and reach an open space area.
            The area is surrounded by tall streetlights and several large buildings.
            In the middle, there is an ornamental column.
            You pay special attention to the building on the right side.
            Looks exactly as you have imagined it, down to the
            individual bricks. Must be the campus of some big university.
            `,
            story2flag: false,
            story2:`
            There is an ornamental column in the middle of this area. It is 
            surrounded by tall streetlights and several large buildings.
            `,
            choices: [
                {
                    choice: "long alley",
                    destination: "long_alley",
                },
                {
                    choice: "signpost",
                    destination: "signpost",
                },
                {
                    choice: "large building",
                    destination: "large_building",
                },
                {
                    choice: "pub",
                    destination: "pub",
                },
                {
                    choice: "library",
                    destination: "library",
                    story: `
                    As you get closer to the building on the right side,
                    you realize it is a library that is
                    still under construction. Should be finished soon...
                    `,
                    storyConditionMet:`
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_library open"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        library: {
            image: "library.jpg",
            story: `
            Seems to be open now. Plenty of interesting books around. At one of the tables, you
            notice the lady student you have met before.
            `,
            story2flag: false,
            story2:`
            Seems to be open now. Plenty of interesting books around. At one of the tables, you
            notice the lady student you have met before.
            `,
            choices: [
                {
                    choice: "open space",
                    destination: "open_space",
                },
                {
                    choice: "study",
                    destination: "library_interior",
                    story: `
                    You start reading every single
                    book you can find on train design.
                    You do some in-depth research and complete a couple of
                    projects. Piles of books stack up in your room.
                    One day, as it happens to be a vacation period, and you have
                    more free time, you decide to start designing the train.
                    You use everything that you have collected so far: ideas,
                    class notes, previous projects, and all the advanced concepts
                    you have encountered in the various books you have read on
                    the subject.
                    You work on it for the entire weekend with little sleep at
                    night, taking notes after notes, and sketching dozens of images.
                    The result is quite impressive. You now fully understand
                    how that train works!
                    `,
                    storyConditionMet:`
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["train design"],
                    },
                },
                {
                    choice: "talk",
                    destination: "library_interior",
                    story: `
                    Perhaps later... <em>after you get your results</em>
                    `,
                    storyConditionMet:`
                    As you still need to pass some final exams and finish a
                    couple of projects, you ask the student if she can help
                    you with one of them. She's quite good at solving problems.
                    As you
                    talk to her about various topics, you notice her gestures and
                    the way she's moving her body in a most natural way.
                    You have had this idea of learning
                    how to dance using a dance embrace for some time now...
                    Perhaps it would be interesting to go dancing together.
                    Perhaps... She seems quite excited about it, but
                    there is one little detail you might have have overlooked.
                    You might know how the train works, but you have absolutely
                    no clue how to dance in a structured manner...
                    Nevertheless, her initial reaction gives you enough motivation
                    to pursue this idea
                    further and you start looking for some dance classes.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_results read"],
                        "itemsReturned": ["_activator poster"],
                    },
                },
            ],
            items: [
            ],
            
        },

        pub: {
            image: "pub.jpg",
            story: `
            You go right, you pass under a green bolt and you reach a very
            nice place. Must be a pub, or a coffee place.
            There are several tables outside, and some inside.
            Students tend to gather here.
            Looks like a little corner of nature, with all the
            trees, small ponds, and vegetation. It provides shelter for
            some exotic birds and fish. This could be interesting.
            `,
            story2flag: false,
            story2:`
            Looks like a little corner of nature.
            It provides shelter for some exotic birds and fish. Students tend to gather here.
            `,
            choices: [
                {
                    choice: "open space",
                    destination: "open_space",
                },
                {
                    choice: "have a drink",
                    destination: "pub",
                    story: `
                    No time for that now. Perhaps later... <em>after you get your train idea</em>
                    `,
                    storyConditionMet:`
                    You talk to your colleagues about the train idea.
                    Why not design your own train? You get additional
                    insights on how to put the pieces of the puzzle
                    together. You would need to go deeper into your studies.
                    Attending the lectures may not be enough.  Your homework
                    is ready. You should be heading for your class.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_train idea"],
                        "itemsReturned": ["_homework ready", "drink"],
                    },
                },
                {
                    choice: "talk to bird",
                    destination: "pub",
                    story: `
                    Are you sure you want to do that? It would look a little bit silly,
                    wouldn't it?
                    `,
                    storyConditionMet:`
                    The bird tells you that it has to do with how you respond
                    to unplanned opportunities. Something to keep in mind.
                    Sometimes what stands between people and their happiness is
                    their ego. Another thing to keep in mind.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_happy bird"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "speak to bird",
                    destination: "pub",
                    story: `
                    Are you sure you want to do that? It would look a little bit silly,
                    wouldn't it?
                    `,
                    storyConditionMet:`
                    No, having a drink does not give you the
                    superpower of talking to birds. Nice try though! :)
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["drink"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "give seeds",
                    destination: "pub",
                    story: `
                    You have no seeds. The bird jumps on your head and starts messing with your hair...
                    `,
                    storyConditionMet:`
                    The bird makes a jump and starts eating from your hand. She then starts singing a happy trill.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["seeds"],
                        "itemsReturned": ["_happy bird"],
                    },
                },
                {
                    choice: "give ideas",
                    destination: "pub",
                    story: `
                    Are you sure you want to do that?
                    `,
                    storyConditionMet:`
                    The bird frowns. You should probably not do that again...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["ideas"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        large_building: {
            image: "large building.jpg",
            story: `
            You are in front of a very large building...
            Could be described as a combination of vertical lines ending
            in a round structure. Looks impressive!
            `,
            story2flag: false,
            story2:`
            You are in front of a very large building...
            Could be described as a combination of vertical lines ending
            in a round structure. Looks impressive!
            `,
            choices: [
                {
                    choice: "open space",
                    destination: "open_space",
                },
                {
                    choice: "basketball court",
                    destination: "basketball_court",
                },
                {
                    choice: "enter",
                    destination: "spiral_stairs",
                    story: `
                    You cannot enter. Seems to be closed now... <em>You may try again after attending some lectures</em>
                    `,
                    storyConditionMet:`
                    You enter the large building. The first thing you notice is that there
                    is a lot of open space, and a lot of light passing
                    through the windows, making the entire place very bright.
                    The building has several floors and many rooms arranged around this
                    open space area. The ceiling is very high.
                    To the right, you see some spiral stairs going up to the 1st floor.
                    To the left, there is a large dashboard fixed on the wall.
                    In front of you, where the open space ends, there is a door.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_lectures attended"],
                        "itemsReturned": [],
                    },
                },

            ],
            items: [
            ],
            
        },

        basketball_court: {
            image: "basketball court.jpg",
            story: `
            You walk left until you reach a basketball court. It looks very
            nice and modern. In the proximity there is an indoor court as well.
            Seems to be closed now...
            `,
            story2flag: false,
            story2:`
            You reach a basketball court that has an indoor and an outdoor area.
            Seems to be open. The outdoor
            court looks very nice and modern. Must be used used during the summer
            competitions.
            `,
            choices: [
                {
                    choice: "large building",
                    destination: "large_building",
                },
                {
                    choice: "play",
                    destination: "basketball_court",
                    story: `
                    As much as you would like to do it, you have to postpone. There
                    is no time for that now. You have other pending priorities.
                    The court looks amazing though... 
                    <em>you may need to have some written notes first</em>
                    `,
                    storyConditionMet:`
                    You find some spare time and go play a game. Your vertical
                    jump is not as high as it used to be.
                    The lack of practice shows up. Also, there are some fun
                    colleagues who jump all over you... :)  With colleagues like
                    that, no chance of playing a decent basketball game, or
                    getting better at it anytime soon... You put it on hold
                    for the time being...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_notes written"],
                        "itemsReturned": ["_game played"],
                    },
                },

            ],
            items: [
            ],
            
        },

        signpost: {
            image: "signpost 2.jpg",
            story: `
            You walk up on a small alley until you encounter a signpost.
            `,
            story2flag: false,
            story2:`
            You walk up on a small alley until you encounter a signpost.
            `,
            choices: [
                {
                    choice: "open space",
                    destination: "open_space",
                },
                {
                    choice: "university",
                    destination: "university",
                },
                {
                    choice: "look around",
                    destination: "signpost",
                    story: `
                    The signpost shows various directions where you can go.
                    One of them points towards the stairs going up the hill.
                    At the top of the hill, you can see the university building.
                    Looks slightly different than all the others you have
                    encountered so far. 
                    <em>Have you activated the train yet?</em>
                    `,
                    storyConditionMet:`
                    Time flies...
                    One day, as you make your way towards the university building
                    on the hill,
                    you notice a lady in front of you going into the same direction.
                    She stops by the signpost to smell a flower. She has long
                    beautiful hair. You
                    talk to her. She's a student attending some classes. She seems
                    nice and interesting. Her voice is quite familiar. Have you met
                    each other before?
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_train activated"],
                        "itemsReturned": ["_student met"],
                    },
                },
                {
                    choice: "watch signpost",
                    destination: "map",
                    story: `
                    There's a small map next to it.
                    `,
                },

            ],
            items: [
            ],
            
        },

        spiral_stairs: {
            image: "spiral stairs.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "large building",
                    destination: "large_building",
                },
                {
                    choice: "watch dashboard",
                    destination: "spiral_stairs",
                    story: `
                    You go near the dashboard and scan through the contents.
                    A couple of announcements, some time tables, nothing
                    particularly interesting.  
                    <em>You may want to keep an eye on this though...</em>
                    `,
                    storyConditionMet:`
                    There is a new poster on it. You take a closer look at it.
                    It talks about some dancing classes for begginers, taking
                    place somewhere
                    downtown. This might actually work...
                    You take note of the place and time.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_activator poster"],
                        "itemsReturned": ["_dance classes unlocked"],
                    },
                },
                {
                    choice: "enter door",
                    destination: "spiral_stairs",
                    story: `
                    You try the door. It seems to be locked. 
                    <em>No announcements on the dashboard though...</em>
                    `,
                    storyConditionMet:`
                    You open the door and enter a very large and bright room.
                    Apparently there is some big event organized by some
                    important students organization. You attend a couple of
                    interesting trainings and listen to some speakers from
                    the non-academical environment. They are amazing!
                    You like what they do and how they speak...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_activator poster"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "climb stairs",
                    destination: "spiral_stairs",
                    story: `
                    It's always fun to climb and descend on these spiral stairs...
                    `,
                },

            ],
            items: [
            ],
            
        },

        university: {
            image: "university.jpg",
            story: `
            You go up towards the hill and climb some steps.
            On your way up, you encounter a couple of
            people and ask them if you are heading correctly. They say yes.
            You reach the distinctive building at the top. There are many young people
            around. Must be university students attending classes and lectures.
            `,
            story2flag: false,
            story2:`
            There are many young people
            around. Must be university students attending classes and lectures.
            `,
            choices: [
                {
                    choice: "signpost",
                    destination: "signpost",
                },
                {
                    choice: "attend",
                    destination: "attend",
                    story: `
                    Since you are here, why not start studying a little bit?
                    The classes look more than interesting, and the students
                    are friendly and resourceful. You get a couple of ideas
                    on what you could do.
                    Interesting lectures... As you attend more and more classes
                    and learn about the different subjects, you realize that
                    figuring out how the train works is just a matter of time.
                    You have everything you need. You take the class notes with you.
                    During the breaks, you start explaining your colleagues
                    how the different subjects could be combined.
                    During the classes, you start debating with your proffessors
                    difficult topics. At times, you challenge
                    the status-quo and some over-sized egos get a bit shaken.
                    But let's not digress... You get some extra
                    homework...
                    `,
                    storyConditionMet:`
                    Since you are here, why not start studying a little bit?
                    The classes look more than interesting, and the students
                    are friendly and resourceful. You get a couple of ideas
                    on what you could do.
                    Interesting lectures... As you attend more and more classes
                    and learn about the different subjects, you realize that
                    figuring out how the train works is just a matter of time.
                    You have everything you need. You take the class notes with you.
                    During the breaks, you start explaining your colleagues
                    how the different subjects could be combined.
                    During the classes, you start debating with your proffessors
                    difficult topics. At times, you challenge
                    the status-quo and some over-sized egos get a bit shaken.
                    But let's not digress... You get some extra
                    homework...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_lectures attended", "notes"],
                    },
                },
                {
                    choice: "attend classes",
                    destination: "attend",
                    story: `
                    There are other things to do first... <em>like for example doing your homework and relaxing a bit at a basketball game...</em>
                    `,
                    storyConditionMet:`
                    Class is starting in about 2 hours. Your homework 
                    is not ready yet. You have one extra hour, and decide to invite your 
                    colleagues for a drink. You could finish some homework there. Unless,
                    you did that already...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["homework", "_game played"],
                        "itemsReturned": ["_train idea"],
                    },
                },
                {
                    choice: "attend advanced classes",
                    destination: "attend",
                    story: `
                    There are other things to do first... 
                    <em>like for example having a drink with your colleagues...</em>
                    `,
                    storyConditionMet:`
                    You arrive just in time for your class. It happens 
                    to be an advanced calculus class. You present your homework, and start 
                    filling up the blackboard. After that drink, the task at hand suddenly 
                    becomes much more difficult than it should be. It's not your best 
                    performance, but you make it through and your proffessor gives you a 
                    good rating. 
                    <em>You may also want to do some research at the library...</em>
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["drink"],
                        "itemsReturned": ["_library open"],
                    },
                },
                {
                    choice: "read results",
                    destination: "read_results",
                    story: `
                    No results being shown yet...  
                    <em>Have you met the misterious student yet?</em>
                    `,
                    storyConditionMet:`
                    The results look promising so far. Among the top 10%...
                    Close to yours, you notice some other interesting names...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_student met"],
                        "itemsReturned": ["_results read"],
                    },
                },

            ],
            items: [
            ],
            
        },

        read_results: {
            image: "read results.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "back",
                    destination: "university",
                },

            ],
            items: [
            ],
            
        },

        attend: {
            image: "attend.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "university",
                    destination: "university",
                },

            ],
            items: [
            ],
            
        },

        watch_desk_2: {
            image: "watch desk 2.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "room",
                    destination: "room",
                },
                {
                    choice: "watch desk",
                    destination: "part_2",
                    story: `
                    There are some lecture notes on it... <em>Do you have the train design with you?</em>
                    `,
                    storyConditionMet:`
                    You watch the desk and then start working on the train.
                    You now have a
                    complete blueprint of the
                    train. All subsystems are described in detail and fully explained how
                    they interact with each other.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["train design"],
                        "itemsReturned": ["train blueprint"],
                    },
                },

            ],
            items: [
            ],
            
        },

        central_train_station_2: {
            image: "central train station.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            The train has not changed position.
            `,
            choices: [
                {
                    choice: "bridge",
                    destination: "bridge",
                },
                {
                    choice: "watch train",
                    destination: "central_train_station_2",
                    story: `
                    You inspect the train once more. Seems to be deactivated now.
                    The more you watch it from the outside, the more curios
                    you become... You continue to
                    remain impressed with the technology that makes it work.
                    What powers the train?
                    `,
                    storyConditionMet:`
                    The train is activated. You continue to remain
                    impressed with technology behind it.  It is a marvel of
                    modern engineering...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_train activated"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "start train",
                    destination: "central_train_station_2",
                    story: `
                    You still need to find a way to activate the train.
                    `,
                    storyConditionMet:`
                    The train is activated, but there is one more place you need
                    to visit
                    and one more thing you need to do there before leaving.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_train activated"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "board train",
                    destination: "theend",
                    story: `
                    Not until you activate the train, <em>plant the seeds, and take some photos of the park and of the river</em>...
                    `,
                    storyConditionMet:`
                    Good, so the train is now working. You are set to go.
                    You can operate it yourself
                    and choose to go to a couple of locations.
                    After all, you still have to find what you have been
                    looking for... <br><br>
                    This is the end of Chapter 4 ${name}. <br>
                    Hope you've enjoyed it! :)
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_seeds planted", "park photos", "river photos"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "use blueprint",
                    destination: "central_train_station_2",
                    story: `
                    You need to find the blueprint first...
                    `,
                    storyConditionMet:`
                    You take a closer look at the train and at the
                    blueprint.
                    You now understand how it works... It is a marvel of modern
                    engineering.
                    You leverage the schematics and you activate the train.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["train blueprint"],
                        "itemsReturned": ["_train activated"],
                    },
                },
                {
                    choice: "use seeds",
                    destination: "central_train_station_2",
                    story: `
                    You don't have any...
                    `,
                    storyConditionMet:`
                    Nope... You need to come up with a better idea.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["seeds"],
                        "itemsReturned": [],
                    },
                },

            ],
            items: [
            ],
        },

        part_2: {
            image: "part 2.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            Part Two.
            `,
            choices: [
                {
                    choice: "continue",
                    destination: "room",
                },
            ],
            items: [
            ],
            
        },

        library_interior: {
            image: "library interior.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "back",
                    destination: "library",
                },
            ],
            items: [
            ],
            
        },

        map: {
            image: "map.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "back",
                    destination: "signpost",
                },
            ],
            items: [
            ],
            
        },

        downtown_square: {
            image: "downtown square.jpg",
            story: `
            You are in a big city square. Not far away from the artisanal
            fountain, there is a block of buildings. One of them has a large
            door facing the street.
            `,
            story2flag: false,
            story2:`
            You are in a big city square. Not far away from the artisanal
            fountain, there is a block of buildings. One of them has a large
            door facing the street.
            `,
            choices: [
                {
                    choice: "bridge",
                    destination: "bridge",
                },
                {
                    choice: "dance floor",
                    destination: "dance_floor",
                },
                {
                    choice: "park",
                    destination: "park",
                    story: `
                    Not now. Maybe later...<em>Do you happen to have a camera with you?</em>
                    `,
                    storyConditionMet:`
                    One day you decide to go for a stroll around a nearby park.
                    It is a bright sunny day. You have never been to this one before,
                    and it looks very nice.
                    When you arrive at the entrance,
                    you notice a big classical clock and two large areas covered with
                    colorful flowers. The flowers are aranged in layers. There is one
                    one layer of tulips at the top, and one layer of chamomile underneath.
                    In the middle, there is a big lake and some wild birds that are
                    either flying above or swimming in it.
                    The surroundings are nice as well - many trees
                    and vegetation, small alleys and bridges, rocky formations, and
                    many other
                    interesting spots. The area is teeming with life. You encounter
                    bees, small animals, and various birds.
                    It is a very nice location... Quite close to the dance floor
                    as well.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["camera"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "join group",
                    destination: "artizanal_fountain",
                    story: `
                    Not now. Maybe later...<em>You may need some advanced dance level skills</em>
                    `,
                    storyConditionMet:`
                    You join the group of dancers. The video spot involves a
                    flashmob. That's why it takes place in a public
                    square area. Definitely, not something you would be
                    very comfortably doing...
                    The music starts playing and people cheer up. The song sounds
                    good! It is an old one from the 70's. It's about this
                    important human emotion being in the air.
                    The camera is turned on and you are now supposed to start
                    dancing.
                    Andrenaline rushes through your body, and you start moving
                    on the music. Very much to your
                    surprize you make it! It is a different style of music than
                    what you have been dancing to until now, but it has a similar
                    musical pattern underneath. The steps you know work well on
                    it because the song has enough dynamic and energy!
                    It becomes super fun, and you have a great time during and
                    after
                    the rehearsal! Something you would definitely
                    remember...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_dance skill 3"],
                        "itemsReturned": [],
                    },
                },
            ],
            items: [
            ],
            
        },

        park: {
            image: "park.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "downtown square",
                    destination: "downtown_square",
                },
                {
                    choice: "use camera",
                    destination: "park",
                    story: `
                    You need a camera...
                    `,
                    storyConditionMet:`
                    You take several pictures as you walk throughout the park.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["camera"],
                        "itemsReturned": ["park photos"],
                    },
                },
                {
                    choice: "use seeds",
                    destination: "park",
                    story: `
                    You don't have any seeds...
                    `,
                    storyConditionMet:`
                    You choose to plant the seeds.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["seeds"],
                        "itemsReturned": ["_seeds planted"],
                    },
                },
            ],
            items: [
            ],
            
        },

        dance_floor: {
            image: "dance floor.jpg",
            story: `
            You go right towards the large metal door that is facing the street.
            You wonder if this is the right place to be.
            You are a bit nervous, but you take a deep breath and you
            step inside.
            At the entrance, the light is nice and warm and you notice a
            the small reception desk and a cozy couch. Nobody to ask around though.
            On the walls, there
            are a few large posters, in which you can see different groups
            of people. From the way they pose, they must be dancers.
            They look nice.
            You hear some nice music in the background. It is coming from downstairs.
            There must be a floor below.
            A little shy at first, you take a couple of steps in the direction
            of the music.
            When you reach the last step, you take a look at the room in front of
            you and you remain in total awe.
            You are facing a big and shiny dance floor illuminated by colorful
            spotlights. Beautifull happy music is playing, giving an overall
            good vibe. There are many young people dancing
            on the floor in a most beautiful and elegant manner. They are
            holding each other's hands and forming an open type of embrace.
            This is simply amazing! If you only knew
            how to dance the way they do...
            `,
            story2flag: false,
            story2:`
            You are facing a big and shiny dance floor illuminated by colorful
            spotlights. Beautifull happy music is playing, giving an overall
            good vibe. There are many young people dancing
            on the floor in a most beautiful and elegant manner. They are
            holding each other's hands and forming an open type of embrace.
            This is simply amazing! If you only knew
            how to dance the way they do...
            `,
            choices: [
                {
                    choice: "downtown square",
                    destination: "downtown_square",
                },
                {
                    choice: "dance",
                    destination: "dance_floor",
                    story: `
                    You get on the dancefloor and try to mimick what the others
                    are doing. You try a couple of steps, but it proves to be
                    too much... It feels so awkward and cumbersome...
                    It is so difficult to step in a pre-defined
                    pattern and follow the music at the same time. Until now
                    you have not even been aware that movement follows
                    the music. There is hope though...
                    There are a couple of nice ladies brave enough to help.
                    They seem to be experienced dancers.
                    One of them shows you how to properly embrace. The steps
                    continue to be a pain, but the embrace feels really nice...
                    You get to know a couple of friendly people from your
                    dancing class.
                    They have started dancing only 2 months ago, and they are
                    already dancing so well! Such a nice community!
                    You end up with a big smile on your face.
                    `,
                    storyConditionMet:`
                    While still outside your confort zone, you continue to
                    practice until you get reasonably good at it.
                    Movements get more fluid and the tension in your body
                    starts to diminish. At some point, you start to actually
                    enjoy this.
                    The songs seem to be in a foreign language. You do not
                    understand the lyrics, but the music has nice rhythm and
                    melody.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_dance skill 1"],
                        "itemsReturned": ["_dance skill 2"],
                    },
                },
                {
                    choice: "dance more",
                    destination: "dance_floor",
                    story: `
                    You are not prepared enough...
                    `,
                    storyConditionMet:`
                    After your class, you decide to remain longer for some more
                    dancing. You meet with your friends from the dance floor and
                    between songs you chat a bit.
                    One of them shows you some cool concept drawings. He seems
                    to be studying a branch of architecture you had no idea it
                    existed.
                    The music is great as usual, and people are having a great
                    time.
                    Tonight, you also notice one of your
                    dance instructors showing off on the dance floor. He does some
                    cool moves and patterns. He has a lot of energy and is quite
                    good!
                    After the song ends, he comes close to your group and tells
                    you about this commercial happening during the weekend.
                    There will be some dancing, and he would like all of you to
                    join.
                    Afterwards, you will be going to the beach. There
                    is some big event at the seaside...
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_dance skill 2"],
                        "itemsReturned": [],
                    },
                },
                {
                    choice: "practice steps",
                    destination: "dance_floor",
                    story: `
                    Despite the fact that you are looking like you are trying
                    to solve triple integrals, things start to work. By the end
                    of your practice session, your body learns the
                    basic sequence of steps.
                    `,
                    storyConditionMet:`
                    Despite the fact that you are looking like you are trying
                    to solve triple integrals, things start to work. By the end
                    of your practice session, your body learns the
                    basic sequence of steps.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_dance skill 1"],
                    },
                },
                {
                    choice: "practice even more steps",
                    destination: "dance_floor",
                    story: `
                    You are not ready yet...
                    `,
                    storyConditionMet:`
                    You practice some more dance steps. Looks much better now.
                    You can do even clean pirouettes without getting dizzy.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_dance skill 2"],
                        "itemsReturned": ["_dance skill 3"],
                    },
                },
                {
                    choice: "free dance",
                    destination: "dance_2",
                    story: `
                    You are not prepared for this yet... 
                    <em>You may need to travel a bit before...</em>
                    `,
                    storyConditionMet:`
                    You go dancing and meet some girls from your dance classes.
                    They are good dancers, and you enjoy dancing with them.
                    They have started taking classes at a similar time.
                    While sitting, you observe the feet of one lady.
                    She has an interesting pair of dance shoes and she looks
                    cool in her pair of jeans.
                    Could be an interesting photo, albeit difficult to take
                    in such low-light conditions. You get a
                    camera and a small tripoid, and ask her to hold steady
                    for one moment, until you can take the
                    picture. You are happy with the result... The girls start
                    laughing, and they invite you on the dance floor.
                    At the end of one dance, one of them tells
                    you something that you don't know how to take.
                    She tells you that you would
                    be good for this other type of dance. Is this a compliment,
                    or a rather more realistic assessment of your current
                    dancing skills level? :)
                    You thought you were reasonably good.
                    Now you are not so sure anymore...
                    Perhaps this other type of dance might suit you better after
                    all... Tal vez... Something to keep in mind!
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["_travel"],
                        "itemsReturned": ["camera"],
                    },
                },

            ],
            items: [
            ],
            
        },

        artizanal_fountain: {
            image: "artizanal fountain.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "travel",
                    destination: "palm_beach",
                    story: `
                    You are now in the palm beach area. Feels good
                    to be back home! The sun, the sand, the waves, the trees,
                    the seagulls, even the sand castles are still there!
                    One of the evenings, you decide to join your friends
                    from the dance school. They are here as well. You go to this open
                    bar on the
                    beach. Everyone is there and the music is playing. There are also a
                    couple of tourists having some drinks and enjoying their holidays.
                    You break the ice and invite one of the dancers. Soon
                    after, everyone is on the floor and the atmosphere becomes magical.
                    At some point during the night, you leave the bar and start walking
                    on the beach towards the sea. Feels good to breath fresh air and
                    experience the light sea wind. You are now near the water.
                    The sea is so calm and smooth tonight. You hear only the sound of
                    the water and the echo of some distant musical notes coming from
                    the bar on the beach...
                    Something is still missing... You return to your friends, and enjoy
                    the rest of the night.
                    `,
                    storyConditionMet:`
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": [],
                        "itemsReturned": ["_travel"],
                    },
                },
            ],
            items: [
            ],
            
        },

        palm_beach: {
            image: "palm beach.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "downtown square",
                    destination: "downtown_square",
                },
            ],
            items: [
            ],
            
        },

        watch_river: {
            image: "whatch river.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "bridge",
                    destination: "bridge",
                },
                {
                    choice: "use camera",
                    destination: "watch_river",
                    story: `
                    You need a camera... <em>Where could you find one?</em>
                    `,
                    storyConditionMet:`
                    So you did remember... Nice!
                    Coming back to the story... Since you have already learnt
                    how to use your
                    camera in low light conditions, you take a picture of the
                    river. The street lights on the sides make the entire scene very
                    interesting at night.
                    `,
                    condition: {
                        "conditionMet": false,
                        "itemsRequired": ["camera"],
                        "itemsReturned": ["river photos"],
                    },
                },
            ],
            items: [
            ],
            
        },

        dance_2: {
            image: "dance 2.jpg",
            story: `
            `,
            story2flag: false,
            story2:`
            `,
            choices: [
                {
                    choice: "dance floor",
                    destination: "dance_floor",
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
            buttonText: "Select the 5th chapter from the top"
        },

    }
}