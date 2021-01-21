import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const onClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={onClick}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={onClose}
            >
              <MenuItem onClick={onClose}>
                <Link to="/">Home</Link>
              </MenuItem>
              <MenuItem onClick={onClose}>
                <Link to="/searchByDish">Search by Dish</Link>
              </MenuItem>
              <MenuItem onClick={onClose}>
                <Link to="/searchByIngredients">Search by Ingredients</Link>
              </MenuItem>
              <MenuItem onClick={onClose}>
                <Link to="/saved">View Saved Recipes</Link>
              </MenuItem>
            </Menu>
          </div>
          <Typography variant="h6" className={classes.title}>
            Recipe Finder
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
