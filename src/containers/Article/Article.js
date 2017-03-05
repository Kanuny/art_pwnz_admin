// @flow
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'lodash/fp';
import { browserHistory } from 'react-router';

import { add, remove as removeArticle, update } from '../../redux/modules/articles';
import { getById, clear } from '../../redux/modules/article';

import ArticleFrom from './components/ArticleForm';

export default compose(
  connect(
    ({ article, images }) => ({
      initialValues: {
        ...article.entity,
        ...images.reduce((memo, image) => ({
          ...memo,
          [image.name]: image.preview,
        }), {}),
      },
    }),
    { add, update, getById, removeArticle, clear },
    (props, methods, ownProps) => ({
      ...props,
      ...methods,
      ...ownProps,
      isAdding: !ownProps.params.id,
      onSubmit: (values) => (!ownProps.params.id
        ? methods.add(values).then(() => browserHistory.push('/articles'))
        : methods.update(values, props.initialValues).then(() => browserHistory.push('/articles'))),
      removeArticle: (e) => {
        e.preventDefault();
        const answer = confirm('are you sure you want to delete item?');
        if (!answer) {
          return;
        }

        methods
          .removeArticle(props.initialValues.id)
          .then(() => browserHistory.push('/articles'));
      },

    }),
  ),
  reduxForm({
    form: 'article',
    enableReinitialize: true,
  }),
)(ArticleFrom);
