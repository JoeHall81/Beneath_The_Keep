export const GAMEDATA = [
    {
        id: 0,
        area: 0,
        title: "The Courtyard",
        story: [
            "As you approach the provisions shop, you are greeted by a gathering of town guards. Two guards stand at attention, blocking the entrance to the shop door with a pair of crossed spears. The morning sun glints off their shiny helmets.\nSeveral other guards, adorned in chain mail and carrying halberds, mill about, most of them looking bored.\n\nAnother guard, wearing plate armor, appears to be in charge, and is questioning a portly man in priestly garb.",
            "You'll need to speak with the corporal of the watch",
            "Yes, I was told you were coming. We haven't been able to get in yet cause the door is locked. I sent a guard to fetch a master key from the garrison.\n\nMy men have been told of your involvement and will make sure you are not interrupted"
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
                progression: 2
            }
        ]
    },
    {
        id: 1,
        area: 1,
        title: "The Shop",
        story: [
            "The door to the shop opens to reveal a mess. Flanking the entrance are a pair of windows, one of which is smashed. Wooden shelf units are tumbled to the floor, some even splintered beyond repair. Slashed packs, tangled rope, and mundane supplies are strewn about the floor in a chaotic morass. The shop is about 30 feet wide and 20 feet deep, with dark paneled walls. To the left, a wooden counter runs the length of the room. Behind the counter is a closed wooden door.",
            "You wait for what feels like half an hour. A guard returns with the key and unlocks the door. The door to the shop opens to reveal a mess. Flanking the entrance are a pair of windows, one of which is smashed. Wooden shelf units are tumbled to the floor, some even splintered beyond repair. Slashed packs, tangled rope, and mundane supplies are strewn about the floor in a chaotic morass. The shop is about 30 feet wide and 20 feet deep, with dark paneled walls. To the left, a wooden counter runs the length of the room. Behind the counter is a closed wooden door.",
            "The door (although closed) reveals it has been forced open from the other side to gain access to the shop.",
            "Examination of the broken window reveals that the glass shards are mostly outside the shop, indicating it was smashed from the inside."
        ],
        actions: [
            {
                id: 0,
                type: "Examine the shop interior",
                response: 0,
                progression: 3
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
        title: "Shop Front",
        story: [
            "The building is constructed of stout timbers with a peaked slate roof, A single locked wooden Dutch-style door provides access to the shop. The building has but one story with a 10-foot-high ceiling. There are two small windows, one of them smashed open.",
            "Examination of the broken window reveals that the glass shards are mostly outside the shop, indicating it was smashed from the inside."
        ],
        actions: [
            {
                id: 0,
                type: "Examine the window",
                response: 1,
                progression: 2
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
        id: 3,
        area: 3,
        title: "The Shop Interior",
        story: [
            "This interior room was the provisioner's shop. The provisioner sold mostly mundane items and typical adventuring gear. Such items include cookery, lanterns, rope, packs, blankets, and simple tools (hammers and saws). Three spears and five long knives are the only weapons present.",
            "The shop has been ransacked to make it look like someone broke in, and that person was looking for something. But there are several clues to raise suspicion that the ransacking was staged. Examination of the broken window reveals that the glass shards are mostly outside the shop, indicating it was smashed from the inside. Under the counter is a battered metal lockbox, still sealed. A closer look arround the shop reveals valuable items still present. The door behind the counter (although closed) reveals it has been forced open from the other side to gain access to the shop.",
            "The shop has been ransacked to make it look like someone broke in, and that person was looking for something. But there are several clues to raise suspicion that the ransacking was staged.\n\nExamination of the broken window reveals that the glass shards are mostly outside the shop, indicating it was smashed from the inside.\nUnder the counter is a battered metal lockbox with a rudementary lock (that was no match for your skill) which contained 13gp that now line your pocket.\n\nThe door behind the counter (although closed) reveals it has been forced open from the other side to gain access to the shop.\n\nA closer look around the shop reveals valuable items including:\nAn electrum-handled magnifying glass (worth 120gp)\nA teak box holding a variety of inks with fancy quills (worth 65gp)\nA crystal vial of fancy perfume (worth 25gp)\nAnd an obsidian orb (worth 20gp).\n\nThankfully, you are able to swiftly and silenty slip these items into your satchel before anyone else notices them."
        ],
        actions: [
            {
                id: 0,
                type: "Confirm nothing was \"stolen\"",
                response: 2,
                progression: 3
            },
            {
                id: 1,
                type: "Search for clues",
                response: 1,
                progression: 3
            },
            {
                id: 2,
                type: "Open door behind counter",
                response: 0,
                progression: 3
            }
        ]
    }
];