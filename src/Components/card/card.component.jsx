import React from 'react';

import './card.styles.scss';



export const Card = ({photo}) => (

<div className="card">
  <div class="card__image" style={{
      backgroundImage : `url(${photo.urls.full})`
  }}></div>
    <div className="card__text">
        <span className="card__date">{photo.user.name}</span>
        <h2 className='card__title'>Post One</h2>
        <p className='card__description'>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
    </div>
    <div className="card__stats">
        <div className="stat">
            <div className="value">5123</div>
            <div className="type">Views</div>
        </div>
        <div className="stat">
            <div className="value">32</div>
            <div className="type">Comments</div>
        </div>
     </div>
</div>
   
)