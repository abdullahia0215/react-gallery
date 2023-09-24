import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.jsx';

const GalleryList = ({ galleryItems, getGalleryItems }) => {
  console.log("in GalleryList:", galleryItems);
  return (
    <div>
      {galleryItems.map(item => (
        <GalleryItem key={item.id} item={item} getGalleryItems={getGalleryItems} />
      ))}
    </div>
  );
}

export default GalleryList;
    