export const GAMEDATA = [
    {
        id: 0,
        area: 0,
        title: "The Courtyard",
        story: [
            "As you approach the provisions shop, you are greeted by a gathering of town guards. Two guards stand at attention, blocking the entrance to the shop door with a pair of crossed spears. The morning sun glints off their shiny helmets. Several other guards, adorned in chain mail and carrying halberds, mill about, most of them looking bored. Another guard, wearing plate armor, appears to be in charge, and is questioning a portly man in priestly garb.",
            "You'll need to speak with the corporal of the watch",
            "Yes, I was told you were coming. We haven't been able to get in yet cause the door is locked. I sent a guard to fetch a master key from the garrison. My men have been told of your involvement and will make sure you are not interrupted"
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
                response: 2,
                progression: 1
            }
        ]
    },
    {
        id: 1,
        area: 1,
        title: "The Shop",
        Story: [
            "The door to the shop opens to reveal a mess. Flanking the entrance are a pair of windows, one of which is smashed. Wooden shelf units are tumbled to the floor, some even splintered beyond repair. Slashed packs, tangled rope, and mundane supplies are strewn about the floor in a chaotic morass. The shop is about 30 feet wide and 20 feet deep, with dark paneled walls. To the left, a wooden counter runs the length of the room. Behind the counter is a closed wooden door.",
            "You wait for what feels like half an hour. A guard returns with the key and unlocks the door. The door to the shop opens to reveal a mess. Flanking the entrance are a pair of windows, one of which is smashed. Wooden shelf units are tumbled to the floor, some even splintered beyond repair. Slashed packs, tangled rope, and mundane supplies are strewn about the floor in a chaotic morass. The shop is about 30 feet wide and 20 feet deep, with dark paneled walls. To the left, a wooden counter runs the length of the room. Behind the counter is a closed wooden door."
        ],
        actions: [
            {
                id: 0,
                type: "TBD",
                response: 1,
                progression: 0
            },
            {
                id: 1,
                type: "TBD",
                response: 2,
                progression: 0
            },
            {
                id: 2,
                type: "TBD",
                response: 2,
                progression: 1
            }
        ]
    }
];