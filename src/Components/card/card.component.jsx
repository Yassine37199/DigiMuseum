import React from 'react';

import './card.styles.scss';



export const Card = ({photo}) => {
    
    const creationDate = new Date(photo.created_at);

    var datestring = ("0" + creationDate.getDate()).slice(-2) + "-" + ("0"+(creationDate.getMonth()+1)).slice(-2) + "-" +
    creationDate.getFullYear() + " "
    
    return(

        <div className="card">
            <img src={photo.user.profile_image.medium} className="card__user" alt={photo.user.name} />
        <div className="card__image" style={{
            backgroundImage : `url(${photo.urls.full})`
        }}></div>
            <div className="card__text">
                <span className="card__date">{datestring}</span>
                <h2 className='card__title'>{photo.user.name}</h2>
                <p className='card__description'>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p>
            </div>
            <div className="card__stats">
                <div className="stat">
                    <div className="value">{photo.likes}</div>
                    <div className="type">Likes</div>
                </div>
                <div className="stat">
                    <div className="value">32</div>
                    <div className="type">Comments</div>
                </div>
            </div>
        </div>

    )
   
}