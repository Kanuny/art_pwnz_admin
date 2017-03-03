import { StyleSheet } from 'aphrodite';

const blue = '#6D8BAD';

export default StyleSheet.create({
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  pageControl: {
    color: 'white',
    margin: '5px',
    border: `1px solid ${blue}`,
    backgroundColor: blue,
    padding: '4px 5px',
    cursor: 'pointer',
  },
  pageBtn: {
    color: blue,
    backgroundColor: 'white',
    border: `1px solid ${blue}`,
    margin: '5px',
    padding: '4px 5px',
    cursor: 'pointer',
  },
  selected: {
    color: 'white',
    backgroundColor: blue,
  },
});
