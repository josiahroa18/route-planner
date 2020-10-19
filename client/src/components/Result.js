import React from 'react';

import { Result, LocationNode } from './styles';

export default ({route}) => {

    return (
        <Result>
            {route.length < 1 ? (
                <h1>Start by filling out the form to the right</h1>
            ) : (
                <div>
                    <h1>Efficient Route</h1>
                    {route.map((location, index) => {
                        return (
                            <LocationNode key={`${location}-${Math.random()}`}>
                                <div className='col'>
                                    {index === 0 && <p>Start:</p>}
                                    {index === route.length - 1 && <p>End:</p>}
                                    {index !== 0 && index !== route.length - 1 && <p>{`Stop ${index}: `}</p>}
                                </div>
                                <p>{location}</p>
                            </LocationNode>
                        )
                    })}
                </div>
            )}
        </Result>
    );
}