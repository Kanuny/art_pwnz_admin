// @flow
import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  layout: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
  },
  navList: {
    width: '220px',
    backgroundColor: '#468195',
    display: 'flex',
    color: '#c3b5b5',
    flexDirection: 'column',
    alignItems: 'center',
  },
  view: {
    flex: '1',
    height: '100vh',
    overflow: 'auto',
    margin: '0 0 0 10px',
  },
  active: {
    color: 'white',
  },
  link: {
    padding: '20px',
    textDecoration: 'none',
    display: 'block',
  },
});
