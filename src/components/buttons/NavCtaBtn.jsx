export default function NavCtaBtn(props){
    return(
        <button onClick={props.funcact} className="navcta-btn">{props.btntext}</button>
    )
}