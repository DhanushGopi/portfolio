import BlogBtn from "../buttons/BlogBtn";

export default function Blogcard(props){
    
    const handleExternalLink = () => {
        window.open(props.link, "_blank", "noopener,noreferrer");
    };

   

    return(
        <div className="blogcard-cont">
            <div className="blogcard-metainfo">
                {props.chip}
                <p className="blogcard-date">{props.date}</p>
            </div>
            <img className="blogcard-thumbnail" src={props.img} alt="" srcset="" />
            <p className="blogcard-title">{props.title}</p>
            <div className="blogcard-stacks">
                {props.stack && props.stack.length > 0 &&
                    props.stack.map((stacklogo, key) => (
                        <span key={key}>{stacklogo}</span>
                    ))
                }
            </div>
            <BlogBtn funcact={handleExternalLink} btntext="View"/>
        </div>
    )
}