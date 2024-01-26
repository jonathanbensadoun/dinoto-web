import './Search.scss';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';

import Box from '@mui/system/Box';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { typing, submitSearch, changeDinoSelect } from '../../store/dinoSlice';
import Loading from '../Loading/Loading';

export default function Search({ dinos }) {
  const typingValue = useSelector((state) => state.dino.typingValue);
  const loadingData = useSelector((state) => state.dino.loadingData);
  const dispatch = useDispatch();
  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(submitSearch());
        }}
      >
        <input
          className="form__input"
          value={typingValue}
          type="text"
          placeholder="Rechercher"
          onChange={(e) => {
            const action = typing(e.target.value);
            dispatch(action);
          }}
        />
        <SearchIcon />
        <button type="submit" className="form__button">
          Envoyer
        </button>
      </form>
      {loadingData ? (
        <Loading />
      ) : (
        <Box
          sx={{
            display: 'flex',

            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          {dinos.map((dino) => (
            <Link
              to={`/detail/${dino.id}`}
              key={dino.id}
              onClick={() => {
                dispatch(changeDinoSelect(dino.id));
              }}
            >
              <Card
                sx={{ maxWidth: 345, background: '#edeee8' }}
                className="card-search"
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={dino.attributes.img}
                  alt={dino.attributes.name}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign="center"
                  >
                    {dino.attributes.name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Box>
      )}
    </>
  );
}
