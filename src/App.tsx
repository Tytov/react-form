import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import MailOutline from '@material-ui/icons/MailOutline';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import pattern from './assets/pattern.png';

const classNames = (classes: string[]): string => classes.join(' ');

const themeMUI = createMuiTheme({
  palette: {
    primary: {
      main: '#5e91f8',
      contrastText: '#ffffff',
    },
    background: {
      default: '#5e91f8',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3),
    },
    margin: theme.spacing(3, 0),
    zIndex: 1,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  contrast: {
    color: theme.palette.primary.contrastText,
  },
  pattern: {
    position: 'absolute',
    zIndex: 0,
    height: '200px',
    opacity: 0.2,
  },
  leftPattern: {
    top: '50%',
    left: 0,
  },
  rightPattern: {
    top: '40%',
    right: 0,
  },
  mt: {
    marginTop: theme.spacing(2),
  },
}));

export function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={themeMUI}>
      <Container component="main" maxWidth="sm" className={classes.container}>
        <CssBaseline />
        <img
          src={pattern}
          className={classNames([classes.pattern, classes.leftPattern])}
        />
        <img
          src={pattern}
          className={classNames([classes.pattern, classes.rightPattern])}
        />
        <MailOutline className={classes.contrast} fontSize="large" />
        <Typography
          component="h1"
          variant="h5"
          className={classNames([classes.contrast, classes.mt])}>
          Welcome back!
        </Typography>
        <Paper className={classes.paper} elevation={6}>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              className={classes.submit}>
              Login
            </Button>
          </form>
        </Paper>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2" className={classes.contrast}>
              Forgot your password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" className={classes.contrast}>
              Don't have an account? <b>Get Started</b>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
