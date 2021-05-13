import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import TabPanel from '../../../components/TabPanel';
import { withStyles } from '@material-ui/core/styles';
import Site from './site/Site';
import Terms from './terms/Terms';
import Header from '../../../components/Header';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
  main: {
    flex: 1,
    padding: theme.spacing(6, 4),
    background: '#eaeff1',
  },
  secondaryBar: {
    zIndex: 0,
  },
  menuButton: {
    marginLeft: -theme.spacing(1),
  },
  iconButtonAvatar: {
    padding: 4,
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  button: {
    borderColor: lightColor,
  },
});

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function About(props) {
  const { classes, onDrawerToggle } = props;

  /* 
    Tabの制御と状態管理
  */
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      {/* 
        ヘッダー部
      */}
      {/* タブを除くヘッダー */}
      <Header onDrawerToggle={onDrawerToggle} pageName='About' />

      {/* タブ */}
      <AppBar
        component='div'
        className={classes.secondaryBar}
        color='primary'
        position='static'
        elevation={0}
      >
        <Tabs value={value} onChange={handleChange} textColor='inherit'>
          <Tab textColor='inherit' label='Site' {...a11yProps(0)} />
          <Tab textColor='inherit' label='Terms' {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <main className={classes.main}>
        <TabPanel value={value} index={0} className={classes.mapPanel}>
          <Site />
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.mapPanel}>
          <Terms />
        </TabPanel>
      </main>
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(About);
