// @flow
import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  fieldWrapper: {
    display: 'flex',
    margin: '15px 40px',
    flexDirection: 'column',
  },
  imageWrapper: {
    display: 'flex',
  },
  inputWrapper: {
    marginLeft: '10px',
  },
  view: {
    flex: '1',
    margin: '0 0 0 10px',
  },
  backLink: {
    color: 'black',
    textDecoration: 'none',
  },
  btnWrapper: {
    width: '840px',
    margin: '20px 0 10px 40px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  add: {
    backgroundColor: '#468195',
    border: '1px solid #468195',
    width: '120px',
    height: '25px',
    color: 'white',
  },
  remove: {
    backgroundColor: '#cd0000',
    border: '1px solid #cd0000',
    width: '120px',
    height: '25px',
    color: 'white',
  },
  edit: {
    backgroundColor: '#468195',
    border: '1px solid #468195',
    width: '120px',
    height: '25px',
    color: 'white',
    marginLeft: '15px',
  },
});
