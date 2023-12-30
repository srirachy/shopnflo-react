import React from 'react';
import PageTitle from '../components/PageTitle';
import Gallery from '../components/Gallery';
import titleData from '../utils/titles.json';
import galleryData from '../utils/stores.json';

const Stores = () => {
  const storesData = titleData.stores;
  return ( 
    <main className="my-5">
        <div className="container border border-secondary page-transparent">
            <PageTitle title={storesData.title} content={storesData.content} textClass="text-md-start" />
            <Gallery data={galleryData} />
        </div>
    </main>
   );
}
 
export default Stores;