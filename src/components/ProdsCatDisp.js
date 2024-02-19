import React, { useState } from "react";

const ProdCatDisp =({ prodscatdisp }) => {
    // const prod = [];
    // const cats = prodscatdisp.reduce((prod, {title, description}) => {
    //     if(!prod[title]) prod[title] = [];
    //     prod[description].push(title);
    //     return prod;
    // })

    // const groups = _.groupBy(prodscatdisp,  '');

    const [item, setitem] = useState([])

    const imageSize = {
        width: "200px",
        height: "200px",
        backgroundRepeat: "no-repeat",
        padding:"20px",  
        position: "relative" 
    }
    

    return (
        <div className="dispgroup">        

            <div className="holder">
                <b className="titledesc">{prodscatdisp.title}</b>
                <i>{prodscatdisp.subtitle}</i>
            </div>
            

            <div className="description">
                {
                prodscatdisp.media.map((images) => (
                    <div>
                        <img src={images.uri} alt="" style={imageSize}/>
                        {/* // <ProdCatDisp prodscatdisp={productsDisp} /> */}
                        <div>{prodscatdisp.description}</div>
                        <div>★ {prodscatdisp.rating}</div>
                    </div>
                   ))
                }
                {/* <div>{prodscatdisp.description}</div>
                <div>★ {prodscatdisp.rating}</div> */}

            </div>

        </div>
        
    )
}

export default ProdCatDisp;