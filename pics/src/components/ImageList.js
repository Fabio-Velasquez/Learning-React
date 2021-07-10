import react from 'react';
import  ReactDOM  from 'react-dom';
import './ImageList.css';
import ImageCard from './ImageCard';
const ImageList = (props) => {
    const images = props.images.map((image) =>{
        // the key property should be in the root tag like if we had a div that wrapped the image it would be in that div.
        return <ImageCard key = {image.id} image = {image}></ImageCard>
    });
    return <div className= "image-list">{images}</div>
};

export default ImageList;


