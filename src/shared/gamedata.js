export const GAMEDATA = [
    {
        id: 0,
        area: 0,
        title: "The Courtyard",
        story: [
            "As you approach the provisions shop, you are greeted by a gathering of town guards. Two guards stand at attention, blocking the entrance to the shop door with a pair of crossed spears. The morning sun glints off their shiny helmets.\nSeveral other guards, adorned in chain mail and carrying halberds, mill about, most of them looking bored.\n\nAnother guard, wearing plate armor, appears to be in charge, and is questioning a portly man in priestly garb.",
            "You'll need to speak with the corporal of the watch",
            "Yes, I was told you were coming. We haven't been able to get in yet cause the door is locked. I sent a guard to fetch a master key from the garrison.\n\nMy men have been told of your involvement and will make sure you are not interrupted."
        ],
        actions: [
            {
                id: 0,
                type: "Talk to guard",
                response: 1,
                progression: 0
            },
            {
                id: 1,
                type: "Talk to corporal",
                response: 2,
                progression: 0
            },
            {
                id: 2,
                type: "Wait for the Key",
                response: 1,
                progression: 1
            },
            {
                id: 3,
                type: "Examine the shop front",
                response: 0,
                progression: 9
            }
        ]
    },
    {
        id: 1,
        area: 1,
        title: "The Shop",
        story: [
            "The door to the shop opens to reveal a mess.\n\nFlanking the entrance are a pair of windows, one of which is smashed. Wooden shelf units are tumbled to the floor, some even splintered beyond repair. Slashed packs, tangled rope, and mundane supplies are strewn about the floor in a chaotic morass.\n\nThe shop is about 30 feet wide and 20 feet deep, with dark paneled walls. To the left, a wooden counter runs the length of the room.\n\nBehind the counter is a closed wooden door.",
            "You wait for what feels like half an hour.\nA guard returns with the key and unlocks the door. The door to the shop opens to reveal a mess.\n\nFlanking the entrance are a pair of windows, one of which is smashed. Wooden shelf units are tumbled to the floor, some even splintered beyond repair. Slashed packs, tangled rope, and mundane supplies are strewn about the floor in a chaotic morass.\n\nThe shop is about 30 feet wide and 20 feet deep, with dark paneled walls. To the left, a wooden counter runs the length of the room.\n\nBehind the counter is a closed wooden door.",
            "The door (although closed) reveals it has been forced open from the other side to gain access to the shop.",
            "Examination of the broken window reveals that the glass shards are mostly outside the shop, indicating it was smashed from the inside."
        ],
        actions: [
            {
                id: 0,
                type: "Examine the shop interior",
                response: 0,
                progression: 10
            },
            {
                id: 1,
                type: "Examine broken window",
                response: 3,
                progression: 1
            },
            {
                id: 2,
                type: "Examine door behind counter",
                response: 2,
                progression: 1
            },
            {
                id: 3,
                type: "Open door behind counter",
                response: 0,
                progression: 2
            }
        ]
    },
    {
        id: 2,
        area: 2,
        title: "Garan's Apartment",
        story: [
            "The door opens to reveal a cozy studio apartment, about 20 feet wide by 10 feet deep. The floor is covered with a plush but worn oval-shaped carpet.\n\nOpposite the door, behind a battered round wooden table and chair, is a soot-stained hearth. To it's left, a simple bed with disheveled sheets is pushed into the corner.\n\nTo the left of the door is a writing desk although it lacks a chair.\nOn the desk rests a square box-like object concealed under a stained cloth sheet."
        ],
        actions: [
            {
                id: 0,
                type: "Uncover box-like object",
                response: 0,
                progression: 12
            },
            {
                id: 1,
                type: "Search the room",
                response: 0,
                progression: 11
            },
            {
                id: 2,
                type: "Line your pockets",
                response: 1,
                progression: 11
            }
        ]
    },
    {
        id: 3,
        area: 3,
        title: "Stairway",
        story: [
            "Upon closer inspection you realise the smear of blood is in the seam of a secret door. Finding the catch near the floor, you push inward.\n\nThe secret door opens to reveal a stone stairway desending into the inky darkness.",
            "Caught off guard and in a small space it takes everything you can to avoid getting bit. You're successfully able to defeat the Cockatrice just before loosing your footing and falling to the floor with your back against the wall.\n\nThat's when you hear a click as the wall behind you opens to reveal a stone stairway desending into the inky darkness.",
            "While recently disturbed, this stairway looks to have been unused. The blood smear looks like it was made by Garan as he fled up the stairs, possibly clutching a dagger wound."
        ],
        actions: [
            {
                id: 0,
                type: "Go down stairs - cautiously",
                response: 0,
                progression: 4
            },
            {
                id: 1,
                type: "Go down stairs", /* ToDo */
                response: 0,
                progression: 4
            },
            {
                id: 2,
                type: "Examin stairway",
                response: 2,
                progression: 3
            }
        ]
    },
    {
        id: 4,
        area: 4,
        title: "Cellar",
        story: [
            "You slowly decend the stairway, taking caution with each step.\nThe seventh step down is made of wood, and when to much weight is placed on it, it shifts to a steep incline. Which you're able to avoid.\n\nAt the bottom step you see a clay urn that looks to have been weakened. You peek inside to see a Green Slime.\n\nHaving cleared the traps in the stairway, you start to notice the air is cooler and damp, with slight staleness.\nYou look around at the shadowy chamber with its smooth walls and a smooth ceiling about 8 feet high.\n\nThe chamber expands to 15 feet wide and stretches for at least 30 feet or so. Through the gloom, there appears to be a stone door on the opposite side of the chamber.\nSeveral empty torch sconces adorn the walls. The east and west walls each sport a recessed niche about 10 feet wide, piled high with crates and casks.\n\nYou catch a glimpse of movement from between the stacked crates, and soon several sets of beady, glowing eyes peer from around the crates."
        ],
        actions: []
    },
    {
        id: 5,
        area: 5,
        title: "Abandoned Gambling Parlor",
        story: [],
        actions: []
    },
    {
        id: 6,
        area: 6,
        title: "Secret Passage",
        story: [],
        actions: []
    },
    {
        id: 7,
        area: 7,
        title: "Temple",
        story: [],
        actions: []
    },
    {
        id: 8,
        area: 8,
        title: "Natural Caverns",
        story: [],
        actions: []
    },
    {
        id: 9,
        area: 9,
        title: "Shop Front",
        story: [
            "The building is constructed of stout timbers with a peaked slate roof, A single locked wooden Dutch-style door provides access to the shop.\nThe building has but one story with a 10-foot-high ceiling.\nThere are two small windows, one of them smashed open.",
            "Examination of the broken window reveals that the glass shards are mostly outside the shop, indicating it was smashed from the inside."
        ],
        actions: [
            {
                id: 0,
                type: "Examine the window",
                response: 1,
                progression: 9
            },
            {
                id: 1,
                type: "Wait for the key",
                response: 1,
                progression: 1
            },
            {
                id: 2,
                type: "Force door open",
                response: 0,
                progression: 1
            },
            {
                id: 3,
                type: "Pick the lock",
                response: 0,
                progression: 1
            },
            {
                id: 4,
                type: "Break the door down",
                response: 0,
                progression: 1
            }
        ]
    },
    {
        id: 10,
        area: 10,
        title: "The Shop Interior",
        story: [
            "This interior room was the provisioner's shop. The provisioner sold mostly mundane items and typical adventuring gear. Such items include cookery, lanterns, rope, packs, blankets, and simple tools (hammers and saws). Three spears and five long knives are the only weapons present.",
            "The shop has been ransacked to make it look like someone broke in, and that person was looking for something. But there are several clues to raise suspicion that the ransacking was staged.\n\nExamination of the broken window reveals that the glass shards are mostly outside the shop, indicating it was smashed from the inside.\nUnder the counter is a battered metal lockbox, still sealed. A closer look arround the shop reveals valuable items still present.\n\nThe door behind the counter (although closed) reveals it has been forced open from the other side to gain access to the shop.",
            "The shop has been ransacked to make it look like someone broke in, and that person was looking for something. But there are several clues to raise suspicion that the ransacking was staged.\n\nExamination of the broken window reveals that the glass shards are mostly outside the shop, indicating it was smashed from the inside.\nUnder the counter is a battered metal lockbox with a rudementary lock (that was no match for your skill) which contained 13gp that now line your pocket.\n\nThe door behind the counter (although closed) reveals it has been forced open from the other side to gain access to the shop.\n\nA closer look around the shop reveals valuable items including:\nAn electrum-handled magnifying glass (worth 120gp)\nA teak box holding a variety of inks with fancy quills (worth 65gp)\nA crystal vial of fancy perfume (worth 25gp)\nAnd an obsidian orb (worth 20gp).\n\nThankfully, you are able to swiftly and silenty slip these items into your satchel before anyone else notices them."
        ],
        actions: [
            {
                id: 0,
                type: "Confirm nothing was \"stolen\"",
                response: 2,
                progression: 10
            },
            {
                id: 1,
                type: "Search for clues",
                response: 1,
                progression: 10
            },
            {
                id: 2,
                type: "Open door behind counter",
                response: 0,
                progression: 2
            }
        ]
    },
    {
        id: 11,
        area: 11,
        title: "Garan's Apartment",
        story: [
            "The room served as the simple living quarters for Garan. The bed, desk, table, and chair are all nondescript. The carpet is in dire need of cleaning. Next to the hearth is a small pile of firewood, and several well-used pots and pans.\n\nUnder the carpet is a loose flagstone that conceals a secret hollow, which appears that Garan was unaware of and must have been constructed by the previous owner.\nInside is a locked metal box, but a matching key is nowhere to be found.\n\nA small wooden cage, about 3 feet on each side, is hidden under the cloth on the desk. The cage holds a Wing-Clipped Cockatrice.\nAbout the size of a housecat, this twisted creature sports the traits of a scaly lizard complete with a whip-like tail, a bat, and fowl. It appears to once have had wings, but instead leathery nubs are present. Its sinewy neck has odd patches of black and gray feathers.\nAccording to Garan's books, Garan recently acquired it from a merchant that needed hard coin to settle a gambling debt.\n\nYou notice a smear of blood on the wall which looks out of place.",
            "The room served as the simple living quarters for Garan. The bed, desk, table, and chair are all nondescript.\nNext to the hearth is a small pile of firewood, and several well-used pots and pans.\n\nStuffed in the mattress is a leather pouch with a gold thread drawstring (worth 22gp). Inside the puch is 11gp and an uncut emerald (worth 100gp).\n\nThe carpet is in dire need of cleaning but could fetch 15gp. (maybe I'll get that on my way out depending on what other goodies I can find.)\nUnder the carpet is a loose flagstone that conceals a secret hollow, which appears that Garan was unaware of and must have been constructed by the previous owner. Inside is a locked metal box, (childs play) containing a pouch holding:\nSeven Garnets (worth 50gp each)\nA dagger in an electrum accented black leather scabbard (worth 75gp)\nA scrimshaw scroll tube with a whale motif (worth 135gp)\n\nA small wooden cage, about 3 feet on each side, is hidden under the cloth on the desk. The cage holds a Wing-Clipped Cockatrice.\nAbout the size of a housecat, this twisted creature sports the traits of a scaly lizard complete with a whip-like tail, a bat, and fowl. It appears to once have had wings, but instead leathery nubs are present. Its sinewy neck has odd patches of black and gray feathers.\nAccording to Garan's books, Garan recently acquired it from a merchant that needed hard coin to settle a gambling debt.\n\nYou notice a smear of blood on the wall which looks out of place."
        ],
        actions: [
            {
                id: 0,
                type: "Uncover the Wing-Clipped Cockatrice",
                response: 0,
                progression: 12
            },
            {
                id: 1,
                type: "Look closer at the smear of blood",
                response: 0,
                progression: 3
            }
        ]
    },
    {
        id: 12,
        area: 12,
        title: "The Wing-Clipped Cockatrice",
        story: [
            "Bursting out of the cage, attacking with surprise! This mistreated beast flops around the chamber, attacking at random.\n\nThis wing-clipped cockatrice is fighting to the death.\n\nIt lundges at you trying to bite, you know that a single bite would cause you to be petrified for about 24 hours."
        ],
        actions: [
            {
                id: 0,
                type: "Defend yourself",
                response: 1,
                progression: 3
            }
        ]
    }
];