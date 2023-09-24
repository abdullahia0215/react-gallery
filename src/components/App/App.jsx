import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryItems, setGalleryItems] = useState([]);

  const getGalleryItems = () => {
    axios.get('/gallery')
    .then(response => {
      console.log (response.data);
      setGalleryItems(response.data);
    }).catch(error => {
      console.log(error);
      console.error(error);
    });
  };
  
  useEffect(() => {
    getGalleryItems();
  })






    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryItems={galleryItems} />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
