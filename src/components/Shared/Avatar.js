import React from 'react';

export const AVATAR_SIZE = {
  DEFAULT: 64,
};

/**
 * Avatar: Displays a rounded avatar for the specified source.
 *
 * @param {Object} props
 * @param {string} props.src image source for the avatar.
 * @param {string} props.alt alternative text for the image.
 * @param {number} props.size size of the avatar, must be chosen from AVATAR_SIZE object.
 */
export default function Avatar(
  { src, alt, size } = { size: AVATAR_SIZE.DEFAULT }
) {
  return (
    <p className={`image is-${size}x${size}`}>
      <img className='is-rounded' src={src} alt={alt} />
    </p>
  );
}
