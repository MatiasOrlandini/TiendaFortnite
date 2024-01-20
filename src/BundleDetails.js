import './BundleDetails.css';

function BundleDetails({ bundle }) {
    if (!bundle) return null;
  
    return (
      <div className="bundleDetails">
        <h2>{bundle.name}</h2>
        <img src={bundle.image} alt={bundle.name} />
        <p>{bundle.info}</p>
        {bundle.items && bundle.items.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <img 
            src={item.images.featured || item.images.icon || item.images.smallIcon} 
            alt={item.name} 
          />
          </div>
        ))}
      </div>
    );
  }
  
export default BundleDetails