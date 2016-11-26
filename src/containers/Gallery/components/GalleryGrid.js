import React, { PureComponent } from 'react';
import { Link } from 'react-router';

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
      <div>
        <Link to="/article/new"> + </Link>

        Some gallery there
        { this.props.articles.length }
      </div>
    );
  }
}
