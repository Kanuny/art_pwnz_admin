// @flow
import { connect } from 'react-redux';

import { load, add } from '../../redux/modules/articles';

import GalleryGrid from './components/GalleryGrid';

export default connect(
  ({ articles }) => ({ articles: articles.entities }),
  { load, add },
)(GalleryGrid);
