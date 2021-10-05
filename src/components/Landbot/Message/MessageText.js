import Content from 'components/Shared/Content';
import P from 'components/Shared/P';
import React from 'react';

/**
 * MessageText: Represents a Landbot chat message text content.
 */
export default function MessageText({ children }) {
  return (
    <div className='media-content landbot-message-content'>
      <Content>
        <P>{children}</P>
      </Content>
    </div>
  );
}
