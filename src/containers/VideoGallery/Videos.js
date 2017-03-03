// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { load } from '../../redux/modules/videos';

class Grid extends PureComponent {
  props: {
    load: Function,
    videos: Array<Object>,
  }

  componentDidMount() {
    this.props.load();
  }

  render() {
    const { videos } = this.props;
    return (
      <section>
        videos
        <Link to="videos/new">
          +
        </Link>
        {
          videos.map((video) => (
            <Link key={video.id} to={`videos/${video.id}`} >
              <span> { video.name.ru} </span>
              <span> { video.url} </span>
            </Link>
          ))
        }
      </section>
    );
  }
}


export default connect(
  ({ videos }) => ({ videos: videos.entities }),
  { load },
)(Grid);
