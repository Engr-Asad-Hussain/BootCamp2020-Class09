import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField } from '@material-ui/core/';

import BasicTextField from './BasicTextFields';

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
    marginTop: 60,
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={5}>
        <BasicTextField/>
      </Paper>
    </div>
  );
}

/*
Paper :::
https://material-ui.com/components/paper/
*/