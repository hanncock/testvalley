import React from "react";

const ProductCard = ({ slideProd }) => {

  return(
    <div className="movie">
        
        <img src={slideProd.pcImageUrl !=="N/A" ? slideProd.pcImageUrl : 'https://via.placeholder.com/200'} alt={slideProd.pcImageUrl}/>
        
        {/* <p>{slideProd.mainBannerId}</p> */}

      {/* <div>
        <p>{slideProd.Year}</p>  
      </div>

      <div>
        <img src={slideProd.Poster !=="N/A" ? slideProd.Poster : 'https://via.placeholder.com/200'} alt={slideProd.Title}/>
      </div>

      <div>
        <span>{slideProd.Type}</span>
        <h3>{slideProd.Title}</h3>
      </div> */}

    </div>
  )
}

export default ProductCard;