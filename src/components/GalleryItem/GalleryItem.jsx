import React, { useState, useEffect } from 'react';
import axios from 'axios';
const GalleryItem = ({ item, getGalleryItems }) => { 
    console.log("in GalleryItem:", item);

    const [bioVisible, setbioVisible] = useState(false);

    const togglebioVisibility = () => {
        setbioVisible(!bioVisible);
    }
    const increaseLikes = (event) => {
        axios.put(`/gallery/liked/${item.id}`)
            .then(response => {
                getGalleryItems();
            })
            .catch(error => {
                console.log(error);
                console.error('Error updating likes');
            });
    }
    return (
        <div className="GalleryItem" onClick={togglebioVisibility}>
            {bioVisible ? 
                <p>{item.description}</p> : 
                <img src={item.path} alt={item.description}/>
            }
            <p>
                Likes: {item.likes}
                <button onClick={increaseLikes}>Like</button>
            </p>
        </div>
    );
};
export default GalleryItem;
   