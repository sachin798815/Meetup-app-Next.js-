import { useEffect, useState } from 'react';

function MeetupPlaces() {
const [places, setPlaces] = useState([]);
    
useEffect(() => {
async function fetchPlaces() {
    try {
        const res = await fetch('https://api.api-ninjas.com/v1/city?country=India');
        const data = await res.json();
        setPlaces(data.slice(0, 5));
      } catch (error) {
        console.error('Failed to fetch places:', error);
      }
}
fetchPlaces();
},[]);

return (
    <section>
    <h2>Nearby Meetup Places</h2>
    <ul>
        {places.map((place, idx) => (
            <li key={idx}>{place.name}</li>
        ))}
    </ul>
    </section>
    );
}

export default MeetupPlaces;
