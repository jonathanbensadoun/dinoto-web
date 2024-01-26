import './FooterMobile.scss';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import { GiDinosaurBones } from 'react-icons/gi';

export default function FooterMobile() {
  return (
    <Box sx={{ flexGrow: 1 }} className="footer">
      <AppBar position="static" sx={{ background: '#edeee8' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <MenuItem>
            <Link to="/">
              <HomeIcon />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="https://dinotoapi.com/doc" target="_blanc">
              <GiDinosaurBones className="logo-dino" />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="mailto:jonathan.ben-sadoun@oclock.school">
              <EmailIcon />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/search">
              <SearchIcon />
            </Link>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
