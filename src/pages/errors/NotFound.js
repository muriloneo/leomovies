import React from 'react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="alert alert-custom alert-warning" role="alert">
      <div className="alert-icon">
        <i className="fas fa-exclamation-triangle" />
      </div>
      <div className="alert-text">Page not found!</div>
    </div>
  )
}
