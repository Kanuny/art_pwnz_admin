import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite';

import styles from '../styles';

type GalleryPropType = {
  articles: Array<Object>,

  load: Function,
}

export default class GalleryGrid extends PureComponent {
  props: GalleryPropType

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
      <div className={css(styles.gridWrapper)}>
        <Link className={css(styles.addBtn)} to="/article/new"> + </Link>

        {
          this.props.articles.map((item) =>
            <Link
              className={css(styles.addBtn)}
              to={`/article/${item.id}`}
              key={item.id}
            >
              <img // eslint-disable-line
                className={css(styles.addBtn)}
                alt="banner preview"
                src={item.images[0].preview}
              />
            </Link>,
          )
        }
      </div>
    );
  }
}
