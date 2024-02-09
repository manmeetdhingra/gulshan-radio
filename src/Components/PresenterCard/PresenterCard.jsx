import React from 'react';
import "./PresenterCard.css"

export default function PresenterCard(props) {
    const presenters = props.presenters;

    return (
        <div className='presenters'>
            {presenters.map((presenter) => (
                <div key={presenter.id} className='presenter-card'>
                    <img src={presenter.coverImg} alt={presenter.name} />
                    <h3>{presenter.name}</h3>
                </div>
            ))}
        </div>
    );
}

