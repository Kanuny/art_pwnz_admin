import React, { PureComponent } from 'react';

type GalleryPropType = Object

export default class Gallery extends PureComponent {
  props: GalleryPropType

  componentDidMount() {
    console.log('!');
  }

  render() {
    return (
      <div>
        Some gallery there
      </div>
    );
  }
}
