import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CircularProgress } from '@material-ui/core/';

import BasicTextField from './BasicTextFields';
import AppBarProperty from './AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(65),
    },
    marginLeft: 800,
    marginTop: -30,
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div>
      <AppBarProperty />
      <br/>
      <CircularProgress 
        color="secondary" 
        disableShrink={false}
        />

      <div className={classes.root}>
        <Paper elevation={5}>
          <BasicTextField/>
        </Paper>
      </div>
    </div>
  );
}

/*
Paper :::
https://material-ui.com/components/paper/

Progress Bar:::
https://material-ui.com/components/progress/

Attributes of Progress Bar:::
https://material-ui.com/api/circular-progress/
*/