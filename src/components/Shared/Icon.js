import React from 'react';
import cx from 'classnames';

/** CHALLENGE NOTE
 *
 * Same idea as with Content component.
 *
 * There is another important reson to split this component in a separate one: if one day we decide
 * to change FA with another icon font it would be a way more easy this way as we will only need
 * to apply changes in two files (this one and `constants/icons.js`). Even if we decide to use SVG
 * icons we could refactor with a minimum amount of changes.
 *
 * I decided to install classnames as it is a lightweight library that make in clean the conditional
 * combination of classNames.
 */

export const ICON_SIZE = {
  LARGE: 'is-large',
};

// Extracts image className based on icon size
const image_className = {
  [ICON_SIZE.LARGE]: 'fa-lg',
};

/**
 * Icon: Displays an icon based on FA.
 *
 * @param {Object} props
 * @param {string} props.icon Icon identifier.
 * @param {string} props.size Icon size, taken from ICON_SIZE object.
 */
export default function Icon({ icon, size }) {
  return (
    <span className={cx('icon', size)}>
      <i className={cx('fas', icon, image_className[size])} />
    </span>
  );
}
