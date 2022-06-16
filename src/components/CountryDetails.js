import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails(props) {

    const { id } = useParams();
    console.log('id -->', id);
    
    return (
        <div>
            
        </div>
    );
}

export default CountryDetails;