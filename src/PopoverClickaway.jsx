import React, { useState, useRef } from 'react';
import { Styles } from './Styles';
import { 
  Box, 
  ClickAwayListener,
  Grid, 
  MenuList,
  MenuItem, 
  Popover, 
  TextField,
  Typography
} from '@mui/material';

import ProductCard from './ProductCard';

export default function PopoverClickaway() {
  const classes = Styles();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [content, setContent] = useState('');

  const openPopover = () => {
    setOpen(true);
  };

  const closePopover = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const showContent = (event) => {
    setContent(event.target.textContent);
  }

  return (
    <ClickAwayListener onClickAway={closePopover}>

      <Box className={classes.formContainer}>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          className={classes.searchContainer}
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
            onFocus={openPopover}
          />
        </Box>

        {open && search.length > 1 ? (
            <Grid container className={classes.popOverWrapper}>
              <Grid item xs={3}>
                <>
                  <MenuList>
                    <MenuItem onMouseEnter={showContent} onClick={closePopover}>Saw Blades</MenuItem>
                    <MenuItem onMouseEnter={showContent} onClick={closePopover}>Circular Saws</MenuItem>
                    <MenuItem onMouseEnter={showContent} onClick={closePopover}>Slitting Saws</MenuItem>
                    <MenuItem onMouseEnter={showContent} onClick={closePopover}>Saw Frame</MenuItem>
                    <MenuItem onMouseEnter={showContent} onClick={closePopover}>Hand Saws</MenuItem>
                  </MenuList>
                  <Box className={classes.showContent}>
                    <Typography>{content}</Typography>
                  </Box>
                </>
              </Grid>
              <Grid item xs={9}>
                <Box flexDirection="column" className={classes.contentContainer}>
                  <ProductCard title="Eclipse Blue" description="Steel, Saw Frame, For Hacksaw" />
                  <ProductCard title="Kennedy" description="Steel, Padsaw Blade, 230mm" />
                  <ProductCard title="Stanley" description="0-15-277, Steel, Saw Blade, 190mm" />
                </Box>
              </Grid>
            </Grid>
        ) : null}

      </Box>

    </ClickAwayListener>
  );
}