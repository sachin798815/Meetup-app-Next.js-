import { useEffect, useState } from 'react';

function MeetupPlaces() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/city?country=India',
        );
        const data = await res.json();
        setPlaces(data.slice(0, 5));
      } catch (error) {
        console.error('Failed to fetch places:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPlaces();
  }, []);

  return (
    <section>
      <h2>Nearby Meetup Places</h2>
      {loading ? (
        <p>Loading places...</p>
      ) : (
        <ul>
          {places.map((place, idx) => (
            <li key={idx}>{place.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default MeetupPlaces;
