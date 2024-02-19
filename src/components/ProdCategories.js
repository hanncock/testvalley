import React from "react";

const prodcatStyle = {
    display:"inline-flex",
    // width:"100%"
    // justifyContent: "center"
}



const ProdCategoryCard =({prods}) => {
    return (
        <div className="prodcatStyle">
            <div className="procontainStyle">
                <img className="imageholder" src={prods.imageUrl !=="N/A" ? prods.imageUrl : 'https://via.placeholder.com/200'} alt={prods.imageUrl}/>

                <div>
                    {prods.title}    
                </div>
            </div>           
        </div>
    )
}

export default ProdCategoryCard;