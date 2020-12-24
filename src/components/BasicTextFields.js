import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core/';

import CustomButton from './Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '100%',
    },
  },
  container: {
    padding: 20,
  },
  text_center: {
    textAlign: 'center'
  },
  margin_top: {
    marginTop: -12,
  },
  color: {
    color: '#5c6bc0',
    fontFamily: 'Comic Sans MS, Comic Sans, cursive',
    fontWeight: 1000,
  },
  forgot: {
    textAlign: 'center',
    color: '#1565c0',
    fontFamily: 'Helvetica Neue,Helvetica,Arial',
    fontSize: '16px',
    cursor: 'pointer',
  }
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.text_center}>
        <h1 className={classes.color}>yahoo!</h1>
        <h1>Enter Password</h1>
        <p className={classes.margin_top}>to finish sign in</p>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <br/><br/>
        <TextField 
          type="password"
          label="Password" 
          required/>
        <br/><br/><br/>
        <CustomButton />
        <p className={classes.forgot}>Forgot password?</p>
      </form>
    </div>
  );
}


/*
Attributes of TextField:::
https://material-ui.com/api/form-control/


CSS Color:::
https://material-ui.com/customization/color/


FONT Family and weight:::
https://www.w3.org/Style/Examples/007/fonts.en.html


https://material-ui.com/api/button/#css
*/