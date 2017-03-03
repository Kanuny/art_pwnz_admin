import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { css } from 'aphrodite';

import styles from '../styles';
import Paginator from '../../../components/Paginator/Paginator';

type GalleryPropType = {
  articles: Array<Object>,
  count: number,
  page: number,

  load: Function,
}

export default class GalleryGrid extends PureComponent {
  props: GalleryPropType

  componentDidMount() {
    this.props.load();
  }

  render() {
    const { load, page, count } = this.props;
    return (
      <div>
        <div className={css(styles.gridWrapper)}>
          <Link className={css(styles.addBtn)} to="/article/new"> + </Link>

          {
            this.props.articles.map((item) =>
              <Link
                className={css(styles.editBtn)}
                to={`/article/${item.id}`}
                key={item.id}
              >
                <img // eslint-disable-line
                  className={css(styles.img)}
                  alt="banner preview"
                  src={item.images[0].preview}
                />
              </Link>,
            )
          }
        </div>
        <Paginator
          page={page}
          pageCount={count}
          onPageChange={(nextPage) => load(nextPage)}
        />
      </div>
    );
  }
}
