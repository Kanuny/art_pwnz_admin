// @flow
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'lodash/fp';
import { browserHistory } from 'react-router';
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

    return (
      <form >

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

        <button onClick={this.props.handleSubmit} > {id ? 'Update' : 'Add'} </button>
        { id ? <button onClick={this.props.removeArticle} > Remove </button> : null }

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
