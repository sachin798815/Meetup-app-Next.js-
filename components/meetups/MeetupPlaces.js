import { useEffect, useState } from 'react';
import classes from './MeetupPlaces.module.css';

function MeetupPlaces() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchPlaces() {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/city?country=India', {
          headers: {
            'X-Api-Key': process.env.NEXT_PUBLIC_API_KEY,
          },
        });
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPlaces(data.slice(0, 5));
      } catch (err) {
        setError('Could not load places. Try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchPlaces();
  }, []);

  return (
    <section className={classes.section}>
      <h2>Nearby Meetup Places</h2>
      {loading && <p className={classes.loading}>Loading places...</p>}
      {error && <p className={classes.error}>{error}</p>}
      {!loading && !error && (
        <ul>
          {places.map((place, idx) => (
            <li key={idx}>
              <strong>{place.name}</strong> — {place.region || place.country}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default MeetupPlaces;
