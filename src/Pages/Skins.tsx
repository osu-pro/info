import {Skin, skins} from "../Data/skins";
import './Skins.css'
import {Line} from "../Common/Miscellaneous";

function SkinEntry({item} : {item : Skin}) {
    return <div className="skin-entry">
        <img className="skin-image" src={item.images[0]}  alt=""/>
        <div className="skin-data">
            <div style={{display: "flex", flexDirection: "row"}}>
                <span className="bad-habit"> {item.name} </span>
                <a className="skin-download" href={item.downloadLink}> СКАЧАТЬ (Google drive) </a>
            </div>
            <Line/>
            <span className="bad-habit-reason"> {item.description} </span>

        </div>
    </div>
}

function SkinsView() {
    return <div className="comment-section">
        {skins.map((e, i) => <SkinEntry key={i} item={e}/>)}
    </div>
}

export function Skins() {
    return <>
        <h1> Крутые скины </h1>
        <span> Тут крутые скины </span>
        <Line/>
        <SkinsView/>
    </>
}