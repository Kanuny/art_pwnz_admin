// @flow
import React from 'react';
import { css } from 'aphrodite';

import styles from './styles';

type LayoutPropType = {
  children?: any,
}

export default function Layout(props: LayoutPropType) {
  return (
    <div className={css(styles.layout)} >
      <nav className={css(styles.navList)} >
        some nav will be there
      </nav>
      <section className={css(styles.view)} >
        { props.children }
      </section>
    </div>
  );
}
