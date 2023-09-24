import React, { useState } from 'react';
import axios from 'axios';

const GalleryItem = ({ item, getGalleryItems }) => { 
    console.log("Item in GalleryItem:", item);

    const [bioVisible, setbioVisible] = useState(false);


    const toggleDescription = () => {
        setbioVisible(!bioVisible);
    }
    const increaseLikes = (event) => {
        event.stopPropagation();
        axios.put(`/gallery/like/${item.id}`)
            .then(response => {
                getGalleryItems();
            })
            .catch(error => {
                console.error('Error updating likes', error);
            });
    }
    return (
        <div  onClick={toggleDescription}>
            {bioVisible ? 
                <p>{item.description}</p> : 
                <img src={item.path} alt={item.description} style={{width: "100px", height: "auto"}} />
            }
            <p>
                {item.likes} people liked this
                <button onClick={increaseLikes}>Like</button>
            </p>
        </div>
    );
}

export default GalleryItem;
    
   