// @flow
import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  imageWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '150px',
    height: '150px',
    backgroundColor: '#ccd0d1',
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
    width: '150px',
    height: '150px',
  },
  checkInput: {
    margin: '5px 0',
  },
  localWrapper: {
    display: 'flex',
    width: '830px',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#c3b5b5',
    margin: '5px 0 10px 0',
    border: 'none',
    height: '25px',
    width: '250px',
    paddingLeft: '4px',
  },
  localInput: {
    width: '380px',
    backgroundColor: '#c3b5b5',
    margin: '5px 0 10px 0',
    border: 'none',
    height: '25px',
    paddingLeft: '4px',
  },
  localArea: {
    width: '380px',
    backgroundColor: '#c3b5b5',
    margin: '5px 0 10px 0',
    border: 'none',
    paddingLeft: '4px',
  },
  addBtn: {
    width: '100%',
    fontSize: '50pt',
    color: 'black',
    fontWeight: '100',
    textDecoration: 'none',
    boxSizing: 'border-box',
    padding: '30px',
    textAlign: 'center',
  },
});
