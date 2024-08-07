import LinkedIn from "@mui/icons-material/LinkedIn";
import { Instagram, Language } from "@mui/icons-material";
import { DetailProjectData } from "../../Components/DetailProjectTile";
import bulwarkRocketsGif from "../../assets/bulwark rockets.gif";
import sniperAIGif from "../../assets/sniper ai.gif";
import kataphraktosPortrait from "../../assets/Kataphraktos.png";
import statsYamlSS from "../../assets/stats-yaml-ss.png";
import planarPerilActionShot from "../../assets/TFS first wave.png";
import editorAiFull from "../../assets/editor-ai-full.png";
import editorAiParams from "../../assets/editor-ai-params.png";
import fow1 from "../../assets/FoW1.png";
import fow2 from "../../assets/FoW2.png";
import fowShader from "../../assets/FoWShader.png";
import statsCalcUtilSS from "../../assets/statsCalcUtil.png"
import editorTriggers from "../../assets/editor-triggers.png";
import attackUtility from "../../assets/attackUtility.png";
import rocketArcIMotion from "../../assets/rocketArcIMotion.png";
import rocketMotion from "../../assets/rocketMotion.png";
import shroudedCityMist from "../../assets/shroudedCityMist.png";
import shroudedCityComposition from "../../assets/shroudedCityBehaviors.png"
import shroudedCityWalls from "../../assets/shroudedCityWalls.png"
import shroudedCityRendering from "../../assets/shroudedCityRendering.png"
import belongOpening from "../../assets/belongOpening.png";
import ratBurglarPassengers from "../../assets/ratBurglarPassengers.png";
import ratBurglarPool1 from "../../assets/ratBurglarPool1.png";
import ratBurglarPool2 from "../../assets/ratBurglarPool2.png";
import ratBurglarSubway from "../../assets/ratBurglarSubway.png";
import ratBurglarRandoms from "../../assets/ratBurglarRandoms.png";
import scarletDialogueCode from "../../assets/scarletDialogueCode.png";
import scarletQuestMessaging from "../../assets/scarletQuestMessaging.png";
import scarletDialogue from "../../assets/scarletDialogue.png";
import necrofixerAbomination from "../../assets/necrofixerAbomination.png";
import belongTrees from "../../assets/belongTrees.png";
import belongTreeCreator from "../../assets/belongTreeCreationScript.png";
import BandcampIcon from "../../assets/Bandcamp-button-circle-black.svg?react";
import ItchIcon from "../../assets/itchio-textless-black.svg?react";

