// @flow
import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import { css } from 'aphrodite';
import { Link } from 'react-router';

import styles from '../styles';
import FormInput from '../../../components/FormInput/FormInput';
import { TYPES } from '../../../helpers/form';

type FormType = {
  handleSubmit: Function,
  getById: Function,
  removeArticle: Function,
  isAdding: boolean,
  clear: Function,

  params: {
    id?: number,
  },
}

const genreValues = [{
  text: 'Landscape',
  value: 'landscape',
}, {
  text: 'Portrait',
  value: 'portrait',
}, {
  text: 'Still Life',
  value: 'stillLife',
}, {
  text: 'Figurative',
  value: 'figurative',
}];

const imagesFields = [
  { props: { label: 'Preview' }, type: TYPES.IMAGE, name: 'preview' },
  { props: { label: 'Main Image' }, type: TYPES.IMAGE, name: 'main' },
  { props: { label: 'Fragment 1' }, type: TYPES.IMAGE, name: 'fragment1' },
  { props: { label: 'Fragment 2' }, type: TYPES.IMAGE, name: 'fragment2' },
  { props: { label: 'Fragment 3' }, type: TYPES.IMAGE, name: 'fragment3' },
];
const formConfig = [
  { props: { label: 'Name' }, type: TYPES.LOCALE, name: 'name' },
  { props: { label: 'Description', area: true }, type: TYPES.LOCALE, name: 'description' },
  { props: { label: 'Year' }, type: 'text', name: 'year' },
  { props: { label: 'Size' }, type: 'text', name: 'size' },
  { props: { label: 'Genre', values: genreValues }, type: TYPES.SELECT, name: 'genre' },
];
const checkboxesConfig = [
  { props: { label: 'For Sale' }, type: 'checkbox', name: 'forSale' },
];

export default class ArticleForm extends PureComponent { // eslint-disable-line
  props: FormType
  componentDidMount() {
    this.props.clear();

    if (this.props.params.id) {
      this.props.getById(this.props.params.id);
    }
  }
  componentWillUnmount() {
    this.props.clear();
  }
  render() {
    const linkText = '< Back';
    return (
      <form onSubmit={this.props.handleSubmit} >
        <div className={css(styles.btnWrapper)}>
          <Link to="/articles" className={css(styles.backLink)}> {linkText} </Link>
          {
            this.props.isAdding
              ? <button
                className={css(styles.add)}
                onSubmit={this.props.handleSubmit}
              > Add </button>
              : <div>
                <button
                  className={css(styles.edit)}
                  onSubmit={this.props.handleSubmit}
                >
                  Save
                </button>
                <button
                  className={css(styles.remove)}
                  onClick={this.props.removeArticle}
                >
                  Remove
                </button>
              </div>
          }
        </div>
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
      </form>
    );
  }
}
