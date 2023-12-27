import { useState, useEffect } from 'react';

function Card() {
  const [dinos, setDinos] = useState([]);

  useEffect(() => {
    fetch(
      'http://dinotoapi.com/api/dinosaures?pagination[page]=1&pagination[pageSize]=100&sort[0]=name&populate=*'
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setDinos(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container-card">
      {dinos &&
        dinos.map((post) => (
          <div className="post-card" key={post.id}>
            <h2 className="post-title">{post.attributes.name}</h2>
            <img src={post.attributes.img} alt={post.attributes.name} />
          </div>
        ))}
    </div>
  );
}

export default Card;
