import React, {useLayoutEffect, useState} from "react";
import {users} from "../Data/users"
import {Phrase, phrases} from "../Data/phrases"
import './Phrases.css'
import {Nickname, nicknames} from "../Data/nicknames";
import {Line} from "../Common/Miscellaneous";

export function DiscordUser({id} : {id : string}) {
    const user = users.find((user : any) => user.id === id);
    if (!user) return <span style={{color: "#cccccc"}}> <div className="user">@{id}</div> </span>
    return <div className="user">
        <img className="user-pfp" src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`} alt=""/>
        <span> {user["global_name"]} </span>
    </div>
}

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function PhraseRow({item} : {item: Phrase}) {
    const size = useWindowSize();

    if (size[0] > 800) {
        return <tr>
            <th><DiscordUser id={item.id}/></th>
            <th> {item.data} </th>
        </tr>
    }

    return <tr>
        <Line/>
        <DiscordUser id={item.id}/>
        {item.data}
    </tr>
}


function PhraseTable() {
    return <table>
        {phrases.map((e, i) => <PhraseRow key={i} item={e}/>)}
    </table>
}

function DialogueGenerator() {
    const [dialogue, setDialogue] = useState([] as Phrase[])
    const createDialogue = () => {
        const count = Math.floor(3 + Math.random() * 5);
        let constructed = []
        for (let _ = 0; _ < count; _ ++) {
            const index = Math.floor(Math.random() * phrases.length);
            constructed.push(phrases[index])
        }
        setDialogue(constructed)
    }
    const dialogueRendered = dialogue.map((e: Phrase, i) => {
        return <>
            <span> - {e.data} </span>
            <br/>
            <span style={{color: "#808080"}}><i> - Молчание {(Math.floor(Math.random() * 50 + 10) * 10).toFixed()} секунд... </i></span>
            <br/>
        </>
    });
    return <>
        {dialogueRendered}
        <button onClick={createDialogue}> Создать диалог </button>
    </>
}


function NicknameRow({item} : {item: Nickname}) {
    const size = useWindowSize();

    if (size[0] > 800) {
        return <tr>
            <th><DiscordUser id={item.id}/></th>
            <th> {item.nickname} </th>
        </tr>
    }

    return <tr>
        <Line/>
        <DiscordUser id={item.id}/>
        {item.nickname}
    </tr>
}

function NicknameTable() {
    return <table>
        {nicknames.map((e, i) => <NicknameRow key={i} item={e}/>)}
    </table>
}


export function Phrases() {
    return <>
        <h1> Великие цитаты осеров </h1>
        <span> Здесь записаны "великие цитаты" осеров, которые как-то рассмешили автора или отражают забавное положение дел. Также на этой страничке есть генератор стандартного диалога осеров </span>
        <h1> Генератор диалога </h1>
        <DialogueGenerator/>
        <h1> Фразы </h1>
        <PhraseTable/>
        <br/>
        <h1> Ники </h1>
        <NicknameTable/>
    </>
}