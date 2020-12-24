import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'blue',
    borderRadius: 25,
    border: 0,
    color: 'white',
    height: 40,
    padding: '0 30px',
  },
  label: {
      textTransform: 'none',
  }
});

export default function CustomButton() {
  const classes = useStyles();

  return (
    <Button
      classes={{
        root: classes.root,     // class name, e.g. `classes-nesting-root-x`
        label: classes.label,   // class name, e.g. `classes-nesting-label-x`
      }}
    >
      Next
    </Button>
  );
}

/*
Customize Button:::
https://material-ui.com/customization/components/

*/