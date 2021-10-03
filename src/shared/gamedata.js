export const GAMEDATA = [
    {
        id: 0,
        area: 1,
        title: "The Shop",
        story: [
            "As you approach the provisions shop, you are greeted by a gathering of town guards. Two guards stand at attention, blocking the entrance to the shop door with a pair of crossed spears. The morning sun glints off their shiny helmets. Several other guards, adorned in chain mail and carrying halberds, mill about, most of them looking bored. Another guard, wearing plate armor, appears to be in charge, and is questioning a portly man in priestly garb.",
            "You'll need to speak with the corporal of the watch",
            "Yes, I was told you were coming. We haven't been able to get in yet cause the door is locked. I sent a guard to fetch a master key from the garrison. My men have been told of your involvement and will make sure you are not interrupted"
        ],
        actions: [
            {
                id: 0,
                type: "Talk to guard",
                response: 1
            },
            {
                id: 1,
                type: "Talk to corporal",
                response: 2
            }
        ]
    }
];