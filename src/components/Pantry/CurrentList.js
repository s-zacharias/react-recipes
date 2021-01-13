import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 200,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const CurrentList = ({ ingredients, setIngredients }) => {
  const classes = useStyles();
  const onDelete = (index) => {
    const newList = [];
    ingredients.forEach((ingredient, i) => {
      if (i !== index) {
        newList.push(ingredient);
      }
    });
    setIngredients(newList);
  };

  const renderList = ingredients.map((ingredient, index) => {
    return (
      <ListItem key={uuidv4()} index={index}>
        <ListItemText primary={ingredient} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => onDelete(index)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <List>{renderList}</List>
        </Grid>
      </Grid>
    </div>
  );
};

export default CurrentList;
