import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PlayersIcon from '@material-ui/icons/People';
import PlayerSlider from './pages/game/home/players/PlayerSlider';
import Switch from '@material-ui/core/Switch';

const styles = (theme) => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
    textAligh: 'center'
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  // searchInput: {
  //   fontSize: theme.typography.fontSize,
  // },
  block: {
    display: 'block',
  },
  // addUser: {
  //   marginRight: theme.spacing(1),
  // },
  contentWrapper: {
    margin: '40px 16px',
  },
});

function Content(props) {

  /* 
    全体のprops
  */
  const { classes } = props;


  /* 
    スイッチの制御
    hasEMRight:緊急会議権の有無
    isExist:ゲームへの参加の有無
  */
  const [state, setState] = React.useState({
    black: {
      hasEMRight: true,
      isExist: true,
    },
    blue: {
      hasEMRight: true,
      isExist: true,
    },
    brown: {
      hasEMRight: true,
      isExist: true,
    }
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  
  return (
    <Paper className={classes.paper}>
      <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
        <Toolbar>
            <Grid container>
              <Grid item xs>
                <PlayersIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs>
                <SearchIcon className={classes.block} color="inherit" />
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  Detective
                </Typography>
              </Grid>
              <Grid item xs>
                <SearchIcon className={classes.block} color="inherit" />
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
          <Grid container alignItems='center'>

            {/* 
              Black
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Black
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
            </Grid>

            {/* 
              Blue
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Blue
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
            </Grid>

            {/* 
              Brawn
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Brawn
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
            </Grid>

            {/* 
              Black
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Black
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
            </Grid>

            {/* 
              Black
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Black
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
            </Grid>

            {/* 
              Black
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Black
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
            </Grid>

            {/* 
              Black
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Black
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
            </Grid>

            {/* 
              Black
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Black
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
            </Grid>

            {/* 
              Black
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Black
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
            </Grid>

            {/* 
              Black
            */}
            <Grid container>
              <Grid item xs>
                <Typography>
                  Black
                </Typography>
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.hasEMRight}
                  onChange={handleChange}
                  name="hasEMRight"
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
              </Grid>
              <Grid item xs={4}>
                <PlayerSlider />
              </Grid>
              <Grid item xs>
                <Switch
                  checked={state.black.isExist}
                  onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </Grid>
            </Grid>
          </Grid>
      </div>
    </Paper>
  );
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
