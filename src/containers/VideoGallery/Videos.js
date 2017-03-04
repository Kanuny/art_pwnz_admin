// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import cx from 'classnames';
import { css } from 'aphrodite';

import { load as loadVideo } from '../../redux/modules/videos';
import Paginator from '../../components/Paginator/Paginator';

import styles from './styles';

class Grid extends PureComponent {
  props: {
    load: Function,
    videos: Array<Object>,
    count: number,
    page: number,
  }

  componentDidMount() {
    this.props.load(0);
  }

  render() {
    const { videos, page, count, load } = this.props;
    const defaultPostfix = '/default.jpg';
    return (
      <div className={css(styles.videoWrapper)}>
        <section className={css(styles.videosWrapper)}>
          <Link className={css(styles.addBtn)} to="videos/add">
            +
          </Link>
          {
            videos.map((video, index) =>
              <Link
                className={cx(
                  css(styles.videoItem),
                  index % 2 === 0 ? css(styles.left) : '',
                )}
                to={`videos/edit/${video.id}`}
                key={video.id}
              >
                <img
                  key={video.id}
                  width="148"
                  alt="video img preview"
                  height="148"
                  src={video.url.replace('https://www.youtube.com/watch?v=', 'http://img.youtube.com/vi/') + defaultPostfix}
                />
              </Link>,
            )
          }

        </section>
        <Paginator
          page={page}
          pageCount={count}
          onPageChange={(nextPage) => load(nextPage)}
        />
      </div>
    );
  }
}


export default connect(
  ({ videos }) => ({
    videos: videos.entities,
    pageSize: videos.pageCount,
    page: parseInt(videos.page, 10) + 1,
    count: Math.floor((videos.count / videos.pageCount) + 1),
  }),
  { load: loadVideo },
)(Grid);
