import React from 'react';

/**
 * MessageInput: Message input used by the user to send messages. Controlled input.
 *
 * @param {Object} props
 * @param {Object} props.value Input value.
 * @param {Object} props.setValue Updates the input value.
 * @param {Object} props.placeholder Input placeholder.
 */
export default function MessageInput({ value, setValue, placeholder }) {
  return (
    <input
      aria-labelledby='chat message input'
      className='landbot-input'
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
