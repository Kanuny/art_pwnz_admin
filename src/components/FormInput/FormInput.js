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
  area: ?boolean,
}

function Locale(props: Object) {
  const { input, area } = props;

  return (!area ?
    <div className={css(styles.localWrapper)}>
      <input
        className={css(styles.localInput)}
        placeholder="en"
        value={input.value.ru || ''}
        onChange={(e) => input.onChange({ en: input.value.en || '', ru: e.target.value })}
      />
      <input
        className={css(styles.localInput)}
        placeholder="ru"
        value={input.value.en || ''}
        onChange={(e) => input.onChange({ ru: input.value.ru || '', en: e.target.value })}
      />
    </div> : <div className={css(styles.localWrapper)}>
      <textarea
        rows="5"
        className={css(styles.localArea)}
        placeholder="en"
        value={input.value.ru || ''}
        onChange={(e) => input.onChange({ en: input.value.en || '', ru: e.target.value })}
      />
      <textarea
        rows="5"
        className={css(styles.localArea)}
        placeholder="ru"
        value={input.value.en || ''}
        onChange={(e) => input.onChange({ ru: input.value.ru || '', en: e.target.value })}
      />
    </div>
  );
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
        { !data && !input.value ? <span className={css(styles.addBtn)}> + </span> : null }
        { data || input.value ? <img className={css(styles.img)} alt="banner preview" src={data || input.value} /> : null }
      </label>
    );
  }
}
export default class FromInput extends PureComponent {
  props: FormInputType
  renderInput = () => {
    const { input, type, label, area } = this.props;
    switch (type) {
      case TYPES.IMAGE: {
        return <Image input={input} />;
      }
      case TYPES.LOCALE: {
        return <Locale input={input} area={area} />;
      }

      default: {
        return (
          <input
            {...input}
            type={type || 'text'}
            placeholder={label}
            className={css(type === 'checkbox' ? styles.checkInput : styles.input)}
          />
        );
      }
    }
  }
  render() {
    const { meta, label } = this.props;
    return (
      <label className={css(styles.inputWrapper)} >
        <span className={css(styles.inputLabel)}> {label} </span>
        {this.renderInput()}
        {meta.touched && meta.error ? <span> {meta.error} </span> : null}
      </label>
    );
  }
}
