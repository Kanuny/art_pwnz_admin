// @flow
import React from 'react';
import { css } from 'aphrodite';
import { Link } from 'react-router';

import styles from './styles';

type LayoutPropType = {
  children?: any,
}

export default function Layout(props: LayoutPropType) {
  return (
    <div className={css(styles.layout)} >
      <nav className={css(styles.navList)} >
        <Link
          className={css(styles.link)}
          activeClassName={css(styles.active)}
          to="/articles"
        >
          Gallery
        </Link>
        <Link
          activeClassName={css(styles.active)}
          className={css(styles.link)}
          to="/videos"
        >
          Videos
        </Link>
      </nav>
      <section className={css(styles.view)} >
        { props.children }
      </section>
    </div>
  );
}
