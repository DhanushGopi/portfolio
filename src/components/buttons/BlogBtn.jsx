export default function BlogBtn(props){
    return(
        <button onClick={props.funcact} className="blog-btn">{props.btntext}</button>
    )
}