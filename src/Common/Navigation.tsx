import {NavLink} from "react-router-dom";
import "./Navigation.css"

export function Navigation() {
    const classNameGenerator = ({isActive }: {isActive : boolean}) => isActive ? "navigation-button navigation-button-active" : "navigation-button"
    return <div className="navigation-outer">
        <NavLink className={classNameGenerator} to="/"> Home </NavLink>
        <NavLink className={classNameGenerator} to="/players"> Players </NavLink>
        <NavLink className={classNameGenerator} to="/epidemy"> Epidemy </NavLink>
        <NavLink className={classNameGenerator} to="/phrases"> Phrases </NavLink>
    </div>
}