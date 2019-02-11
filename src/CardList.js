import React from 'react'; 
import Card from './Card';


const CardList = ({podcasts}) => {
    const cardComponent = podcasts.map((user, i) => {
        return (<Card 
            key = {i} 
            id = {podcasts[i].id} 
            name={podcasts[i].name} 
            email={podcasts[i].email}/>
    )});
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;