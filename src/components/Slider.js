import {useState} from 'react';
import react from 'react'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentindex] = useState(0);

    const slidesStyle = {
        width: "100%",
        height: "100%",
        // borderradius: "10px",
        
        // position: "center"
    };

    const slideStyles = {
        height:"280px",
        width: "60%",
        marginLeft:"20%",
        marginRight:"20%",
        overflow: "visible",
        position: "relative",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].pcImageUrl})`

    };

    const leftArrowStyles = {
        position: "relative",
        top:"50%",
        transform: "translate(0, -50%)",
        left: "20px",
        fontSize: "30px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
        padding: "5px",
        width:"35px",
        opacity: "0.5",
        backgroundColor:"black",
        borderradius: "50%"
    }

    const rightArrowStyles = {
        position: "absolute",
        top:"50%",
        transform: "translate(0, -50%)",
        right: "20px",
        fontSize: "30px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
        padding: "5px",
        width:"35px",
        opacity: "0.5",
        backgroundColor:"black",
        borderradius: "50%"
    }

    const dotsContainerStyles =  {
        top:"50%",
        position:"relative",
        display:"flex",
        justifyContent: "center"
    }

    const dotStyles = {
        // position:"relative",
        margin : '0 3px',
        cursor: 'pointer',
        fontSize: "80px",
        color:"grey"
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentindex(newIndex)
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentindex(newIndex);
    }

    return (
        <div style={slideStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}> &#60; </div>
            <div style={rightArrowStyles} onClick={goToNext}> &#62; </div>
            <div style={slidesStyle} >
            <div style={dotsContainerStyles}>
                {slides.map((slide,slideIndex) => (
                    <div key={slideIndex} style={dotStyles}>.</div>
                ))}
            </div>
            </div>
            
        </div>
    );
};

export default ImageSlider

