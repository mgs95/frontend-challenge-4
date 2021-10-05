import React, { forwardRef } from 'react';

/**
 * MessagesContainer: Landbot messages wrapper. Wraps the body of a chat element, that typically
 * contains the messages of the opened conversation.
 */
function MessagesContainer({ children }, ref) {
  return (
    <div
      id='landbot-messages-container'
      className='landbot-messages-container'
      ref={ref}
    >
      {children}
    </div>
  );
}

export default forwardRef(MessagesContainer);
