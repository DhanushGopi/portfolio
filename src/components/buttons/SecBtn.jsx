export default function SecBtn(props){
    return(
        <button onClick={props.funcact} className="sec-btn">{props.btntext}</button>
    )
}