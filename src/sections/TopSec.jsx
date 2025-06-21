import TopBlogData from "../config/topdata";
import Blogcard from "../components/cards/Blogcard";
import { useState } from "react";
import Filterbtn from "../components/buttons/Filterbtn";



export default function TopSec(){
    const [filterData, setFilterData] = useState("all");

    return(
        <div className="blogsec-cont">
            <div className="filtersec-cont">
                <Filterbtn 
                    click={() => setFilterData("all")} 
                    btntext="All" 
                    isActive={filterData === "all"} 
                />
                <Filterbtn 
                    click={() => setFilterData("dev")} 
                    btntext="Development" 
                    isActive={filterData === "dev"} 
                />
                <Filterbtn 
                    click={() => setFilterData("ux")} 
                    btntext="UX" 
                    isActive={filterData === "ux"} 
                />
                <Filterbtn 
                    click={() => setFilterData("branddesign")} 
                    btntext="Brand Design" 
                    isActive={filterData === "branddesign"} 
                />
                <Filterbtn 
                    click={() => setFilterData("illustration")} 
                    btntext="Illustration" 
                    isActive={filterData === "illustration"} 
                />
                <Filterbtn 
                    click={() => setFilterData("poster")} 
                    btntext="Poster" 
                    isActive={filterData === "poster"} 
                />

            </div>
            <div className="blogcards-cont">
            {TopBlogData.filter((item)=> filterData === 'all'|| item.category === filterData)
                    .map((blogs,index)=>(
                        <Blogcard 
                        chip={blogs.chip} 
                        date={blogs.date} 
                        img={blogs.image}
                        title={blogs.title}
                        stack={blogs.stack}
                        link={blogs.link}/>
                    ))}
            </div>
            
        </div>
    )
}