import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = (props) => {
  return ( 
    <>
      {Object.entries(props.data).map((item) => {
        const propKey = item[0];
        const data = item[1];
        return <GalleryItem key={propKey} title={data.title} stores={data.stores} />
      })}
    </>
   );
}
 
export default Gallery;