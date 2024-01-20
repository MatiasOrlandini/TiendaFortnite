import React from 'react';
import './BundleDetailsModal.css';
import BundleDetails from './BundleDetails';

function BundleDetailsModal({ bundle, onClose }) {
  if (!bundle) return null;

  return (
    <>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-content">
        <BundleDetails bundle={bundle} />
      </div>
    
    </>
  );
}

export default BundleDetailsModal;
