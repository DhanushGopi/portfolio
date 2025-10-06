import ThunderEmoji from "../assets/ThunderEmoji";
import SuperBtn from "../components/buttons/SuperBtn";

export default function HeroSec() {
   
     const handleExternalLink = () => {
        window.open("https://www.linkedin.com/in/dhanushgopi/", "_blank", "noopener,noreferrer");
    };
    return(
        <div className="herosec">
             {/* <p className="herosec-subheader">Design or Development? No Worries, I do both!</p> */}
            <p className="herosec-header herosec-header1"><i>“ Wild enough to</i> <span className="hightext">Imagine </span><i>and</i></p>
            <p className="herosec-header herosec-header2"><span className="hightext1">Skilled</span> <i>enough to build ”</i></p>
            <p className="herosec-subheader">Design or Development? No Worries, I do both!</p>
            <SuperBtn className="super-btn__herosec" funcact={handleExternalLink} btntext="Let's Connect"/>
        </div>
    )
}
