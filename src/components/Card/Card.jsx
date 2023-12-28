import { useState, useEffect } from 'react';

function StringToUpperCase(string) {
  return string.toUpperCase();
}
function Card() {
  const [dinos, setDinos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const apiUrl = `http://dinotoapi.com/api/dinosaures?pagination[page]=1&pagination[pageSize]=100&sort[0]=name&populate=*${
      searchTerm && `&filters[name][$contains]=${searchTerm.toLowerCase()}`
    }`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setDinos(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [searchTerm]);

  return (
    <div className="container-card">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {dinos &&
        dinos.map((post) => (
          <div className="post-card" key={post.id}>
            <img
              className="img-card"
              src={post.attributes.img}
              alt={post.attributes.name}
            />
            <h2 className="post-title">
              {StringToUpperCase(post.attributes.name)}
            </h2>
          </div>
        ))}
    </div>
  );
}

export default Card;
