import React, { useEffect, useRef } from 'react';
import MessagesContainer from './Layout/MessagesContainer';
import Message from './Message/Message';
import useLandbotMessages from 'hooks/Landbot/useLandbotMessages';
import { scrollBottom } from 'utils/scroll';

/**
 * ChatMessages: Get messages from a landbot core instance and represents them in order, the same
 * way chats do.
 *
 * @param {Object} props
 * @param {Object} props.core Landbot core instance.
 */
export default function ChatMessages({ core }) {
  const messages = useLandbotMessages(core, {
    types: ['text', 'dialog'],
    sorted: true,
  });
  const containerRef = useRef(null);

  useEffect(() => {
    scrollBottom(containerRef.current);
  }, [messages]);

  return (
    <MessagesContainer ref={containerRef}>
      {messages.map((message) => (
        <Message message={message} key={message.key} />
      ))}
    </MessagesContainer>
  );
}
