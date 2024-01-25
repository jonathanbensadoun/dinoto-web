import './Epoque.scss';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Box from '@mui/system/Box';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeEpoque, changeDinoSelect } from '../../store/dinoSlice';

export default function Epoque({ dinos }) {
  const dispatch = useDispatch();
  const handleEpoqueChange = (epoqueId) => {
    dispatch(changeEpoque(epoqueId));
  };
  return (
    <>
      <Box className="box-btn" marginBottom="1REM">
        <Button
          sx={{ background: '#edeee8', color: '#17242a' }}
          variant="contained"
          onClick={() => handleEpoqueChange(1)}
        >
          Jurassique
        </Button>
        <Button
          sx={{ background: '#edeee8', color: '#17242a' }}
          variant="contained"
          onClick={() => handleEpoqueChange(2)}
        >
          Crétacé
        </Button>
        <Button
          sx={{ background: '#edeee8', color: '#17242a' }}
          variant="contained"
          onClick={() => handleEpoqueChange(3)}
        >
          Trias
        </Button>
      </Box>
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
            to={`/detail/${dino.attributes.name}`}
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
    </>
  );
}
