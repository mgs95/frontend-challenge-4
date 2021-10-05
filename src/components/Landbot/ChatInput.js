import React, { useState } from 'react';

import InputBar from './Layout/InputBar';
import MessageInput from './Form/MessageInput';
import SendMessageButton from './Form/SendMessageButton';

/** CHALLENGE NOTE
 *
 * For now this component is simple, but it is possible for this to grow and include, for
 * instance some actions. This component just handles the form submit and define the order
 * of the elements, so it would be easier to add additional elements without growing in
 * logic or complexity.
 */

/**
 * ChatInput: Represents the input bar located at the bottom of a chat. It handles the user input so
 * it is possible to send new messages.
 *
 * @param {Object} props
 * @param {Object} props.core Landbot core instance.
 * @param {Object} props.placeholder Message input placeholder.
 */
export default function ChatInput({ core, placeholder }) {
  const [message, setMessage] = useState('');
  const resetMessage = () => setMessage('');

  function onSubmit(event) {
    event.preventDefault();

    if (message !== '') {
      core.sendMessage({ message });
      resetMessage();
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <InputBar>
        <MessageInput
          value={message}
          setValue={setMessage}
          placeholder={placeholder}
        />
        <SendMessageButton disabled={message === ''} />
      </InputBar>
    </form>
  );
}
