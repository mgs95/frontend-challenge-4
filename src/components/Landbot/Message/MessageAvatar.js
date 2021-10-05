import Avatar from 'components/Shared/Avatar';
import React from 'react';

/**
 * MessageAvatar: Message avatar. Displays the avatar of the message author.
 *
 * @param {Object} props
 * @param {string} props.author Name of the message author.
 * @param {string} props.avatarSrc Avatar image src value.
 */
export default function MessageAvatar({ author, avatarSrc }) {
  return (
    <figure
      className='media-left landbot-message-avatar'
      aria-label='Message author image'
    >
      <Avatar src={avatarSrc} alt={`${author} avatar`} />
    </figure>
  );
}
