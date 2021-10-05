import React from 'react';

/** CHALLENGE NOTE
 *
 * The idea would be to isolate these base components. This isolation make it possible to
 * locate the styles close to them so if we want to update the styles of "content" we know
 * where to search and if we want to remove the component, the styles will be also removed.
 *
 * Another advantage: it is better to repeat <Content> several times that repeting
 * "<div className='content'>" as we get more control over the component and changing things
 * here will apply to all the calls.
 */

/**
 * Content: App content component.
 */
export default function Content({ children }) {
  return <div className='content'>{children}</div>;
}
