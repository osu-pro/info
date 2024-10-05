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
    }
]