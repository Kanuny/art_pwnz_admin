// @flow
import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  imageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '100px',
    height: '100px',
    border: '1px solid black',
    margin: '10px',
  },
  imgInput: {
    display: 'none',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  img: {
    display: 'inline-block',
    width: '100px',
    height: '100px',
    border: '1px solid black',
  },
});
