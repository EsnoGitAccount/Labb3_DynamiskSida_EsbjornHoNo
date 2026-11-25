import { NavLink } from "react-router"

export default function Header(){

    return(
        <>
            <header>
                <ul className="Header-Container">
                    <li>
                        <NavLink to="/">Start</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">Om Mig</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Curriculumvitae">CV</NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}