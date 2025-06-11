//genre button creation
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Fantazy",
        "Mystery",
        "Romance",
        "Adventure",
        "horror",
        "Science Fiction",
        "History",
        "Diary",
        "Thriller",
    ];
    document.getElementById("genreBtn").onclick = function() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        document.getElementById("genreText").textContent = texts[randomIndex];
        document.getElementById("genreText").style.display = "block";
    };
});
//main idea button creation
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "war: maybe between gods and affected humans, or between humans, or humans and a god that neglected them",
        "Stoping a war, maybe travelling with an important letter or something to avoid bloodshed",
        "Secret killing mission, assassination, targeted killing",
        "revenge",
        "retriving or searching for a lost item",
        "A trip to fix a past mistake and avoid awful futur",
        "A trip to the futur to fix it or uncover it",
        "Alien that seeks a new home and life",
        "breaking a spell or a curse",
        "lost in unknown lands",
        "lost memories and trying to remember who they are or what they should do",
        "searching for a missing person or someone they lost",
        "revolution",
        "normal schoolife",
        "twisted schoolife (the students are actually trapped inside a place without leaving)",
        "twisted schoolife (being taught for futur evil plans)",
        "twisted schoolife (raised to be sold in markets)",
        "a mysterious warning from someone unknown or from a spirit or from the universe itself",
        "a crime",
        "ghost hunters",
        "last hope for humanity or this world",
        "failed suicide attempt, maybe they are trying to find new purpuse or someone who cares",
        "A fallen hero trying to regain their place",
        "someone stole their lives and they wants it back",
        "they got trapped somewhere and trying to escape",
    ];
    document.getElementById("ideaBtn").onclick = function() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        document.getElementById("ideaText").textContent = texts[randomIndex];
        document.getElementById("ideaText").style.display = "block";
    };
});
//plot twist button creation
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "it was all a dream, or hallucination from the sick protagonist",
        "the real hero in fact died in earlier battle and someone has taken their place",
        "the seeked thing doesn't exsist and it was all along a failing trip",
        "betrayel, by the hero, by the team, or by their guide",
        "the main villain is but a dice, another piece for a scarier villain",
        "finishes the misson but loses the person or the reason for it",
        "memory loss, the story never ends cause the hero doesn't remember who he is",
        "helps the villain or recives help from them",
        "forced to give up by stress or mental health or to save someone",
        "death...they never achieve their potential",
        "their trusted friend or lover was faking all along",
        "serving the wong side, the hero finds himself on the wrong side, being acrually the villain",
        "The mission is done and they brought peace but lost everything in the progress",
        "The sacrifise themselves to bring peace but pay the price hight (their power/ freedom/ fv person)",
        "In the end they are left with two bad choices resulting in lost anyway",
        "Driven by trauma they lose their minds and now they are the new villain",
        "The villain has turned out that way because of them and now they feel guilt",
        "They fix the world but no one now rememmbers them",
        "They understand the hidden secret and now they are protecting it (a loop, never ending circle where other heros come",
    ];
    document.getElementById("twistBtn").onclick = function() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        document.getElementById("twistText").textContent = texts[randomIndex];
        document.getElementById("twistText").style.display = "block";
    };
});
//Settings button creation
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Floating city: a metropolis suspended in the sky",
        "Future ",
        "Past",
        "Fantazy: magical and mythical beings shape reality",
        "Portals or anothor dimension",
        "World after disaster: civilisation rebuilds after catastrophe",
        "Underground: a hidden society thrives beneath the surface",
        "Outer space",
        "Ancient civilisaton: a lost empire resurfaces",
        "Haunted place",
        "Closed society: a place sealed from the outside world",
        "Hidden world: a secret realm waiting to be discovered",
        "Cyberpunk: a high_tech dystopian future",
        "Hospital",
        "Dreamworld: reality hsaped by imagination or desires",
        "Wasteland: a barren world of survival",
        "Island",
        "A land ruled by elemntal forces: water, earth, fire, air. long ago the four nations lived...",
        "Forgotten forest, cursed one or magical",
        "Small doll house that people somehow can enter",
        "Inside the TV: a portal",
    ];
    document.getElementById("settingBtn").onclick = function() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        document.getElementById("settingText").textContent = texts[randomIndex];
        document.getElementById("settingText").style.display = "block";
    };
});
//Personality button creation
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Optimist",
        "Pessimist",
        "innocent",
        "evil",
        "crazy",
        "hater",
        "manippulative",
        "killjoy",
        "secretive",
        "chaotic",
        "weirdo",
        "protective",
        "Idealist",
        "Leader",
        "Follower",
        "Loyal",
        "Rebel",
        "Cynic",
        "Charmer",
        "Loner",
        "Hated",
        "Social butterfly",
        "Calm and collected",
        "Energetic",
        "Extrovert",
        "Introvert",
        "Hotheaded",
        "Unpredictable",
        "Lazy",
        "Naive",
        "Mysterious",
        "Caring",
        "Suportive",
        "Hardworking",
        "Strategist",
        "Pervert",
        "Childish",
        "Rude",
        "Talktive",
        "Kind",
        "Creative",
        "Confident",
        "Open-minded",
        "Funny",
        "Empathetic",
        "Organised",
        "Mature",
        "Friendly",
        "Talented",
        "Cooperative",
        "Patient",
        "Smart",
        "Dumb",
        "Emotionl",
    ];
    document.getElementById("personalityBtn").onclick = function() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        document.getElementById("personalityText").textContent = texts[randomIndex];
        document.getElementById("personalityText").style.display = "block";
    };
});
//Flaws button creation
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Secretly a sadistic person",
        "Self-centred",
        "Zoomes out too much",
        "Apologieges too much",
        "Lazy and always skips shores",
        "Forgets a lot",
        "Laughts in serious times",
        "Easily distracted",
        "Overthinks everythink",
        "Holds grudges",
        "Struggles to trust others",
        "Fear of failure",
        "Tends to be overly critical",
        "Implusive decision-making",
        "Insecure",
        "Avoids confrontation",
        "Too self-sacrificing",
        "Often late",
        "Quick to anger",
        "Dependent on others",
        "Fear of rejection",
        "Jealous",
        "Moody",
        "Easily frustrated",
        "Procrastinates",
        "Pessimistic outlook",
        "Cynical",
        "bad with children",
        "Breaks things easily",
        "bad luck",
        "Animals repellent",
        "gets into bad situations",
    ];
    document.getElementById("flawsBtn").onclick = function() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        document.getElementById("flawsText").textContent = texts[randomIndex];
        document.getElementById("flawsText").style.display = "block";
    };
});
//Perks button creation
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Apologizes when wrong",
        "Chooses others over themselves",
        "Great listener",
        "Strong problem solver",
        "Always on time",
        "Loyal to freinds and family",
        "Creative thinker",
        "High emotional intelligence",
        "Brave and couragous",
        "Compassionate",
        "Very organized",
        "Hardworking and dedicated",
        "Adaptable to new situations",
        "Inspires others",
        "Calm under pressure",
        "Independent and self-reliant",
        "Quick learner",
        "Can talk their way out of any situation (even if they don't know what they're talking about)",
        "Has an uncanny ability to find the best deals",
        "Can be friends with literally anyone",
        "Expert in finding lost things",
        "Good with animals",
    ];

    document.getElementById("perksBtn").onclick = function() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        document.getElementById("perksText").textContent = texts[randomIndex];
        document.getElementById("perksText").style.display = "block";
    };
});
//Species button creation
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "God",
        "Mermaid",
        "Vampire",
        "Demon",
        "Angel",
        "Hybird",
        "Cyborg",
        "Celestial being",
        "Shadowborn",
        "Half weapon half person",
        "Phoenixborn",
        "Spirit walker",
        "Skinwalker",
        "Guardian",
        "Reaper",
        "Results of an expriment",
        "Glitch",
        "Doll",
        "Starborn",
        "Dreamborn",
        "Human",
        "Elf",
        "Ghoul",
        "Zombie",
        "Oger",
        "Beast",
        "Witch",
        "Ghost",
        "Alien",
        "Fairy",
        "Harpy",
        "Goblin",
        "Siren",
        "Robot",
        "Slime",
        "Dwarf",
        "Dragon",
    ];
    document.getElementById("speciesBtn").onclick = function() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        document.getElementById("speciesText").textContent = texts[randomIndex];
        document.getElementById("speciesText").style.display = "block";
    };
});
//Relationships button creation
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Enemies to lovers",
        "Enemies forced to work together",
        "Stalker",
        "Unhealthy obssesion",
        "Forbidden love",
        "Childhood friends",
        "Lovers on different sides",
        "Lovers to enemies",
        "Secretly using the other party",
        "Secretly using the other party BUT falls in love with them",
        "Lover X Dosen't know what love is",
        "Best friends",
        "Platonic",
        "Love triangle",
        "Secret devoted fan of another character",
        "Love at first-sight",
        "Slow burn",
        "Opposites",
        "Roomates",
        "Fake dating",
        "Childish X Serious",
        "Nerd X Popular",
        "Villain X Hero",
        "Smart X Dumb",
        "Troublemaker X Trouble solver",
        "Shares one braincell (both are idiots)",
        "Rivals",
        "Teacher (could be mentor) X Student",
        "Guardian X Protected",
        "Same team",
    ];
    document.getElementById("relationshipsBtn").onclick = function() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        document.getElementById("relationshipsText").textContent = texts[randomIndex];
        document.getElementById("relationshipsText").style.display = "block";
    };
});
//Superpowers button creation
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Transforms pain from others BUT needs to store it somewhere else (if the OC is overly kind they keep it to theselves/ if not it's their weapon against others)",
        "Controls feelings",
        "Summons demons",
        "Can steal others quirks or copy them for a bit of time",
        "Blades for hands",
        "Shapeshifter",
        "Devours inner force from others causing them to lose energy or in worst cases their power ",
        "Controls time",
        "Creating illusions",
        "Cloning",
        "Transparent",
        "Future vision",
        "Healing",
        "Knowldge on anything",
        "Flying",
        "Controls plants",
        "Shadowcontrol",
        "Spell",
        "Changes or manupilates forms of objects",
        "Changes or manupilates forms of other beings",
        "Super strenght",
        "Ice",
        "Fire",
        "Water",
        "Wind",
        "Animals",
        "Anytthing they touch it dies",
        "Anytthing they touch it turns to stone",
        "Inumaki is a curse speech user...",
        "Controls blood",
        "Detachable limbs",
        "Phantom vision",
        "Lightning",
        "Opens portals",
        "Controls dreams",
        "Mind reading",
        "Super speed",
        "Weapons creaion",
        "Magical voice that controls and decives others",
        "They can give life to dead creatures",
    ];
    document.getElementById("superpowerBtn").onclick = function() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        document.getElementById("superpowerText").textContent = texts[randomIndex];
        document.getElementById("superpowerText").style.display = "block";
    };
});
//Weapons button creation
document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Sword",
        "Dagger",
        "Axe",
        "Mace",
        "Spear",
        "Halberd",
        "Rapier",
        "Scythe",
        "Katana",
        "Whip",
        "Tonfa",
        "Gauntlets",
        "Claws",
        "Hammer",
        "Flail",
        "Chain whip",
        "Chakram",
        "Trident",
        "Bo staff",
        "Bow",
        "Crossbow",
        "Slings shot",
        "Gun",
        "Throwing knives",
        "Boomerang",
        "Shuriken",
        "Pistol",
        "Machine gun",
        "Rocket launcher",
        "Smoke bomb",
        "Baseball bat",
        "Needles",
        "Doll or a toy (magical being that grows in size and fights)",
        "Robotic suit",
        "Potions",
        "Magical stuff or wand",
        "Magical orb or ball",
        "Strings that control others movements",
        "Gloves that controls actions or deadly touch",
        "Mask that transforms them into beasts",
        "Mask that transforms them back to their original look",
        "Robotic suit",
        "Speed shoes",
        "They always carry spacial amount of drinks that doubles strength",
        "Umbrella",
        "Fan",
        "Robot that protects them",
        "Glasses that allows them to see from afar",
        "Lazer glasses",
        "A necklace that transforms into anyting they want it to be",
        "Chainsaw",
        "Venomous nails once in contact with the skin it's deadly",
        "Lightning stuff",
        "Shield",
    ];
    document.getElementById("weaponsBtn").onclick = function() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        document.getElementById("weaponsText").textContent = texts[randomIndex];
        document.getElementById("weaponsText").style.display = "block";
    };
});