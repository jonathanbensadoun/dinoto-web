import './Detail.scss';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from 'react-router-dom';

export default function Detail({ dino, isDesktopOrLaptop }) {
  // console.log(dino.attributes.hauteur);
  return (
    <div className="container-card-detail">
      <Card
        sx={{
          maxWidth: ' 100vw',
          background: '#edeee8',
        }}
        className="card-detail"
      >
        {!isDesktopOrLaptop && (
          <Link to="/search" className="card-detail-link">
            <CloseIcon />
          </Link>
        )}
        <img
          src={dino.attributes.img}
          alt={dino.attributes.name}
          className="img-detail"
        />
        <CardContent className="container-description">
          {isDesktopOrLaptop && (
            <Link to="/search" className="card-detail-link">
              <CloseIcon />
            </Link>
          )}
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            textAlign="center"
          >
            {dino.attributes.name.toUpperCase()}
          </Typography>
          <Typography fontSize="1.5rem" marginBottom="0.5rem">
            Epoque : {dino.attributes.epoque.data.attributes.label}
          </Typography>
          <Typography fontSize="1.5rem" marginBottom="0.5rem">
            Continent : {dino.attributes.continents.data[0].attributes.label}
          </Typography>
          <Typography fontSize="1.5rem" marginBottom="0.5rem">
            Environement :{' '}
            {dino.attributes.environements.data[0].attributes.label}
          </Typography>
          <Typography fontSize="1.5rem" marginBottom="0.5rem">
            Locomotion : {dino.attributes.locomotions.data[0].attributes.label}
          </Typography>
          <Typography fontSize="1.5rem" marginBottom="0.5rem">
            Famille : {dino.attributes.familles.data[0].attributes.label}
          </Typography>
          <Typography fontSize="1.5rem" marginBottom="0.5rem">
            Hauteur : {dino.attributes.hauteur / 100} m
          </Typography>
          <Typography fontSize="1.5rem" marginBottom="0.5rem">
            Poids : {dino.attributes.poids} kg
          </Typography>
          <Typography fontSize="1.5rem" marginBottom="0.5rem">
            Longeur : {dino.attributes.longeur / 100} m
          </Typography>
          <Typography fontSize="2rem" marginBottom="0.3rem">
            Description :{' '}
          </Typography>
          <Typography textAlign="left">
            {dino.attributes.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
