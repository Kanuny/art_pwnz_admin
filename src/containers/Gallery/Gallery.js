// @flow
import { connect } from 'react-redux';

import { load, add } from '../../redux/modules/articles';
import { getById } from '../../redux/modules/article';

import GalleryGrid from './components/GalleryGrid';

export default connect(
  ({ articles }) => ({ articles: articles.entities }),
  { load, add, getById },
)(GalleryGrid);
