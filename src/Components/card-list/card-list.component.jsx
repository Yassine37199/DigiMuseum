import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.scss'





export const CardList = ({photos}) => (

    <div className="card-list">
        {
            photos.map(photo => (
                <Card key={photo.id} photo={photo} />
            ))
        }
    </div>
)

