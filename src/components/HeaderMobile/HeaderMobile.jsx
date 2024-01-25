import './HeaderMobile.scss';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';

export default function HeaderMobile() {
  return (
    <Box sx={{ flexGrow: 1, zIndex: 1 }} className="header">
      <AppBar position="static" sx={{ background: '#edeee8' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: '#17242a' }}
          >
            <Link to="/">Dinoto</Link>
          </Typography>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
