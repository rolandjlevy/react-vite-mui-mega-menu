import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ClickAwayListener from "@mui/material/ClickAwayListener";

const useStyles = makeStyles((theme) => {
  popoverPaper: {
    width: '80vw';
    height: '50vh';
    maxHeight: 'unset';
    left: 0;
    transformOrigin: '0 0';
  }
});

const CustomMenu = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length < 2) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }

  // const handleKeyDown = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  // }

  return (
    <main>

      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          type="search"
          value={search}
          label="Search" 
          variant="outlined"
          aria-controls="customized-menu"
          aria-haspopup="true"
          onChange={handleChange}
        />
      </Box>

      <Menu
        PopoverClasses={{ paper: classes.popoverPaper }}
        id="customized-menu"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        getContentAnchorEl={null}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </MenuItem>
      </Menu>
    </main>
  );
}

export default CustomMenu;