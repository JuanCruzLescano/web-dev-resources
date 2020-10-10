import {Grid, makeStyles, Typography} from '@material-ui/core'
import React from 'react'
import Particles from 'react-particles-js'
import { Link } from 'react-router-dom';
import Typical from 'react-typical'

const useStyles = makeStyles({
  home: {
    width: '100%',
    height: '100vh',
  },
  title: {
    fontFamily: 'monospace'
  },
  typical: {
    fontFamily: 'monospace'
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'monospace',
    marginTop: '16px',
    color: '#212121',
    padding: '8px',
    border: '1px solid #3d3d3d',
    borderRadius: '4px',
    transition: '0.3s',
    '&:hover': {
      backgroundColor: '#212121',
      color: '#fafafa',
      borderColor: '#212121'
    }
  }
})

function Home() {
  const classes = useStyles()

  return (
    <>
      <Grid
        container
        className={classes.home}
        justify="center"
        alignContent="center"
      >
        <Grid item xs={12}>
          <Typography align="center" noWrap variant="h4" className={classes.title}>
            {'<Web Dev Resources/>'}
          </Typography>
          <Typography align="center" variant="h5" className={classes.typical}>
            <Typical
              steps={[
                'Learning platforms',
                1000,
                'Free hosting',
                1000,
                'Coding challenge platforms',
                1000,
                'Freelancing platforms',
                1000,
                'Remote jobs platforms',
                1000,
                'Photos',
                1000,
                'Illustrations',
                1000,
                'Podcasts',
                1000
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </Typography>
        </Grid>
        <Link to='/category' className={classes.link}>{'<a> RESOURCES </a>'}</Link>
      </Grid>
      <Particles
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: -100,
        }}
        width={'100%'}
        height={'100%'}
        params={{
          particles: {
            color: '#3e3e3e',
            number: {value: 50},
            lineLinked: {color: '#3e3e3e'},
          },
        }}
      />
    </>
  )
}

export default Home
