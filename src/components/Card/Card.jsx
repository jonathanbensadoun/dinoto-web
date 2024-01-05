import { useState, useEffect } from 'react';

function stringToUpperCase(string) {
  return string.toUpperCase();
}

function Card() {
  const [dinos, setDinos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    const apiUrl = `https://dinotoapi.com/api/dinosaures?pagination[page]=${
      pagination.page || 1
    }&pagination[pageSize]=12&sort[0]=name&populate=*${
      searchTerm && `&filters[name][$contains]=${searchTerm.toLowerCase()}`
    }`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setDinos(data.data);
        // console.log(data.data);
        setPagination(data.meta.pagination);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [searchTerm, pagination.page]);
  const handlePageClick = (pageNumber) => {
    setPagination({ ...pagination, page: pageNumber });
  };
  const renderPaginationButtons = () => {
    if (!pagination.pageCount || pagination.pageCount === 1) {
      return null;
    }

    const buttons = [];
    for (let i = 1; i <= pagination.pageCount; i += i + 1) {
      buttons.push(
        <button
          key={i}
          type="button"
          onClick={() => handlePageClick(i)}
          disabled={i === pagination.page}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };
  return (
    <div className="container-card">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="pagination-buttons">{renderPaginationButtons()}</div>
      {dinos &&
        dinos.map((post) => (
          <div className="post-card" key={post.id}>
            <img
              className="img-card"
              src={post.attributes.img}
              alt={post.attributes.name}
            />
            <h2 className="post-title">
              {stringToUpperCase(post.attributes.name)}
            </h2>
          </div>
        ))}
      <div className="pagination-buttons">{renderPaginationButtons()}</div>
    </div>
  );
}

export default Card;
