import './Home.scss';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '80vh',
        margin: '4rem',
      }}
    >
      <Link className="card_home elmt1" to="/search">
        <Box className="card_home_box">
          Tous les dinosaures <span>par nom</span>
        </Box>
      </Link>
      <Link className="card_home elmt2" to="/epoque">
        <Box className="card_home_box">
          Tous les dinosaures <span>par époque</span>
        </Box>
      </Link>
      <Link className="card_home elmt3" to="https://dinotoapi.com/doc">
        <Box className="card_home_box">DinotoApi</Box>
      </Link>
    </Box>
  );
}
