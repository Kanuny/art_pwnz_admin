import React from 'react';
import cx from 'classnames';
import { css } from 'aphrodite';

import styles from './styles';

function getPaginationState(currentPage, pagesCount) {
  if (pagesCount <= 1) {
    return [1];
  }

  if (pagesCount < 5) {
    return Array.from({ length: pagesCount }).map((item, index) => index + 1);
  }

  if (currentPage < 5) {
    return [1, 2, 3, 4, 5, undefined, pagesCount];
  }

  if (currentPage > pagesCount - 4) {
    return [
      1,
      undefined,
      pagesCount - 4,
      pagesCount - 3,
      pagesCount - 2,
      pagesCount - 1,
      pagesCount,
    ];
  }

  return [1, undefined, currentPage - 1, currentPage, currentPage + 1, undefined, pagesCount];
}

export default function Paginator(props: Object) {
  console.log('test');
  const { page, pageCount, onPageChange } = props;
  console.log('pages', props);
  const pages = getPaginationState(page, pageCount);
  const prevPage = page - 2 <= 0
    ? 0
    : page - 2;

  const nextPage = page >= pageCount
    ? pageCount
    : page;

  return (
    <div className={css(styles.pageContainer)} >
      {
        page === 1
          ? null
          : <button className={css(styles.pageControl)} onClick={() => onPageChange(prevPage)} > prev </button>
      }
      {
        pages.map((pageIndex, index) =>
          <button
            className={
              cx(
                isNaN(pageIndex) ? css(styles.dotted) : '',
                css(styles.pageBtn),
                pageIndex === page ? css(styles.selected) : '',
              )
            }
            key={`${pageIndex || 0}_${index}`}
            onClick={() => (pageIndex ? onPageChange(pageIndex - 1) : null)}
          >
            {!isNaN(pageIndex) ? (pageIndex) : '...'}
          </button>)
      }
      {
        page === pageCount
          ? null
          : <button className={css(styles.pageControl)} onClick={() => onPageChange(nextPage)}> next </button>
      }
    </div>
  );
}
