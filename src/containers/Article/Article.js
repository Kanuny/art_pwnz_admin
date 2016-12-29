// @flow
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'lodash/fp';
import { browserHistory } from 'react-router';

import { add, remove as removeArticle } from '../../redux/modules/articles';
import { getById } from '../../redux/modules/article';

import ArticleFrom from './components/ArticleForm';

export default compose(
  connect(
    ({ article }) => ({
      initialValues: {
        ...article.entity,
      },
    }),
    { onSubmit: add, getById, removeArticle },
    (props, methods, ownProps) => ({
      ...props,
      ...methods,
      ...ownProps,
      onSubmit: (values) =>
        methods.onSubmit(values).then(() => browserHistory.push('/articles')),
      removeArticle: () =>
        methods
          .removeArticle(props.initialValues.id)
          .then(() => browserHistory.push('/articles')),
    }),
  ),
  reduxForm({
    form: 'article',
    enableReinitialize: true,
  }),
)(ArticleFrom);
