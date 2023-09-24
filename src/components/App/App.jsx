import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  const [galleryItems, setGalleryItems] = useState([]);

  const getGalleryItems = () => {
    axios.get('/gallery')
    .then(response => {
      console.log(response.data);
      setGalleryItems(response.data);
    }).catch(error => {
      console.log(error);
      console.error(error);
    });
  };
  
  useEffect(() => {
    getGalleryItems();
  }, []);

  return (
    <div id="App">
      <header id="App-header">
        <h1 id="App-title">Cool A** Animals</h1>
      </header>
      <GalleryList galleryItems={galleryItems} getGalleryItems={getGalleryItems} />
    </div>
  );
}

export default App;