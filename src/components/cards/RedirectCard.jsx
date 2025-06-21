import CarEmoji from "../../assets/CarEmoji";
import SecBtn from "../buttons/SecBtn";

export default function RedirectCard(){

const goToDanzuStudio = ()=>{
    window.open("https://danzustudio.github.io/portfolio.html", "_blank", "noopener,noreferrer");
}

    return(
        <div className="redirectcard">
            <CarEmoji/>
            <h2 className="redirect-title">Currently site is brewing!</h2>
            <p className="redirect-msg">Please, do check the older version!</p>
            <SecBtn funcact={goToDanzuStudio} btntext="Go to DANZU!"/>
        </div>
    )
}