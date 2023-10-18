import React from "react";
import './LoginModal.css';

export default function LoadingModal() {
  return (
    <div className="modal-login">
        <div className="overlay-modal-login">
        </div>
        <div className="modal-login-content">
            <div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>
        </div>
    </div>
    
  );
}