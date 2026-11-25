import { NavLink } from "react-router"

export default function Header(){

    return(
        <>
            <header>
                <ul className="Header-Container">
                    <li>
                        <NavLink to="/Labb3_DynamiskSida_EsbjornHoNo/" end>Start</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Labb3_DynamiskSida_EsbjornHoNo/About">Om Mig</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Labb3_DynamiskSida_EsbjornHoNo/Portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Labb3_DynamiskSida_EsbjornHoNo/Curriculumvitae">CV</NavLink>
                    </li>
                </ul>
            </header>
        </>
    )
}