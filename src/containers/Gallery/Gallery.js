// @flow
import { connect } from 'react-redux';

import { load, add } from '../../redux/modules/articles';

import GalleryGrid from './components/GalleryGrid';

export default connect(
  ({ articles }) => ({
    articles: articles.entities,
    pageSize: articles.pageCount,
    page: parseInt(articles.page, 10) + 1,
    count: Math.floor(articles.count / (articles.pageCount + 1)) + 1,
  }),
  { load, add },
)(GalleryGrid);
