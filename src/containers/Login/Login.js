// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { css } from 'aphrodite';
import cx from 'classnames';
import { compose } from 'lodash/fp';

import { login } from '../../redux/modules/auth';

import styles from './styles';

type LoginPropsType = {
  login: Function
}

type LoginType = {
  handleSubmit: Function,
}

class Login extends PureComponent {
  props: LoginType

  renderInput = (field) =>
    <label className={css(styles.label)}>
      <input {...field.input} type={field.type} className={css(styles.input)} />

      {
        field.meta.touched
        && field.meta.error
        && <span className={css(styles.error)}>{field.meta.error}</span>
      }
    </label>

  render() {
    return (
      <form
        className={css(styles.form)}
        onSubmit={this.props.handleSubmit}
      >
        <h1> Login </h1>
        <Field
          component={this.renderInput}
          name="username"
          placeholder="User Name"
          type="text"
        />
        <Field
          component={this.renderInput}
          name="password"
          placeholder="Password"
          type="password"
        />

        <button
          className={cx(css(styles.button), 'btn btn-green')}
          onSubmit={this.props.handleSubmit}
        >
          Login
        </button>
      </form>
    );
  }
}

const LoginForm = compose(
  reduxForm({
    form: 'login',
  }),
)(Login);

function LoginContainer(props: LoginPropsType) {
  return (
    <div>
      <LoginForm
        onSubmit={props.login}
      />
    </div>
  );
}

export default connect(
  () => ({}),
  ({ login }),
)(LoginContainer);
