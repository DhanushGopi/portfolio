import Logo from "../components/Logo";
import Navbarbtns from "../components/Navbarbtns";
import { useNavigate } from "react-router-dom";
import NavCtaBtn from "../components/buttons/NavCtaBtn";

export default function Navbar(props) {
    
    const navigate = useNavigate();

    const gotoDanzuverse= () => {
     navigate('/danzuverse');   
    }

    const gotoHome = () => {
        navigate('/');   
    }

    const handleExternalLink = () => {
        window.open("https://www.linkedin.com/in/dhanushgopi/", "_blank", "noopener,noreferrer");
    };


    return (
        <div className="navbar">
            <Logo/>
            <Navbarbtns funcact1={gotoHome} funcact2={gotoDanzuverse} 
                        btntext1="Home" btntext2="Danzuverse" 
                        btnstyle1={props.navbarbtn1} btnstyle2={props.navbarbtn2}/>
            <NavCtaBtn funcact={handleExternalLink} btntext="Hi, I'm Dhanush!"/>
        </div>
    )
}