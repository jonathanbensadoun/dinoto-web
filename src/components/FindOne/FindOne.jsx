import { useState, useEffect } from 'react';

function FindOne({ dinosaurId }) {
  const [dinosaur, setDinosaur] = useState(null);

  useEffect(() => {
    fetch(`https://dinotoapi.com/api/dinosaures/${dinosaurId}`)
      .then((response) => response.json())
      .then((data) => {
        setDinosaur(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [dinosaurId]);
  return (
    <div className="container-card">
      {dinosaur && (
        <>
          <h2>{dinosaur.attributes.name}</h2>
          <img src={dinosaur.attributes.img} alt={dinosaur.attributes.name} />
        </>
      )}
    </div>
  );
}

export default FindOne;
