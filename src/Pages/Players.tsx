import {Comment, comments} from "../Data/players";
import {DiscordUser} from "./Phrases";

import './Players.css'
import {Line} from "../Common/Miscellaneous";
import {users} from "../Data/users";

function CommentEntry({item} : {item: Comment}) {
    return <div className="comment-outer">
        <DiscordUser id={item.user}/>
        <Line/>
        <span className="comment-span"> {item.comment} </span>
    </div>
}

function CommentSection(){
    return <div className="comment-section">
        {comments.map((e, i) => <CommentEntry key={i} item={e}/>)}
    </div>;
}

function clearNote(text: string) {
    return text.replace(/ *\[[^)]*] */g, "");
}

function NoteEntry({item} : {item: any}) {
    return <div style={{display: "flex", flexDirection: "row", gap: "0.5rem"}}>
        <DiscordUser id={item.id}/>
        -
        <span> {clearNote(item.note)} </span>
    </div>
}

function NoteSection() {
    return <div className="note-section">
        {users.filter(e => clearNote(e.note) !== "").map((e, i) => <NoteEntry key={i} item={e}/>)}
    </div>;
}

export function Players() {
    return <>
        <h1> Игроки </h1>
        <span> Здесь находятся самые интересные личности дискорда из осерского мира, а так же комментарии автора по самым ярким </span>
        <h1> Самые яркие личности </h1>
        <span> Коменты, вписаные вручную! </span>
        <Line/>
        <CommentSection/>
        <h1> Приписки </h1>
        <span> Несортированые приписки пользователя osu_pro. Многие из них требуют контекста, и далеко не все представлены, но тут инфа, на которую опирается автор </span>
        <Line/>
        <NoteSection/>
        <h1> Роли </h1>
        <span> Скоро будут заполнены </span>
        <h1> Остальные </h1>
        <span> Скоро будут заполнены </span>
    </>
}