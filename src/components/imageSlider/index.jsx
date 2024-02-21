import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './styles.css';

export default function ImageSlider({url,limit=5,page=1}){
    const[images,setImages]=useState([]);
    const[currentSlide,setCurrentSlide] = useState(0)
    const[errorMessage,setErrorMessage] = useState(null)
    const[loading,setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        } catch (e) {
            setErrorMessage(e.message);
            setLoading(false);
        }
    }

    function  handleNext(){
        if(currentSlide<limit-1){
            setCurrentSlide(currentSlide+1)
            console.log(currentSlide<limit)
        } else {
            setCurrentSlide(0)
        }
        console.log(currentSlide,limit)
    }

    function  handlePrevious(){
        if(currentSlide>0){
            setCurrentSlide(currentSlide-1)
            console.log(currentSlide<limit)
        } else {
            setCurrentSlide(limit-1)
        }
        console.log(currentSlide,limit)
    }


    useEffect(()=>{
        if(url!==''){
            fetchImages(url);
        }
    },[url]);

    console.log(images)

    if(loading){
        return(
            <div>Loading, please wait...</div>
        )
    }

    if(errorMessage !== null){
        console.log(errorMessage)
        return(
            <div>An error has occurred - {errorMessage}</div>
        )
    }

    return(<>
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
            {images && images.length
            ? (images.map(imageItem=>(
                parseInt(imageItem.id,10)=== currentSlide
                ? <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className="current-image"/>
                : null)))
            : null}

            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
            <span className="circle-indicators">
                {images && images.length
                ? images.map((_,index)=>(
                    <button key={index} className={
                        currentSlide === index ? "current-indicator active" : "current-indicator"
                    }
                    onClick={()=>setCurrentSlide(index)}></button>
                ))
                : null}
            </span>
        </div>
    </>)
}
