import React from 'react';
import './style.css';

export default () => (
  <div className="details-gallery">

    <div className="gallery-main-photo">
      <img
        className="gallery-main-photo-item"
        src={require('./big-shoes@2x.jpg')}
      />
    </div>

    <div className="gallery-photo">

      <div className="gallery-photo-items">
        <img src={require('./small-shoes-1@2x.jpg')} width="145" height="118" />

        <img src={require('./small-shoes-2@2x.jpg')} width="145" height="118" />

        <img src={require('./small-shoes-3@2x.jpg')} width="145" height="118" />

        <img src={require('./small-shoes-4@2x.jpg')} width="145" height="118" />
      </div>

      <div className="gallery-photo-lines">
        <div className="lines-item" />
        <div className="lines-item" />
        <div className="lines-item" />
      </div>

      <button className="gallery-photo-more">see more photos</button>

    </div>

  </div>
);
