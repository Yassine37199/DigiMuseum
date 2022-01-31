import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.scss'





export const CardList = ({artworks}) => (

    <div className="card-list">
        {
            artworks.map(artwork => (
                <Card key={artwork.id} artwork={artwork} />
            ))
        }
    </div>
)

