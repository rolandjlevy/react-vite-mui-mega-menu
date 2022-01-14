import React, { useState, useRef } from 'react';
import { Styles } from './Styles';
import { 
  Box, 
  Grid, 
  Menu, 
  MenuList,
  MenuItem, 
  Popover, 
  TextField,
  Typography
} from '@mui/material';

import ProductCard from './ProductCard';

import {
  usePopupState,
  bindTrigger,
  bindFocus,
  bindPopover,
} from 'material-ui-popup-state/hooks';

const PopoverMenu = () => {
  const classes = Styles();
  const popupState = usePopupState({ variant: 'popover' });
  const [search, setSearch] = useState('');
  const [content, setContent] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const showContent = (event) => {
    setContent(event.target.textContent);
  }

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={classes.searchInput}
      >
        <TextField
          type="search"
          value={search}
          label="Search" 
          variant="outlined"
          fullWidth
          aria-haspopup="true"
          aria-describedby="customized-menu"
          onChange={handleChange}
          {...bindFocus(popupState)}
        />
      </Box>
      
      {search.length > 1 ? (
        <Popover
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            id="customized-menu"
            {...bindPopover(popupState)}
            disableAutoFocus
          >
          <Grid container className={classes.popOverWrapper}>
            <Grid item xs={3}>
              <>
                <MenuList>
                  <MenuItem onMouseEnter={showContent} onClick={popupState.close}>Saw Blades</MenuItem>
                  <MenuItem onMouseEnter={showContent} onClick={popupState.close}>Circular Saws</MenuItem>
                  <MenuItem onMouseEnter={showContent} onClick={popupState.close}>Slitting Saws</MenuItem>
                  <MenuItem onMouseEnter={showContent} onClick={popupState.close}>Saw Frame</MenuItem>
                  <MenuItem onMouseEnter={showContent} onClick={popupState.close}>Hand Saws</MenuItem>
                </MenuList>
                <Box className={classes.showContent}>
                  <Typography>{content}</Typography>
                </Box>
              </>
            </Grid>
            <Grid item xs={9}>
              <Box flexDirection="column">
                <ProductCard title="Eclipse Blue" description="Steel, Saw Frame, For Hacksaw" />
                <ProductCard title="Kennedy" description="Steel, Padsaw Blade, 230mm" />
                <ProductCard title="Stanley" description="0-15-277, Steel, Saw Blade, 190mm" />
              </Box>
            </Grid>
          </Grid>
        </Popover>
      ) : null}
    </>
  )
}

export default PopoverMenu;