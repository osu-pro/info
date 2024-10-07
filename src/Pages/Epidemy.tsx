import {DiscordUser} from "./Phrases";
import {Line} from "../Common/Miscellaneous";

type EpidemyEntry = {
    user: string
    from: string | null
}


const epidemy = [
    {user: "464039451925020673", from: null}, // R2Cubika
    {user: "473174801696161822", from: "464039451925020673"}, // Qudopad
    {user: "1247672972693471408", from: "473174801696161822"}, // xeno
    {user: "304327443932774400", from: "1247672972693471408"}, // m0nCl3ar
    {user: "477842658765570071", from: "473174801696161822"}, // Kekc
    {user: "1278868357046861866", from: "464039451925020673"}, // assss222222
    {user: "781634036921008129", from: "464039451925020673"}, // shenok777
    {user: "435106730532143105", from: "464039451925020673"}, // Properixa
    {user: "184637657597345804", from: "464039451925020673"}, // Floccinaucinihilipilification
    {user: "544084572879585300", from: "464039451925020673"}, // haena
    {user: "649258573989412864", from: "464039451925020673"}, // Dobrik
    {user: "698140748813697086", from: "464039451925020673"}, // xMax
    {user: "542386332647948291", from: "464039451925020673"}, // ksyaka
    {user: "1016734098787672134", from: "464039451925020673"}, // Angle_NorFy
    {user: "381106633964650497", from: "464039451925020673"}, // TheCatPetra
    {user: "462372460633915393", from: "464039451925020673"}, // Asico
    {user: "733071177693528174", from: "542386332647948291"}, // Msdd
    {user: "993558260072329417", from: "542386332647948291"}, // yvuobijniokl
    {user: "278168905648701440", from: "542386332647948291"}, // bai bay yesterday
]


function EpidemyDisplay(){
    function EpidemyBlock(props: {user: EpidemyEntry}) {
        const successors = epidemy.filter(e => e.from === props.user.user);
        return <div style={{marginLeft: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}>
            <div style={{display: "flex", flexDirection: "row", gap: "0.5rem"}}>
                <span> | </span>
            <DiscordUser id={`${props.user.user}`}/>
            </div>
            {successors.map((e, i) => <EpidemyBlock key={i} user={e}/>)}
        </div>
    }

    const patient0 = epidemy.find(e => e.from === null);

    if (!patient0) return <span> Не удалось найти пациента ноль. </span>

    return <EpidemyBlock user={patient0}/>
}


export function Epidemy() {
    return <>
        <h1> Эпидемия </h1>
        <p> У меня появилась теория, как начался весь кринж в осу комьюнити, и "Эпидемия" это эксперимент-наблюдение, как и с кем общаются осеры. Все они делятся на зараженных и не зараженных, а у тех, кто заразился, я отслеживаю от кого пошла зараза. </p>
        <p> Осер считается заразившимся при соблюдении двух фактов, в комнате есть демка с осу, и зашел зараженный. При присутствии нескольких зараженных в комнате, берется зараженный с наибольшим приоритетом. </p>
        <p> Пациент 0, <b>R2Cubika</b>, конченый идиот, который по моей теории начал процесс заражения. Сначала он выебывался на человека, а потом человек пошел "отыгрываться" на людях послабее, и так кринж и выебоны разлетелись по всему дискорду. </p>
        <p> Ниже приведен список-дерево, кто от кого заразился. </p>
        <Line/>
        <EpidemyDisplay/>
    </>
}