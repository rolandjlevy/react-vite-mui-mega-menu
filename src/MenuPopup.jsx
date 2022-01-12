import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  usePopupState,
  bindFocus,
  bindMenu,
} from 'material-ui-popup-state/hooks';

const useStyles = makeStyles((theme) => {
  popoverPaper: {
    width: '80vw';
    height: '50vh';
    maxHeight: 'unset';
    left: 0;
    transformOrigin: '0 0';
  }
});

const MenuPopup = () => {

  const classes = useStyles();

  const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' });

  const [search, setSearch] = useState('');
  
  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          {...bindFocus(popupState)}
          type="search"
          value={search}
          label="Search" 
          variant="outlined"
          aria-controls="customized-menu"
          aria-haspopup="true"
          onChange={handleChange}
        />
      </Box>
      {search.length > 1 ? (
        <Menu 
          {...bindMenu(popupState)} 
          PopoverClasses={{ paper: classes.popoverPaper }}
          id="customized-menu"
          disableAutoFocus
        >
          <MenuItem onClick={popupState.close}>Hello</MenuItem>
          <MenuItem onClick={popupState.close}>World</MenuItem>
        </Menu>
      ) : null}
    </div>
  )
}

export default MenuPopup;