// @flow
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'lodash/fp';
import { browserHistory, Link } from 'react-router';
import React, { PureComponent } from 'react';
import { css } from 'aphrodite';

import FormInput from '../../components/FormInput/FormInput';
import {
  add,
  getById,
  remove as removeVideo,
  update as updateVideo,
} from '../../redux/modules/videos';
import { TYPES } from '../../helpers/form';

import styles from './styles';

type FormType = {
  handleSubmit: Function,
  getById: Function,
  removeArticle: Function,
  initialize: Function,

  params: {
    id?: number,
  },
}

// const locales = ['en', 'ru'];

const formConfig = [
  { props: { label: 'Name' }, type: TYPES.LOCALE, name: 'name' },
  { props: { label: 'Description' }, type: TYPES.LOCALE, name: 'description' },
  { props: { label: 'Url' }, type: 'text', name: 'url' },
];

class VideoForm extends PureComponent { // eslint-disable-line
  props: FormType
  componentDidMount() {
    if (this.props.params.id) {
      this.props
        .getById(this.props.params.id)
        .then(({ result }) => this.props.initialize(result));
    }
  }
  render() {
    const { id } = this.props.params;
    const linkText = '< Add new Video';

    return (
      <form >
        <header className={css(styles.btnWrapper)}>
          <Link to="/articles" className={css(styles.backLink)}> {linkText} </Link>
          <div>
            <button
              className={css(styles.add)}
              onClick={this.props.handleSubmit}
            > {id ? 'Update' : 'Add'} </button>
            {
              id
              ? <button
                className={css(styles.remove)}
                onClick={this.props.removeArticle}
              >
                Remove
              </button>
              : null
            }
          </div>
        </header>
        <div className={css(styles.inputWrapper)}>
          <div className={css(styles.textWrapper)}>
            {
              formConfig.map((field) =>
                <Field
                  {...field}
                  key={field.name}
                  component={FormInput}
                />,
              )
            }
          </div>
        </div>
      </form>
    );
  }
}

export default compose(
  connect(
    () => ({}),
    { add, removeVideo, updateVideo, getById },
    (props, methods, ownProps) => ({
      ...props,
      ...methods,
      ...ownProps,
      onSubmit: (values) => (
        ownProps.params.id
          ? methods.updateVideo(ownProps.params.id, values).then(() => browserHistory.push('/videos'))
          : methods.add(values).then(() => browserHistory.push('/videos'))
      ),
      removeArticle: (e) => {
        e.preventDefault();
        methods
          .removeVideo(ownProps.params.id.toString())
          .then(() => browserHistory.push('/videos'));
      },
    }),
  ),
  reduxForm({
    form: 'video',
   // enableReinitialize: true,
  }),
)(VideoForm);
