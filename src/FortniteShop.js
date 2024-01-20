import './App.css';
import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import Loading from './Loading';
import BundleDetailsModal from './BundleDetailsModal';
import './FortniteShop.css';



function FortniteShop() {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://fortnite-api.com/v2/shop/br?language=es')
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.featured && data.data.featured.entries) {
          const filteredItems = data.data.featured.entries.filter(item => item.bundle && item.bundle.name && item.bundle.image);
          setFeaturedItems(filteredItems);
        }
      })
      .catch(error => console.error('Error fetching data: ', error))
      .finally(() => setIsLoading(false));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = featuredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  if (isLoading) {
    return <Loading />;
  }
  const handleSelectBundle = (bundle, items) => {
    setSelectedBundle({ ...bundle, items });
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };
  const shouldShowPagination = featuredItems.length > itemsPerPage;
  
  return (
    <div className="shopStyle">
      <h1>Artículos destacados en la Tienda Fortnite</h1>
      <div>
        {currentItems.map(item => (
          
          <div key={item.offerId} className="itemStyle" onClick={() => handleSelectBundle(item.bundle, item.items)}>
            <h2>{item.bundle && item.bundle.name ? item.bundle.name : 'No Name'}</h2>
            <p>Regular Price: {item.regularPrice}</p>
            <p>Final Price: {item.finalPrice}</p>
            {item.bundle && item.bundle.image && <img src={item.bundle.image} alt={item.bundle.name} className="imageStyle" />}
          </div>
           )
        )}
          {isModalOpen && (
        <BundleDetailsModal bundle={selectedBundle} onClose={handleCloseModal} />
      )}
      </div>
      {shouldShowPagination && (
      <Pagination 
      itemsPerPage={itemsPerPage} 
      totalItems={featuredItems.length} 
      paginate={paginate} 
    />
    )}
    </div>
  );
}

export default FortniteShop;
