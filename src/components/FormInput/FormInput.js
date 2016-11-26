// @flow
import React, { PureComponent } from 'react';
import { css } from 'aphrodite';

import { TYPES } from '../../helpers/form';

import styles from './styles';

type FormInputType = {
  meta: Object,
  input: Object,
  type?: string,
  type: ?string,
  label: string,
}
class Image extends PureComponent {
  props: Object
  state = {
    data: '',
  }
  onFileChange = (e) => {
    const { input } = this.props;
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.addEventListener('load', () => {
        if (reader.result.substr(0, 10) === 'data:image') {
          this.setState({ data: reader.result });
          input.onChange(reader.result);
        }
      }, false);
      reader.readAsDataURL(file);
    }
  }
  render() {
    const { input } = this.props;
    const { data } = this.state;
    return (
      <label className={css(styles.imageWrapper)} >
        <input className={css(styles.imgInput)} type="file" onChange={this.onFileChange} />
        { data ? <img className={css(styles.img)} alt="banner preview" src={data} /> : null }
      </label>
    );
  }
}
export default class FromInput extends PureComponent {
  props: FormInputType
  renderInput = () => {
    const { input, type, label } = this.props;
    switch (type) {
      case TYPES.IMAGE: {
        return <Image input={input} />;
      }

      default: {
        return (
          <input
            {...input}
            type={type || 'text'}
            placeholder={label}
          />
        );
      }
    }
  }
  render() {
    const { meta, label } = this.props;
    return (
      <label className={css(styles.inputWrapper)} >
        <span> {label} </span>
        {this.renderInput()}
        {meta.touched && meta.error ? <span> {meta.error} </span> : null}
      </label>
    );
  }
}
