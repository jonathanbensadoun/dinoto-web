import './FooterDesktop.scss';
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
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function FooterDesktop() {
  return (
    <Box sx={{ flexGrow: 1 }} className="footer">
      <AppBar position="static" sx={{ background: '#edeee8' }}>
        <Toolbar sx={{ justifyContent: 'space-around' }}>
          <MenuItem>
            <Link to="https://github.com/jonathanbensadoun" target="_blank">
              <GitHubIcon />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="https://www.linkedin.com/in/jonathan-bensadoun/"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="https://dinotoapi.com/doc" target="_blank">
              <GiDinosaurBones className="logo-dino" />
            </Link>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
