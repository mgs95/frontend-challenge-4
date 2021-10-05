import React from 'react';
import MessageAvatar from './MessageAvatar';
import MessageText from './MessageText';

/** CHALLENGE NOTE
 *
 * Avatar is not used at the interface, the src is fixed and the html element hidden. In
 * other situation I would have removed it as it is no longer needed, but for this case
 * I will leave it as it is, in case is something that works that way for some
 * future steps about this challenge.
 */

/**
 * Message: Landbot message component. Represents a message with its asociated avatar (if any).
 *
 * @param {Object} props
 * @param {Object} props.message Landbot message instance.
 * @param {string} props.message.author Name of the message author.
 * @param {string} props.message.text Text content of the message.
 */
export default function Message({ message }) {
  const { author, text } = message;

  return (
    <article data-author={author} className='media landbot-message'>
      <MessageAvatar author={author} avatarSrc='http://i.pravatar.cc/100' />
      <MessageText>{text}</MessageText>
    </article>
  );
}
