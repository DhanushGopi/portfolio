export default function SuperBtn(props){
    return(
        <button onClick={props.funcact} className="super-btn super-btn__herosec">{props.btntext}</button>
    )
}