import React from 'react';
import Place from '../Place/Place';


const Home = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between',       
    }
    const places = [
        {
            title : 'Coxsbazar',
            description:'Coxs Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. ',
            imgUrl:'https://tbsnews.net/sites/default/files/styles/big_2/public/images/2020/03/16/coxs_bazar_0.jpg?itok=nCIUHUN-&timestamp=1584350574',
            placeName:'coxsbazar'
        },
        {
            title : 'Shreemangal',
            description:'Madhobpur Lake is one of the main tourist attractions in the area, and is home to the Great White-Bellied Heron, the only confirmed site in Bangladesh.',
            imgUrl:'https://chokkor.com/wp-content/uploads/2019/02/Sreemangal-2.jpg',      
            placeName:'sremongol'
        },
        {
            title : 'Sundorban',
            description:'The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal.',
            imgUrl:'https://www.daily-bangladesh.com/media/imgAll/2020March/en/sundarban-2005210403.jpg',
            placeName:'sundarban'
        }
    ]
    return (
        <div style={style}>
           {
               places.map(place => <Place key={place.placeName} place={place}></Place>)
           }
        </div>
    );
};

export default Home;