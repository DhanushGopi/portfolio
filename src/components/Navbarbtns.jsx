export default function Navbarbtns(props) {
    return (
        <div className="navbar-btns">
             <button onClick={props.funcact1} className={props.btnstyle1}>{props.btntext1}</button>
             <button onClick={props.funcact2} className={props.btnstyle2}>{props.btntext2}</button>
        </div>
    )
}
