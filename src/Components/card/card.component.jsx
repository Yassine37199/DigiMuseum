import React from 'react';

import './card.styles.scss';



export const Card = ({artwork}) => (

    <div className="card">
        <div className="card__image" style={{
            backgroundImage : `url(https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg)`
        }}> 
        </div>
        <div className="card__content">
            <h2 className="card__title">{artwork.title}</h2>
            <p className="card__artist">{artwork.artist_title}</p>
        </div>
       
    </div>
   
)