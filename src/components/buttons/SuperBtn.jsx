export default function SuperBtn(props){
    return(
        <button onClick={props.funcact} className="super-btn">{props.btntext}</button>
    )
}