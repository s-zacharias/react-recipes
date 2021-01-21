import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const RecipeCard = ({ index, recipe, saved, setSaved }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const onExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderIngredients = recipe.extendedIngredients.map((el) => {
    return (
      <ListItem key={uuidv4()}>
        <ListItemText primary={el.name} />
      </ListItem>
    );
  });

  const handleSave = () => {
    if (index in saved.ids) {
      const newSaved = [];
      saved.list.forEach((el) => {
        if (el.title !== index) {
          newSaved.push(el);
        }
      });
      delete saved.ids[index];
      setSaved({ ids: saved.ids, list: newSaved });
    } else {
      saved.ids[index] = true;
      setSaved({ ids: saved.ids, list: [...saved.list, recipe] });
    }
    console.log('saved:', saved);
  };

  const renderFavButton = () => {
    if (index in saved.ids) {
      return <FavoriteIcon color="secondary" />;
    } else {
      return <FavoriteIcon />;
    }
  };

  const renderTitle = () => {
    if (recipe.title.length > 25) {
      return recipe.title.slice(0, 25) + '...';
    } else {
      return recipe.title;
    }
  };

  return (
    <div>
      <Grid item style={{ display: 'flex' }}>
        <Card className={classes.root}>
          <CardHeader
            title={<Link href={recipe.sourceUrl}>{renderTitle()}</Link>}
            titleTypographyProps={{ variant: 'h6' }}
            style={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              height: 30,
            }}
          ></CardHeader>
          <CardMedia
            className={classes.media}
            image={recipe.image}
            title={recipe.title}
          />
          <CardContent>
            <Typography>Ready in {recipe.readyInMinutes} Minutes</Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" onClick={handleSave}>
              {renderFavButton()}
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={onExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Ingredients:</Typography>
              {renderIngredients}
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </div>
  );
};

export default RecipeCard;
