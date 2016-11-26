// @flow
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'lodash/fp';

import { add } from '../../redux/modules/articles';

import ArticleFrom from './components/ArticleForm';

export default compose(
  connect(
    () => ({}),
    { onSubmit: add },
  ),
  reduxForm({
    form: 'article',
  }),
)(ArticleFrom);
