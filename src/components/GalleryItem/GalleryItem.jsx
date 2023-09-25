import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart }  from '@fortawesome/free-solid-svg-icons';

const GalleryItem = ({ item, getGalleryItems }) => { 

    // State variable to track the visibility of the gallery item's description
    const [bioVisible, setbioVisible] = useState(false);

    // Function to toggle the visibility of the gallery item's description
    const toggleDescription = () => {
        setbioVisible(!bioVisible);
    }

    // Function to increase the number of likes for the gallery item
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
        <div onClick={toggleDescription} style={{backgroundColor: "#222", color: "#fff", padding: "10px", borderRadius: "5px"}}>
            {bioVisible ? 
                <p style={{marginBottom: "5px"}}>{item.description}</p> : 
                <img src={item.path} alt={item.description} style={{width: "300px", height: "300px"}} />
            }
            <p>
                {item.likes} people liked this
                <button onClick={increaseLikes} style={{backgroundColor: "transparent", border: "none", color: "#fff", cursor: "pointer"}}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </p>
        </div>
    );
}

export default GalleryItem;
