import {NavLink} from "react-router-dom";
import "./Navigation.css"

export function Navigation() {
    const classNameGenerator = ({isActive}: {isActive : boolean}) => isActive ? "navigation-button navigation-button-active" : "navigation-button"
    return <div className="navigation-outer">
        <NavLink className={classNameGenerator} to="/info/"> Home </NavLink>
        <NavLink className={classNameGenerator} to="/info/players"> Players </NavLink>
        <NavLink className={classNameGenerator} to="/info/epidemy"> Epidemy </NavLink>
        <NavLink className={classNameGenerator} to="/info/phrases"> Phrases </NavLink>
        <NavLink className={classNameGenerator} to="/info/skins"> Skins </NavLink>
    </div>
}