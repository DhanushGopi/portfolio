export default function Filterbtn(props){
    return(
        <button onClick={props.click}
                className={`filter-btn ${props.isActive ? 'active' : ''}`}>
                    {props.btntext}
                </button>
    )
}