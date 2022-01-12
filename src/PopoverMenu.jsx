import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { 
  Box, 
  Grid, 
  Menu, 
  MenuList,
  MenuItem, 
  Popover, 
  TextField
} from '@mui/material';

import {
  usePopupState,
  bindFocus,
  bindMenu,
  bindPopover,
} from 'material-ui-popup-state/hooks';
import ProductCard from './ProductCard';

const PopoverMenu = () => {
  const popupState = usePopupState({ variant: 'popover' });
  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ width:'calc(100vw - 32px)', maxWidth: 800 }}
      >
        <TextField
          {...bindFocus(popupState)}
          type="search"
          value={search}
          label="Search" 
          variant="outlined"
          fullWidth
          aria-controls="customized-menu"
          aria-haspopup="true"
          onChange={handleChange}
        />
      </Box>
      
      {search.length > 1 ? (
        <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            id="customized-menu"
            disableAutoFocus
          >
          <Grid container sx={{
            width: 'calc(100vw - 32px)',
            maxWidth: 800,
            height: '50vh',
            maxHeight: 320,
            top: 60,
            left: 0,
            padding: 1
          }}>
            <Grid item xs={3}>
              <MenuList>
                <MenuItem onClick={popupState.close}>Saw Blades</MenuItem>
                <MenuItem onClick={popupState.close}>Circular Saws</MenuItem>
                <MenuItem onClick={popupState.close}>Slitting Saws</MenuItem>
                <MenuItem onClick={popupState.close}>Saw Frame</MenuItem>
                <MenuItem onClick={popupState.close}>Hand Saws</MenuItem>
              </MenuList>
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