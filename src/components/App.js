import React from 'react';

import Chat from './Landbot/Chat';

/** CHALLENGE NOTE
 *
 * General notes:
 *
 * - For documentation, I did not commented components prop types. There are several ways of
 *   doing that, depending on project decissions that goes beyond the refactor of a specific
 *   component. Depending on those decisions (use typescipt, use propTypes, use some jsdoc
 *   library for react...), one way of documenting should be done or another.
 * - You will see several comments like this one in different files.
 */

const chatConfig = {
  brandID: 12235,
  channelToken: 'H-441480-B0Q96FP58V53BJ2J',
  welcomeUrl: 'https://welcome.landbot.io/',
  welcome: [
    {
      samurai: -1,
      type: 'text',
      message: 'Type something to start a conversation with landbot.',
    },
  ],
};

export default function App() {
  return (
    <section id='landbot-app' className='hero is-fullheight is-dark'>
      <div className='hero-body'>
        <div className='chat-container'>
          <div className='landbot-chat'>
            <Chat
              title='Landbot'
              messagePlaceholder='Type here...'
              landbotConfig={chatConfig}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
