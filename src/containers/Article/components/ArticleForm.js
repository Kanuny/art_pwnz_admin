// @flow
import React, { PureComponent } from 'react';
import { Field } from 'redux-form';  // ES6

type FormType = {
  handleSubmit: Function,
}

export default class ArticleForm extends PureComponent {
  props: FormType

  renderField = (field) => (
    <label className="input-row">
      <span> {field.name} </span>
      <input {...field.input} type={field.type || 'text'} placeholder={field.name} />
      {
        field.meta.touched && field.meta.error &&
        <span className="error">{field.meta.error}</span>
      }
    </label>
  )

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} >
        <Field
          name="name"
          component={this.renderField}
        />
        <Field
          name="description"
          component={this.renderField}
        />
        <Field
          name="hidden"
          type="checkbox"
          component={this.renderField}
        />
        <Field
          name="year"
          component={this.renderField}
        />
        <Field
          name="genre"
          component={this.renderField}
        />
        <Field
          name="forSale"
          type="checkbox"
          component={this.renderField}
        />
        <button onSubmit={this.props.handleSubmit} > Add </button>
      </form>
    );
  }
}
