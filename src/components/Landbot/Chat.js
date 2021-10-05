import React from 'react';
import Header from 'components/Landbot/Layout/Header';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import useLandbot from 'hooks/Landbot/useLandot';

/** CHALLENGE NOTE
 *
 * It is important for this kind of components to receive configuration from its parent, as it is
 * a generic Chat component.
 *
 * Note that Chat component is now receaving some texts as properties ("title" and"messagePlaceholder").
 * I did that because it is highly probable those values will change if this component is reused.
 *
 * Note that, if we wanted to add i18n, this text should be replaced with some ids (that will be used to
 * extract the texts).
 *
 * Note that I documented landbotConfig as an Object because this is a declaration that should be extracted
 * from somewhere else.
 */

/**
 * Chat: Displays a Landbot chat based on a provided configuration.
 *
 * @param {Object} props
 * @param {Object} props.landbotConfig Configuration for the Landbot core instance.
 * @param {string} props.title Chat title, displayed at the top.
 * @param {string} props.messagePlaceholder Message input placeholder.
 */
export default function Chat({ landbotConfig, title, messagePlaceholder }) {
  const core = useLandbot(landbotConfig);

  return (
    <>
      <Header>{title}</Header>
      <ChatMessages core={core} />
      <ChatInput core={core} placeholder={messagePlaceholder} />
    </>
  );
}
