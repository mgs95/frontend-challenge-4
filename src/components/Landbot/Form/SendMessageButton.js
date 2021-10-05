import React from 'react';
import * as ICONS from 'constants/icons';
import Icon, { ICON_SIZE } from 'components/Shared/Icon';

/** CHALLENGE NOTE
 *
 * Note that I removed the onClick handler (and the onEnter logic at the input). It is a better
 * practice and shorter to use the `form` element, that implements this logic.
 */

/**
 * SendMessageButton: Send message button. Shows a "Send" icon.
 *
 * @param {Object} props
 * @param {Object} props.disabled Disabled prop for the button.
 */
export default function SendMessageButton({ disabled }) {
  return (
    <button
      className='button landbot-input-send'
      type='submit'
      disabled={disabled}
    >
      <Icon icon={ICONS.sendMessage} size={ICON_SIZE.LARGE} />
    </button>
  );
}
