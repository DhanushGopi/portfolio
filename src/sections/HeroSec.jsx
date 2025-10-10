import ThunderEmoji from "../assets/ThunderEmoji";
import SuperBtn from "../components/buttons/SuperBtn";

export default function HeroSec() {
   
     const handleExternalLink = () => {
        window.open("https://www.linkedin.com/in/dhanushgopi/", "_blank", "noopener,noreferrer");
    };
    return(
        <div className="herosec">
             {/* <p className="herosec-subheader">Design or Development? No Worries, I do both!</p> */}
            <p className="herosec-header herosec-header1">“ WILD ENOUGH TO <span className="hightext">IMAGINE </span>AND</p>
            <p className="herosec-header herosec-header2"><span className="hightext1">SKILLED</span> ENOUGH TO BUILD ”</p>
            <p className="herosec-subheader">Design or Development? No Worries, I do both!</p>
            <SuperBtn className="super-btn__herosec" funcact={handleExternalLink} btntext="Let's Connect"/>
        </div>
    )
}
