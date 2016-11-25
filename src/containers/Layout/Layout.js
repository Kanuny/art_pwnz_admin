// @flow
import React from 'react';

type LayoutPropType = {
  children: node,
}

export default function Layout(props: LayoutPropType) {
  console.log(props.children);
  return (
    <div>
      <nav>
        some nav will be there
      </nav>
      <section>
        { props.children }
      </section>
    </div>
  );
}
