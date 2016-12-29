// @flow
import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import { css } from 'aphrodite';

import styles from '../styles';
import FormInput from '../../../components/FormInput/FormInput';
import { TYPES } from '../../../helpers/form';

type FormType = {
  handleSubmit: Function,
  getById: Function,
  removeArticle: Function,

  params: ?Object,
}

const imagesFields = [
  { props: { label: 'Preview' }, type: TYPES.IMAGE, name: 'preview' },
  { props: { label: 'Main Image' }, type: TYPES.IMAGE, name: 'main' },
  { props: { label: 'Fragment 1' }, type: TYPES.IMAGE, name: 'fragment1' },
  { props: { label: 'Fragment 2' }, type: TYPES.IMAGE, name: 'fragment2' },
  { props: { label: 'Fragment 3' }, type: TYPES.IMAGE, name: 'fragment3' },
];
const formConfig = [
  { props: { label: 'Name' }, type: 'text', name: 'name' },
  { props: { label: 'Description' }, type: 'text', name: 'description' },
  { props: { label: 'Year' }, type: 'text', name: 'year' },
  { props: { label: 'Genre' }, type: 'text', name: 'genre' },
  { props: { label: 'Post Name' }, type: 'text', name: 'postName' },
  { props: { label: 'Post Description' }, type: 'text', name: 'postDescription' },
];
const checkboxesConfig = [
  { props: { label: 'Is Hidden' }, type: 'checkbox', name: 'hidden' },
  { props: { label: 'For Sale' }, type: 'checkbox', name: 'forSale' },
];

export default class ArticleForm extends PureComponent { // eslint-disable-line
  props: FormType
  componentDidMount() {
    if (this.props.params.id) {
      this.props.getById(this.props.params.id);
    }
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} >
        <div className={css(styles.fieldWrapper)}>
          <div className={css(styles.imageWrapper)}>
            {
              imagesFields.map((field) =>
                <Field
                  {...field}
                  key={field.name}
                  component={FormInput}
                />,
              )
            }
          </div>
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
            <div className={css(styles.checkboxWrapper)}>
              {
                checkboxesConfig.map((field) =>
                  <Field
                    {...field}
                    key={field.name}
                    component={FormInput}
                  />,
                )
              }
            </div>
          </div>
        </div>

        <button onSubmit={this.props.handleSubmit} > Add </button>
        <button onClick={this.props.removeArticle} > Remove </button>

      </form>
    );
  }
}
