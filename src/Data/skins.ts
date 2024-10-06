export type Skin = {
    images: string[],
    name: string,
    description: string
    downloadLink: string
}

export const skins : Skin[] = [
    {
        images: [
            "https://github.com/arthur100500/osu-nerd-skin/assets/57834711/140e120e-ca1f-438e-9f86-a203ebe925f6",
            "https://github.com/arthur100500/osu-nerd-skin/assets/57834711/c2880768-b709-4337-943f-2fc4a607436d"
        ],
        name: "SKIN X",
        description: "Кажется, что этот скин какой-то мемный, но на самом деле все рассчитано математически: желтые кружки наиболее заметные, а лица на кружках заставляют человека инстинктивно их распознавать. Интерфейс пронизан вайбом OCaml для настоящих нердов, а так же в скине отличные хитсаунды. Ахуенный скин, который я взял у игрока TheCatPetra. Insta-fade, помогает для быстрых карт и ДТ, в общем, попробуйте сами и кайфаните!",
        downloadLink: "https://drive.google.com/file/d/1Xrd24AH_GxW1g0pBQqS1L4fB8127ebT0/view?usp=sharing"
    },
    {
        images: [
            "https://github.com/osu-pro/info/blob/main/public/moonshine.jpg?raw=true"
        ],
        name: "Moonshine",
        description: "Идеально подходит для стримов и джампов, отличный скин. Выглядит очень красиво, все-таку скин является победителем Skin of the Year 2022, а так же играется очень приятно. Уверен, его стоит попробовать всем, кто играет стримы, джампы или любые другие карты.",
        downloadLink: "https://drive.google.com/file/d/1uiDdsX2KWxH-aQhNSr3e_S5n1P6Ai0Km/view?usp=sharing"
    },
    {
        images: [
            "https://github.com/osu-pro/info/blob/main/public/spazza.jpg?raw=true"
        ],
        name: "Spazza 17 Skin",
        description: "Отличный Insta-Fade скин, великолепно залетает под DT и HR. Кружки исчезают мгновенно, что делает меньше отвлекающих эффектов для быстрых карт. Автор предпочитает именно этот скин в серьезной игре, на турнире с ним было выйграно большое количество матчей. От всего сердца рекомендую попробовать и удивиться!",
        downloadLink: "https://drive.google.com/file/d/1j6_5AQSEfqDMj-9N5VYI9u6JPX-0yzSD/view?usp=sharing"
    }
]