const gameTileData: DetailProjectData[] = [
    {
        tileMedia: {
            title: "Planar Peril",
            headerMedia: { src: kataphraktosPortrait }
        },
        description: `An in-progress RTS made with Unity/C#. In the current build, there are two playable scenarios: the tutorial and the wave defense mode.

            Gather resources, build a base, and fight off the increasingly dangerous waves of enemies in this war of alternate versions of Earth.

            Play as either the zealous Benedictum, a fantastical version of the Eastern Roman Empire c. 400 BCE, or the Free State, a Cyberpunk city-state ruled by Megacorporations and the insatiable thirst for progress.
                        
            Most assets currently in the game are placeholders.
            `,
        projectHeaderMedia: planarPerilActionShot,
        projectHeaderMediaType: "img",
        projectTitle: "Planar Peril",
        projectLinks:  [
            { label: 'Demo (Itch.io)', url: 'https://johaggis.itch.io/planar-peril-demo' }
        ],
        projectType: "Personal Project",
        subsections: [
            {
                title: "Role Overview",
                contents: [
                    {
                        type: "text",
                        content: 
                            `An in-progress RTS game passion project, built with Unity and C#. 
                            
                            As the sole programmer, I created the entire codebase. This includes game systems, UI engineering, unit and player AI, and shader logic. If you're curious, check out the feature deep dives in the "Technical Details" section.

                            I'm also responsible for the design of all gameplay systems, missions, faction balance, player AI, the world and factions themselves, and some of the UX patterns. I've maintained a GDD, as well as a style guide, balancing spreadsheets, and profiles on every unit. I've also relentlessly playtested the game and gathered feedback to help inform my design work.

                            As with any mostly-solo project, I've also integrated assets, built placeholder models in blender, and done some light VFX work.

                            The project is largely solo-developed as a passion project. A few friends have helped with some art and UI work.
                            `
                    }
                ]
            },
            {
                title: "Game Info",
                contents: [
                    {type: "text", content: 
                        `In the current demo build, there are two playable scenarios: the tutorial and the wave defense mode. Gather resources, build a base, and fight off the increasingly dangerous waves of enemies in this war of alternate versions of Earth.
        
                        Play as either the zealous Benedictum, a fantastical version of the Eastern Roman Empire c. 400 BCE, or the Free State, a Cyberpunk city-state ruled by Megacorporations and the insatiable thirst for progress.
                                    
                        (Most assets currently in the game are placeholders)
                        `
                    },
                ]
            },
            {
                title: "Technical Details",
                contents: [
                    {type: "text", content: 
                        `Planar Peril is built with Unity/C#.
        
                        While this is a passion project and not going to be comercially released in full anytime soon, many features are already in the demo build. Some features I'm particularly proud of:
        
                        - Data-driven approach to game entities (with YAML and YamlDotNet).
        
                        - Performant, smooth fog of war.
        
                        - Editor tools for AI opponents and scenario triggers.
        
                        - Utility AI for individual units.
        
                        - Faux-physics for a number of projectiles.
        
        
                        Below is a deep dive into those features and how they were built.
                        `
                    },
                    
                    {type: "subsectionTitle", content: "Data-Driven Entities"},
                    {type: "img", content: statsYamlSS},
                    {type: "text", content: 
                        `Given the nature of RTS games, I wanted an approach to units that properly encapsulated what makes a unit distinct. Whereas I often various tutorials stored units as prefabs with a script that stored all of its data as serialized properties, that approach didn't make sense to me. While it can be nice to keep pieces of the game in the Unity Editor, managing scripts across 15+ units per faction is both a lot of extra work, hard to differentiate in version control, and makes comparison across units difficult. Part of what makes the stats of a unit meaningful is how they compare to other units. In an RTS, the moment-to-moment gameplay is driven by the differences in these stats, such as a long-range unit firing at a shorter-range one first, or a heavily armored unit taking more punishment than an unarmored one. And needing then either separate objects for buildings or categorically different objects for upgrades makes the prefab-first approach even more unmaintainable.

                        Instead, I created a YAML file that stores the stats of all units, buildings, and technological upgrades. I then parse the YAML into a global state in the game, providing a static reference to stats by the type of unity/building/upgrade. Stats are comparable side-by-side and easily jumped between, which is huge for designing and balancing them. Making a series of small tweaks is far easier if you have all of the data in front of you. And this has the added benefit of providing an interface for non-programmers to edit stats. While I am mostly developing Planar Peril solo, being able to fully shift into a design headspace greatly boosts my productivity.
        
                        This approach also allows for a separation between the abstract idea of the unit and an instance of the unit. In an RTS, a common feature is a way to upgrade your units. Using the following function, I don't maintain stats on units themselves, only "local" modifications. Whenever I need to know a stat, like a unit's damage value when it attacks, I calculate it.
                        `
                    },
                    {type: "img", content: statsCalcUtilSS},
                    {type: "text", content: 
                        `Because the stats are calculated dynamically, I don't have to worry about finding every unit of a type every time stats are modified.The above function shows how I calculate stats, which takes into account a base value and a series of either flat or percent-based modifications that can be run on the base value or a total value. The mix allows for splashy localized effects (like "doubling the damage of everyone in this area"), but also for more incremental player-wide changes (like "granting archers 20% more attack"). Because they can also be calculated based on a base value or a total, I can control whether the upgrades and effects scale exponentially or linearly.
        
                        So far, this has not caused issues with performance, but if it starts to, I'll cache a value and something like a timestamp to see if a stat needs recalculation. 
                        `
                    },
                    {type: "subsectionTitle", content: "Fog of War"},
                    {type: "img", content: fow1},
                    {type: "text", content: 
                        `
                        Fog of war is essential to most RTS titles. Gaining information and preventing your opponent(s) from doing the same is a major dynamic for an RTS. For those not familiar with the genre, units and buildings in RTS games have a defined area around them they can "see". If a player owns no units nor buildings who can see a part of the map, it is obscured by "fog". Fog of war often has three states:
                        
                        - An undiscovered state, where an area is pitch-black and you know nothing about it.
                        
                        - A dimmed state, where an area has visible terrain and you can see enemy buildings that you've previously seen.
        
                        - A fully lit state, where you can see everything: the terrain, enemy buildings, and enemy units in the area.
        
                        Some games have no undiscovered state and start with the entire map dimmed, but there's value lost in the sense of discovery as you explore the map. Generally speaking, the map starts pitch-black, becomes lit as you explore, and becomes dimmed as your units and buildings move away from the areas they've seen. Because of these states, the easiest approach I found was to make the pieces of the map (small cells) maintain a value of -1, 0, or a number greater than 0. -1 indicates blackness, 0 indicates dimming, and a positive number indicates the number of allied units and buildings that can currently see the area. My first, naive solution was to make 300 * 300 (the dimensions of the fog) game objects, each with a collider that would render either blackness, a dimming shader, or nothing. However, performance took a serious hit with that many colliders being calculated for physics and that many lifecycle methods for the GameObjects.
        
                        What proved much better is the current solution- a raw texture where the red channel dictates whether a cell is visible. By hooking this up to a projector, we get something much more efficient that only updates when vision changes.
                        
                        `
                    },
                    {type: "img", content: fow2},
                    {type: "text", content: 
                        `
                        The red channel here represents the visible area. The darker red represents a dimmed area, and the black is everything else. The red values are plugged into a shader that parses the value as a simple alpha of 0, 1, or some middle value, and using that, I can project blackness onto the terrain. The result can be seen directly on the minimap in in the bottom left. We add a lerp for the current and previous values to smooth the transition a bit, and get a shader that looks like this-
                        `
                    },
                    {type: "img", content: fowShader},
                    {type: "text", content: 
                        `
                        The fog no longer shows up in the profiler and is smoother than ever before. I've seen some tutorials where devs focus on create a fog effect with the softest edges they can, but they often sacrifice some of the precision and control by using two cameras, one that doesn't clear and one that does. I prefer having that direct access to how the fog is determined, as it enables debugging much more effectively and provides more consistent results.
                        `
                    },
        
                    {type: "subsectionTitle", content: "Editor Tooling"},
                    {type: "img", content: editorAiParams},
                    {type: "text", content: 
                        `
                        Some features in Planar Peril required a bit more effort to be effectively designed. When it comes to an AI opponent, abstracting actions the AI can take is essential to making it designable. Trigger effects for scenarios (when "x" happens, do "y") similarly are much easier to design from an interface than from code. Without effective means to fire off events from a high level, designing even an extremely simple mission can be tough. And like I mentioned with data-driven stats, keeping my design layer separate makes it more accessible. So I created a couple tools to help the process. 
        
                        The first is a custom editor window to manage the AI plans. I opted to base my AI opponent on the Hierarchical Task Network (HTN) model, as the model are closest to how we think of a player issuing orders and allows for the right abstractions. Unlike with Goal-Oriented Action Planning, the tasks for an HTN are discrete sets of actions, and there's no need for any navigation logic. While the game state may change wildly over the course of a game, the way to accomplish most player tasks, such as building a worker economy, lack that extreme variance.
                        
                        AI planning is an abstraction and data-based, so it belongs in the data layer. Rather that creating ScriptableObjects or some other Unity structure for the actions, like unit stats, I store actions in a YAML file and transform the data as needed. While editing YAML is generally nicer than editing JSON directly, a dedicated interface is still a huge asset. Below is the tool I've made (with Unity's UI Toolkit)-
                        `},
                    {type: "img", content: editorAiFull},
                    {type: "text", content: 
                        `
                        With text highlighting, dropdowns, foldouts, typeaheads, links between subactions and their parents, and custom names, suddenly developing the actions became simple. While there was a developer cost of creating standardized components for things like text boxes and lists, I was able to flex my web development abilities to create a UI I could work with. There's also validation to make sure the actions make sense, which is something editing yaml or ScriptableObjects don't give you for free anyways. I plan to continue building out this tool as I make the AI more robust.
                        
                        The second tool is a custom inspector I use for the map triggers. Each trigger is represented by a GameObject, with an event to activate it, a set of conditions to pass, and a set of effects to resolve should the conditions pass.
                        `
                    },
                    {type: "img", content: editorTriggers},
                    {type: "text", content: 
                        `
                        I made this tool before the AI Editor, but it still provides a lot of great functionality. In particular, the ability to define my logic for the conditions as a sentence, using "and", "or" and parentheses for grouping statements, has provided a ton of flexibility without compromising readability. Because the conditions can also have custom names, you can get a sentence like the one in the screenshot. Eventually I revisit the trigger system and rewrite it to be more similar to the AI tool to make it a little faster to look through, a little easier to link to other triggers, and to get away from the Unity GameObject functionality that it barely uses.
                        `
                    },
                    {type: "subsectionTitle", content: "Unit Utility AI"},
                    {type: "img", content: attackUtility},
                    {type: "text", content: 
                        `
                        As with any RTS, the units in Planar Peril need a degree of autonomy, and thus AI behavior. After all, fights become unmanageable if your units can't automatically acquire new targets when their current one dies. Each unit's behavior is controlled by a script that can queue up actions, execute the them in order, and clear out actions when they are completed or interrupted. And when the behavior queue becomes empty, there's a good chance I want the unit to do something else. Given the range of behaviors and circumstances, I opted to use a basic Utility AI model to control their next action.
        
                        The picture at the start of this section features a utility calculation for the best target to attack. Scores can be affected by a number of factors. In this case, the largest factors are the unit's proximity to the best target and whether its previous action was also an attack. This score is then compared against other types of actions, such as assisting in building a structure. Once we determine the highest score, we queue up that action. However, if no action scores above a minimum threshold, it means there aren't any worthwhile actions to take, so the unit will simply stop.
        
                        This flow has made for units attacking sensible targets in battle and continuing to fight without player input. You can see this in the gif below, where a sniper deploys and attacks targets in range, without any player command beyond the deployment.
                        `
                    },
                    {type: "img", content: sniperAIGif},
                    {type: "subsectionTitle", content: "Projectile Physics"},
                    {type: "img", content: bulwarkRocketsGif},
                    {type: "text", content: 
                        `
                        Planar Peril is not a physics-based game like RTS titles in the style of Total Annihilation. However, using physics as a basis for projectile motion can lead to some visually pleasing effects, like the rockets in the gif above. The enemy archers actually also use a form of projectile motion for their attacks, though it's a bit easier to see with the more exaggerated motion of the rockets.
        
                        While I wanted something that looks smooth and somewhat realistic, it's important to know what pieces of the puzzle you want to control. I defined a few variables for myself, like how fast the rocket should move, and where the "kick backwards" arc should end. And given a duration for that "kick backwards" arc, figuring out the velocity and acceleration were straightforward.
                        `
                    },
                    {type: "img", content: rocketArcIMotion},
                    {type: "text", content: 
                        `
                        Once you define the parameters you care about, the rest can be plugged into simple formulae. Pictured below are the functions for moving the rockets through the first and second arcs.
                        `
                    },
                    {type: "img", content: rocketMotion},
                ]
            },
            {
                title: "Credits",
                contents: [
                    {type: "text", content: 
                        `Peter Hechler - Creator, Programmer, Game Designer
        
                        Shea Sweeney - Icon Artist
                        
                        Greg Berg - UI Designer and Logo Designer
                        
                        John Goodman - Concept Artist
                        
                        Zackry Broodie-Stewart - Concept Artist

                        Jon Lai - Concept Artist
        
                        Special thanks to Dylan McNair, Gautham Varadarajan, and Michael Wang
                        `
                    }
                ]
            },
            
        ],
    },
    {
        tileMedia: {
            title: "Scarlet O'Beetle and the Unseen World",
            headerMedia: { src: "https://img.itch.zone/aW1nLzE2MjAwNTkxLnBuZw==/original/tKEQhv.png" }
        },
        description: `
            A classic adventure point-and-click, story-rich puzzle game set in the fascinating world of insects. While interacting with the characters and learning about their lives, the player will learn exciting scientific facts about the species they encounter and the anthropic impact of climate change and pollution.
        
            2024 Just Play Jam Finalist
            `,
        projectTitle: "Scarlet O'Beetle and the Unseen World",
        projectHeaderMediaType: "video",
        projectHeaderMedia: "https://www.youtube.com/embed/qapTklDtEww",
        projectLinks: [
            { label: 'Itch.io', url: "https://terminalvector.itch.io/scarlet-unseen-world"},
            { label: 'Just Play Jam', url: "https://www.justplayjam.com/"}
        ],
        projectType: "Game Jam Project",
        subsections: [
            { title: "Role Overview", contents: 
                [{
                    type: "text",
                    content: 
                    `Scarlet O'Beetle game jam project built with Unity/C#.

                    I worked as a programmer on the game. The major aspects of the game I worked on were creating a data-driven dialogue system, a modular quest system, and adding visual feedback for player actions.

                    Additionally, as one of the more seasoned Unity developers on the team, I taught teammates Unity best practices and showed them how to integrate a data layer into a Unity project effectively.
                        
                    The game was created with a 10-person team, consisting of teammates from all over the globe, collaborating over the course of around 14 days. After the initial 14-day period, our game was selected as a finalist. We then had a period to refine the game, fix bugs (no pun intended), and to make the game more presentable. Overall, we worked on the game over the course of about a month.
                    `
                }]
            },
            {
                title: "Game Info",
                contents: [
                    {type: "text", content: 
                        `A classic adventure point-and-click, story-rich puzzle game set in the fascinating world of insects. While interacting with the characters and learning about their lives, the player will learn exciting scientific facts about the species they encounter and the anthropic impact of climate change and pollution.
        
                        Scarlet O'Beetle was created as part of the 2024 Just Play Jam, a game jam focused on environmentalism and socially conscious games. We are proud to have been finalists in the jam, and to contribute to environmental awareness in what small way we can.
                        `
                    }
                ]
            },
            { 
                title: "Technical Details",
                contents: [
                    {type: "text", content: 
                        `Scarlet O'Beetle is made in Unity/C#, and has a much larger scope than other game jam titles I've worked on. Part of this was dictated by the length of the jam, but part of it was the ambition of the team. The game features some 800 lines of dialogue, and that alone required significant attention from our programming team. I'll focus on two major aspects from this game:
                        
                            - Dialogue System
                            - Messaging and Observer Patterns

                        These pieces were crucial to the game both being finished on time and scaling to meet our design needs. Let's start with the dialogue system.
                        `
                    },
                    {type: "subsectionTitle", content: "Dialogue System"},
                    {type: "img", content: scarletDialogue},
                    {type: "text", content: 
                        `
                        Dialogue is a cornerstone of the gameplay loop of Scarlet O'Beetle. As I mentioned above, there are about 800 lines of dialogue in Scarlet. When I joined the project, the team had started creating a dialogue system involving attaching references to ScriptableObjects to GameObjects, with children of the GameObject containing follow-up dialogue. Dialogue choices were handled by sibling relationships.

                        This was an unscalable, unmaintainable solution. It was way too difficult to translate the google sheet of dialogue to all of these individual game objects, and it required extensive knowledge of Unity for our writer to update her dialogue. It also meant that a programmer had to hunt for every object with updated dialogue to make the necessary changes. The parent-child relationship made following a conversation tricky, and finding the pieces of dialogue in the file structure was no easier.

                        Realizing that solution wouldn't allow us to make the deadline, we reworked the whole thing. Rather than linking dialogue with ScriptableObjects, we created a YAML file for our dialogue (much like I did with my data layer in Planar Peril). We parsed the YAML file with YamlDotNet and transformed it into C# classes on game start, stored in a singleton state. The dialogue singleton stored every exchange in a dictionary, keyed by ids. With a transformation layer and an easy way to access dialogue by id, our resulting code ended up looking like this:
                        `
                    },
                    {type: "img", content: scarletDialogueCode},
                    {type: "text", content: 
                        `
                        There are a number of advantages to this approach. One of the most important is that exchange ids are easy to include everywhere we need them, without deep knowledge of the particular exchange. A character just needed to know where their dialogue was stored, and the dialogue system handled the rest.

                        Another key advantage was allowing designers to avoid learning the intricacies of Unity or our codebase. Our writer was able to change the dialogue either just by updating the google sheet or by going into the YAML and editing lines directly there. They could see the whole conversation, its context, and touch only the parts of the game that were relevant to them.

                        While it was not insignificant to implement, this system saved us a ton of time and allowed us to continually improve the dialogue. If I were to go back to the project, I would love to create a node-based dialogue editor like many other dialogue systems do, and focus on making dialogue able to branch without returning to its initial set of options.
                        `
                    },
                    {type: "subsectionTitle", content: "Messaging and Observer Patterns"},
                    {type: "img", content: scarletQuestMessaging},
                    {type: "text", content: 
                        `
                        One pattern that I've used throughout the games I've developed is the observer pattern for event messaging. For those unfamiliar with it, the idea is that different parts of the game can subscribe to particular event identifiers, and other parts of the game can then emit messages using those event identifiers to inform the subscribers that a piece of the game state has changed. In the code above, when a quest milestone is reached, like "succesfully diagnosing your patient", the quest manager emits a message saying that "the diagnosis is complete." Any part of the game that was listening for that message can react. That might mean unlocking the next quest or making a new NPC appear.

                        The biggest advantage of this paradigm is a separation of concerns. The QuestStateManager really just cares about maintaining which milestones have been reached. It shouldn't need to track whether that new NPC should appear yet, which dialogue a particular character should use, or anything like that. Those responsibilities can be offloaded to the parts of the game that are tied to that particular NPC, or a particular quest. And if we decide to remove a quest, we can simply remove code related to that quest. Even if we forgot to remove the quest milestone from the QuestStateManager, it would simply emit an event that nothing would react to.
                        `
                    }
                ] 
            },
            {
                title: "Credits",
                contents: [
                    {
                        type: "text",
                         content: 
                            `Monica Serban {monica} - Original Concept, Narrative Designer/Writer
        
                            Henry Dotson {henry} - Producer, Lead Programmer
        
                            Manuel Garcia {manuel} - Unity Dev
        
                            Emelie Kronquist {emelie} - Sound Designer, Sound Engineer
        
                            Hannah Kim {hannah} - 2D Art, Character Designer

                            Alejandro Zeguecios {alejandro} - Music Composer

                            Yiyi Zhang {yiyi} - 2D Artist, UI Designer
                            
                            Peter Hechler {peter} - Unity Dev

                            Sydney Gardner {sydney} - 2D Artist, Animator

                            Akshay Bharadhwa {akshay} - Unity Dev, Animator

                        `,
                        textLinks: { 
                            monica: [
                                {
                                    icon: LinkedIn,
                                    iconType: "mui",
                                    href: "https://www.linkedin.com/in/maria-monica-serban-2a085419/",
                                    label: "LinkedIn"
                                },
                            ],
                            henry: [{
                                icon: LinkedIn,
                                iconType: "mui",
                                href: "https://www.linkedin.com/in/henry-dotson/",
                                label: "itch.io"
                            }],
                            manuel: [],
                            emelie: [{
                                icon: Language,
                                iconType: "mui",
                                href: "https://www.ekronquist.com/",
                                label: "personal site"
                            }],
                            hannah: [
                                {
                                    icon: Instagram,
                                    iconType: "mui",
                                    href: "https://www.instagram.com/minoyjoy/",
                                    label: "instagram"
                                }
                            ],
                            alejandro: [
                                {
                                    icon: Language,
                                    iconType: "mui",
                                    href: "https://alejandrozeguecios.com/",
                                    label: "personal site"
                                }
                            ],
                            yiyi: [
                                {
                                    icon: LinkedIn,
                                    iconType: "mui",
                                    href: "https://www.linkedin.com/in/yiyi-zhang/",
                                    label: "LinkedIn"
                                }
                            ],
                            peter: [{
                                icon: Language,
                                iconType: "mui",
                                href: "https://peterhechler.com",
                                label: "personal site"
                            }],
                            sydney: [
                                {
                                    icon: LinkedIn,
                                    iconType: "mui",
                                    href: "https://www.linkedin.com/in/sydney-k-gardner/",
                                    label: "LinkedIn"
                                }
                            ],
                            akshay: [
                                {
                                    icon: Language,
                                    iconType: "mui",
                                    href: "https://akshayb.xyz/",
                                    label: "personal site"
                                }
                            ]
                        
                        }
                    }
                ]
            }
        ]
    },
    {
        tileMedia: {
            title: "Shrouded City",
            headerMedia: { src: "https://i.imgur.com/QngmlmA.png" }
        },
        description: "A 2D dungeon crawler built with Pixi.js. Navigate the rooms of the occult and reach the cliffs at the end.",
        projectTitle: "Shrouded City",
        projectLinks: [
            { label: 'Github', url: 'https://github.com/hechlerp/ShroudedCity' },
            { label: 'Live', url: 'http://hechlerp.github.io/ShroudedCity/' }
        ],
        projectType: "Personal Project",
        projectHeaderMedia: shroudedCityMist,
        projectHeaderMediaType: "img",
        subsections: [
            {
                title: "Role Overview",
                contents: [
                    {type: "text", content:
                        `A dungeon crawler built with JavaScript and the pixi.js rendering library as a personal project.
                        
                        Like with Planar Peril, this game is mostly solo developed. 

                        I built this project without an engine, partly as a way to test how far I could take my JavaScript abilities back in 2016. This was shortly after I completed my web development course at App Academy, and served as a great learning experience. I coded a collision system, a player controller, simple enemy AI, and all core game systems.

                        I handled every aspect of design in the game as well.

                        A friend did about half of the environment art, as well as art and animations for two of the enemy types. The rest of the (much worse) art was done by me.
                        `
                    }
                ]
            },
            {
                title: "Game Info",
                contents: [
                    {type: "text", content: 
                        `A 2D dungeon crawler where you must fight your way through cultists and occult abominations to find a way out of the city. Navigate the increasingly dangerous rooms and reach the cliffs at the end.
                        `
                    },
                ]
            },
            {
                title: "Technical Details",
                contents: [
                    {type: "text", content: 
                        `Shrouded City is built entirely with JavaScript, with Pixi.js as a render library to interface with WebGL. Part of the purpose of this project was to see how far I could take the JavaScript I'd learned without a major framework or engine. If I were to return to this project, there's a lot I would change. But as it stands, there are still a few patterns worth highlighting.
        
                        - Composition for game objects
                        - Wall collision optimizations
                        - Top-to-bottom rendering
                        `
                    },
                    {type: "subsectionTitle", content: "Object Composition"},
                    {type: "img", content: shroudedCityComposition},
                    {type: "text", content: 
                        `
                        As a dungeon crawler, I knew from the start of the project that I'd have repeatable functionality across multiple enemy and character objects. While some behaviors might be specific to a particular enemy type, decoupling the standardized behaviors from game objects saved me a lot of headaches. As demonstrated above, I defined behaviors as individual scripts. Creating an enemy or character's behaviors was then a matter of defining which scripts it used. For example, the player character uses movement, attacks, has a hitbox, has health, and has "special meter". When the object's update function is called, it invokes the update functions for each of its behavior scripts, without needing to know anything else about them. Shared functionality was easy to add to an enemy, and any logic specific to that enemy type could just replace the standard script. And as a bonus, debugging behaviors becomes much easier when you have a tight execution flow.
                        `
                    },
                    {type: "subsectionTitle", content: "Wall Collisions"},
                    {type: "img", content: shroudedCityWalls},
                    {type: "text", content: 
                        `
                        Shrouded City doesn't have a major framework or engine handling collision testing, so I had to learn about how to manage collisions in a performant way. One major optimization laid in testing collisions with walls. I used a library that used separating axis theorem (SAT) to determine if two bounding boxes overlapped, but running it with every object and every wall every frame was a waste of resources.
                        
                        Instead I committed to a grid structure (using a 2d array) for each room, and each element in the matrix is either "blank" or a wall object. To test whether an object collided with a wall, I simply grab the corners of its bounding box and check whether their corresponding locations in the matrix contain at least one wall object. If they do, I run the SAT check, and if the corner is found to overlap, I revert that movement of the enemy/player. This way, each moving object runs only 4 checks, and mostly won't even need to run SAT checks at all. The code for this set of checks is in the image above.
                        `
                    },
                    {type: "subsectionTitle", content: "Render Order"},
                    {type: "img", content: shroudedCityRendering},
                    {type: "text", content: 
                        `
                        One final piece of Shrouded City worth drawing attention to is how it renders sprites. While creating the environments, I found that the order of sprite rendering was wildly inconsistent. Sometimes the player would appear in front of a rock, and sometimes only his feet would poke out. Rather than doing something like making the player always render on top of everything, to give that feeling of 3 dimensions in a 2D game, I instead decided top-to-bottom rendering. By using a sprite's lowest y coordinate, I could sort sprites during the draw steps and render "lower" objects on top of "higher" ones. In games with this kind of perspective, like Legend of Zelda titles for the GameBoy, objects higher on the screen are generally thought of as being further from the camera, and thus more in the background. The sorting method reinforces that perspective.
        
                        The image above has an example of the player being rendered behind an particularly large enemy.
                        `
                    }
                ]
            },
            {
                title: "Credits",
                contents: [
                    {type: "text", content: 
                        `Peter Hechler - Creator, Programmer, Designer, Artist, Animator

                        Evelyn Lee - Character Artist, Animator, Environment Artist
                    `
                }
                ]
            }
            
        ],
    },
    {
        tileMedia: {
            title: "Rat Burglar",
            headerMedia: { src: "https://ggjv4.s3.us-west-1.amazonaws.com/files/styles/sidebar_full/s3/games/2024/815430/featured/Cover.png?VersionId=n1pnDlFxuV_a0aMuoqKUrueA9n4ZMu16&itok=383X6ZVo" }
        },
        description: `
            Created with a team for Global Game Jam 2024.

            Traverse a New York subway station as one of two rats in this local co-op game. In honor of Pizza Rat, your quest is to grab the pizza and drag it from the first platform to your hole. Be careful of subways and people, as they have no respect for Ratkind and will flatten you. Squeak at the subway passengers to make them run away in panic!

            May your heist go off without a hitch!
            
            (Created for the 2024 Global Game Jam)
        `,
        projectTitle: "Rat Burglar",
        projectHeaderMedia: "https://img.itch.zone/aW1hZ2UvMjUwMTUwMS8xNDg2MDgxMy5wbmc=/794x1000/49p8Z7.png",
        projectHeaderMediaType: "img",
        projectLinks: [
            { label: "Github", url: "https://github.com/hechlerp/Rat-Burglar" },
            { label: 'GGJ Website', url: 'https://globalgamejam.org/games/2024/rat-burglar-4' },
            { label: 'Itch.io', url: 'https://johaggis.itch.io/rat-burglar' }
        ],
        projectType: "Game Jam Project",
        subsections: [
            {
                title: "Role Overview",
                contents: [
                    {type: "text", content: 
                        `Built with Unity/C# for the 2024 Global Game Jam.

                        I worked as the Lead Programmer on the team. I created player controllers, enemy logic, and environmental hazard behavior. I also mentored the more junior devs, teaching them version control, some Unity best practices, and a few code design patterns.
                        
                        Created with a 5-person team. Like other Global Game Jam games, it was created over the course of 48 hours with teammates who I had never met before starting the jam.
                    `}
                ]
            },
            {
                title: "Game Info",
                contents: [
                    { type: "text", content:
                        `Traverse a New York subway station as one of two rats in this local co-op game. In honor of Pizza Rat, your quest is to grab the pizza and drag it from the first platform to your hole. Be careful of subways and people, as they have no respect for Ratkind and will flatten you. Squeak at the subway passengers to make them run away in panic!
        
                        May your heist go off without a hitch!

                        The game was inspired by the famous Pizza Rat of the New York subway system.
                        `
                    }
                ]
            },
            {
                title: "Technical Details",
                contents: [
                    {type: "text", content: 
                        `Rat Burglar is made with Unity and C#. A couple of the patterns used are patterns I've found to be very effective in my other work. I'll discuss two of them here:
                                - Object Pooling
                                - Weighted Randoms
                        `
                    },
                    {type: "subsectionTitle", content: "Object Pooling"},
                    {type: "img", content: ratBurglarPassengers},
                    {type: "text", content: 
                        `
                        For those not familiar with object pooling, the idea is that instead of creating and destroying game objects based on needs, you create a pool of objects to draw from. When a unit is required, it's only created if there are none available. And when an object is no longer needed, instead of destroying it, you deactivate it (hide it) and mark it as available for use.

                        There are a couple advantages to this approach. One major plus is avoiding performance issues caused by the creation and destruction processes. Those processes tend to be slower than hiding an object or repositioning it, partly because of systems like garbage collection. Unity itself recommends this pattern when dealing with large quantities of objects. We had a significant number of passengers emerging from subways (pictured above), and this was both an easy way to manage our objects as well as a free performance boost. And given how quick it is to implement a pool pattern, it fit the scope of a short game jam. Our pools have two pieces to them:
                            1) A static singleton that owns the arrays, with a public method to request a poolable object.
                            2) An interface all pooled objects inherit from, to standardize access patterns.

                        The first image below pictures the singleton pattern and the interface. The second shows the function for requesting a pooled object.
                        `
                    },
                    {type: "img", content: ratBurglarPool1},
                    {type: "img", content: ratBurglarPool2},
                    {type: "text", content: 
                        `
                        The other aforementioned advantage of object pools are the access patterns themselves. When you have an actual pool of objects that you can't exceed and you might to access the state of its contents, an object pool keeps things consistent. In Rat Burglar, we had a set of 4 subways that would zip across the level as obstacles. Given that there were only 4 tracks and a track couldn't hold more than 1 subway at a time, the pool made managing the flow of subways simple. Are all 4 subways out? Then we can't spawn a new one. Do we have some empty tracks? Then let's see which subways are available and send them down those tracks.
                        
                        Not needing to worry about grabbing the wrong subway, duplicating subways, or anything of that nature avoided a lot of potential pitfalls.
                        `
                    },
                    {type: "subsectionTitle", content: "Weighted Randoms"},
                    {type: "img", content: ratBurglarSubway},
                    {type: "text", content: 
                        `
                        The other major pattern I wanted to discuss is actually also connected to subways. While Rat Burglar is a pretty short game, we didn't want the danger to become too predictable. While we did want the first subway to always start closest to the players to teach them about the danger, chaos made it harder to memorize the pattern and sidestep the danger. We wanted players to feel like they weren't safe until they could make it back to their home. Given that the game is a local co-op game, increasing the chaos leads to a lot of panicked, dynamic coordination between the players and emphasizes what can be fun about local co-op. To that end, we wanted the subways to have an element of randomness, without necessarily going to irrelevant platforms (such as one you'd already passed). Enter the weighted random.
                        `
                    },
                    {type: "img", content: ratBurglarRandoms},
                    {type: "text", content: 
                        `
                        This is the function for spawning a subway when a given interval passes. The subway weightings could change depending on where the players were in the level, but it made certain platforms much more likely than others. This pattern gave us control over how much danger the players were in, with enough chaos to prevent them from ever truly knowing where the next subway would approach.
                        `
                    }

                ],
            },
            {
                title: "Credits",
                contents: [
                    {
                        type: "text",
                         content: `Vivian Chen {vivian} - Character art, prop art, ui art
        
                            Charlene (Xinyu) Zhang {charlene} - Environment art, character art
        
                            Sienna Sun {sienna} - UI Programming, sound
        
                            Cherin Oh {cherin} - Programming
        
                            Peter Hechler {peter} - Programming
                        `,
                        textLinks: { 
                            vivian: [
                                {
                                    icon: ItchIcon,
                                    iconType: "svg",
                                    href: "https://vivianchen.itch.io/",
                                    label: "itch.io"
                                },
                            ],
                            charlene: [{
                                icon: ItchIcon,
                                iconType: "svg",
                                href: "https://itch.io/profile/xinyuzhang00",
                                label: "itch.io"
                            }],
                            sienna: [{
                                icon: ItchIcon,
                                iconType: "svg",
                                href: "https://sienna-sun.itch.io/",
                                label: "itch.io"
                            }],
                            cherin: [{
                                icon: ItchIcon,
                                iconType: "svg",
                                href: "https://astavoid.itch.io/",
                                label: "itch.io"
                            }],
                            peter: [{
                                icon: ItchIcon,
                                iconType: "svg",
                                href: "https://johaggis.itch.io/",
                                label: "itch.io"
                            }],
                        
                        }
                    }
                ]
            }
            
        ],
        
    },
    {
        tileMedia: {
            title: "The Necrofixer",
            headerMedia: { src: "https://img.itch.zone/aW1nLzI5NTE4MTMuanBn/315x250%23c/E0TmVi.jpg" }
        },
        description: `Created with a team for Global Game Jam 2020.

            Following the theme of repair, our team set about to build a  game centered around a humble business owner: Zeusly Tangwystl Phd, The Necrofixer!

            Want a cuter cat? visit the Necrofixer!
            Want a familiar that strikes fear into your enemies? Dr. Tangwystl can supply you with what you need!

            Players play as Dr. Tangwystl, who owns a small shop where wizards, witches, warlocks, and other magic folk can bring their familiar creatures to undergo strange operations. By casting magic spells on the customer's familiar pet (clicking limbs), players make adjustments to the animal's appearance in order to please each patron.

            However, if you make too many mistakes you'll get bad ratings and your business might go under!.
            `,
        projectTitle: "The Necrofixer",
        projectHeaderMedia: "https://img.itch.zone/aW1hZ2UvNTYxNjA1LzI5NTE4MzIuanBn/original/D0suYE.jpg",
        projectHeaderMediaType: "img",
        projectLinks: [
            { label: 'Github', url: 'https://github.com/hechlerp/necrofixer' },
            { label: 'GGJ Website', url: 'https://globalgamejam.org/2020/games/necrofixer-familiar-fixerupper-extraordinaire-zuesly-tangwystl-phd-8' },
            { label: 'Itch.io', url: 'https://charlieartifact.itch.io/the-necrofixer' }
        ],
        projectType: "Game Jam Project",
        subsections: [
            { 
                title: "Role Overview",
                contents: [
                    {type: "text", content: 
                        `A point-and-click game built with Unity/C# for Global Game Jam 2020.

                        My role on this team was Lead Programmer. I coded many of the major systems, including the timer, body-part swapping logic, and scoring, and also coordinated the other programmers, dividing up tasks to prioritize crucial game elements. We even managed to get to a few stretch goals, including the scoring screens, the intro sequence, and the 4th customer, with a basic dialogue system.

                        The Necrofixer was built with a 9-person team. Like other Global Game Jam projects I've been a part of, I knew none of my teammates before the jam.
                        `
                    }
                ]
            },
            {
                title: "Game Info",
                contents: [
                    {type: "text", content: 
                        `Following the theme of repair, our team set about to build a game centered around a humble business owner: Zeusly Tangwystl Phd, The Necrofixer!
        
                        Want a cuter cat? visit the Necrofixer!
                        Want a familiar that strikes fear into your enemies? Dr. Tangwystl can supply you with what you need!
        
                        Players play as Dr. Tangwystl, who works at a small shop where wizards, witches, warlocks, and other magic folk can bring their familiar creatures to undergo strange operations. By casting magic spells on the customer's familiar pet (clicking limbs), players make adjustments to the animal's appearance in order to please each patron.
        
                        However, if you make too many mistakes you'll get bad ratings and your business might go under!
                        `
                    }
                ]
            },
            {
                title: "Technical Details",
                contents: [
                    {type: "text", content: 
                        `Like Rat Burglar and Belong, this was a game made with a team that hadn't met before Global Game Jam 2020. Given our team of predominantly artists, we decided to focus on making an asset-heavy, programming-light game. It was a great opportunity to teach one of the other devs a bit about Unity and version control, and to have him cut his teeth on a project with a larger team. 
                        
                        Because of its scope, this section will be a bit smaller than other titles I've worked on. I'll talk a bit about our body part-swapping system below.
                        `
                    },
                    {type: "subsectionTitle", content: "Swapping Body Parts"},
                    {type: "img", content: necrofixerAbomination},
                    {type: "text", content: `
                        The core gameplay of The Necrofixer was swapping around body parts of a pet to make it fit the specifications of each customer. However, as Zeusly Tangwystl is not the best of wizards, he swaps the parts for random other animal parts. To control this, we defined a set of possibly animals with weighted randoms based on how "normal" they were. Something like a cat or dog is more common than an octopus, and rarest of all are the human parts.

                        Given that finding body parts for any given animal is relatively uncommon (the most common are around a 20% chance), we gave animals features, and the customers only ever ask for features. So if your customer wants a "cute" animal, you can use body parts from cats, dogs, and unicorns to contribute to your final score. This way, even with high variance, you can pass each assignment as long as you're careful. 

                        The soundtrack was also made modularly, with a different track for each type of animal part you can encounter. As you come across new animals, it adds their contribution to the soundtrack, all of which work in concert.
                        `
                    }
                ]
            },
            {
                title: "Credits",
                contents: [{
                    type: "text",
                     content: `Christine Fouron {christine} - Character artist
    
                        Charlie Harper {charlie} - Technical Artist
    
                        Peter Hechler {peter} - Programmer
    
                        Merry Hospelthorn {merry} - UI Artist
    
                        Nyusha Iampolski {nyusha} - Character Artist

                        Stefan Lazarevic {stefan} - Programmer

                        Anneliese Lee-Reid {anneliese} - Environment Artist

                        Scott Tongue {scott} - Programmer

                        Gautam Srikishan {gautam} - Music Composer and SFX Designer

                    `,
                    textLinks: { 
                        christine: [],
                        charlie: [
                            {
                                icon: Language,
                                iconType: "mui",
                                href: "www.charlotte-harper.com",
                                label: "personal site"
                            }
                        ],
                        peter: [{
                            icon: Language,
                            iconType: "mui",
                            href: "https://peterhechler.com",
                            label: "personal site"
                        }],
                        merry: [],
                        nyusha: [],
                        stefan: [],
                        anneliese: [],
                        scott: [],
                        gautam: [
                            {
                                icon: Instagram,
                                iconType: "mui",
                                href: "https://www.instagram.com/floatingfast/?hl=en",
                                label: "instagram"

                            },
                            {
                                icon: BandcampIcon,
                                iconType: "svg",
                                href: "https://floatingfast.bandcamp.com/",
                                label: "bandcamp"
                            }
                        ],
                    
                    }
                }
                ]
            }
            
        ]
    },
    {
        tileMedia: {
            title: "Belong",
            headerMedia: { src: "https://ggj.s3.amazonaws.com/styles/game_sidebar__wide/game/featured_image/screenshot_2018-01-28_21.40.05.png?itok=Ys2wi2iW&timestamp=1517236977" }
        },
        description: `Created with a team for Global Game Jam 2018.

            Eat seeds and poop trees to traverse planets and reach your flock. The Chinese word in the logo, 歸途 (guī tu) means: the way back, one's journey home.`,
        projectTitle: "Belong",
        projectHeaderMedia: belongOpening,
        projectHeaderMediaType: "img",
        projectLinks: [
            { label: 'Github', url: 'https://github.com/Davis-B-Allen/birdtest' },
            { label: 'GGJ Website', url: 'https://v3.globalgamejam.org/2018/games/belong', note: 'PC version available for download' },
            { label: 'Live', url: 'http://hechlerp.github.io/belong-web/', note: 'Runs best on Chrome' }
        ],
        projectType: "Game Jam Project",
        subsections: [
            {
                title: "Role Overview",
                contents: [
                    {
                        type: "text",
                        content:
                        `A platforming game built with Unity/C# for Global Game Jam 2018.

                        I did Programming for this project. As one of four programmers, I was able to focus on getting a few denser features working, rather than working on a large set of tasks. I wrote much of the code concering trees, their creation and platforming logic.

                        Created with a 6-person team. Like with the other Global Game Jam projects I've been a part of, I knew none of my teammates beforehand.
                        `
                    }
                ]
            },
            {
                title: "Game Info",
                contents: [
                    {type: "text", content: 
                        `Following the jam's theme of "home", we created a game about a bird finding its way across the stars back to its flock.

                        Eat seeds and poop trees to traverse planets and reach your flock. The Chinese word in the logo, 歸途 (guī tu) means: the way back, one's journey home.`
                    }
                ]
            },
            {
                title: "Technical Details",
                contents: [
                    { type: "text", content: 
                        `Like The Necrofixer and Rat Burglar, this was created with a group of strangers as part of a 48-hour jam. Our two major mechanics in the game were spawning trees, and the gravity shifting when you got close to another planet. I worked closely with Anton on creating the tree spawning loop, so I'll discuss that here.
                        `
                    },
                    {type: "subsectionTitle", content: "Pooping Seeds, Spawning Trees"},
                    {type: "img", content: belongTrees},
                    {type: "text", content: `
                        In order for the player to move from planet to planet in Belong, they need to be able to jump into another planet's gravitational field. However, you can't jump all that high (nor fly), so to do so, you'll need a taller perch. Every time you eat a seed, you'll poop out a fertilized seed a few seconds later, and a tree of increasing height will erupt from the planet's surface.

                        To make this work, we needed a few things - the angle to spawn the tree, the height of the tree, and where to initially position the tree so that it would shoot out to its full height.

                        The angle was easy enough to do. All we really needed to know was where the seed was and which planet it was on. By using the difference between the seed's position and the planets, we could get the angle by using the arctangent.

                        The height of the tree was also fairly straightforward, as each segment had a particular height, and each tree had a trunk and segments equal to the last tree's segment count plus two. 

                        The initial position can be calculated based on the angle and height. All we need to do is make sure the tree is hidden from the player's view while it's coming up, and to make sure it goes up to its full height. So we multiply the height of the tree by negative 1 and combine it with the angle to find its starting position, and from there we can animate it to come "up" along its local y axis from the planet. Our setup was as follows-
                        `
                    },
                    {type: "img", content: belongTreeCreator},
                    {type: "text", content: `
                        There's a lot about the way we wrote this that I would rewrite today, given what I now know. One major thing would be to replace all of the numbers like "3.0f" with variables declaring what they are. That's probably the height of the trunk, given the context, but it's been years since I've looked at this code, and that indicates an issue with readability. Doubly so since the functionality should be pretty simple.
                        
                        However, the math worked and this did what we needed it to for the purposes of our game jam. Especially in a jam that short, there's always going to be some amount of "spit and duct tape" code holding it all together.

                        Oh, and in case you were wondering. Birds eating seeds, flying around, and expelling them is a major part of how trees get fertilized and spread around in our world. Miranda, our character artist, was also our resident bird expert. 
                        `
                    }
                ]
            },
            {
                title: "Credits",
                contents: [{
                    type: "text",
                    content: `Anton Pleshakov - Programmer,

                        Miranda Jacoby - Character Artist,

                        Jingyu Sui - Environment Art, Sound Engineer

                        Oliver Hong - Programmer

                        Davis Allen - Programmer

                        Peter Hechler - Programmer
                    `
                }]
            }
        ]
    }
]

export default gameTileData;