import { useEffect, useState } from 'react';
import { parseMessage, parseMessages } from 'utils/Landbot/messages';

/** CHALLENGE NOTE
 *
 * It is helpful to have hooks for instances, in this case the Message instance. It is a good
 * place to locate logic arround it and offers reusability. If filtering/sortening gets bigger,
 * it is easy to split into smaller utilities.
 */

/**
 * useLandbotMessages: Subscribes to a message stream and return messages based on optional
 * filters and sortening.
 *
 * @param {window.Landbot.Core} core Landbot core instance.
 *
 * @param {Object} options Additional options to configure the received messages.
 * @param {boolean} options.sorted If true, the messages will be sorted by timestamp.
 * @param {Array<('text'|'dialog')>} options.types Types of messages to receive.
 *
 * @returns {Array<Object>} Chat messages for the current core instance.
 */
export default function useLandbotMessages(
  core,
  { sorted, types } = {
    types: null,
    sorted: false,
  }
) {
  const [allMessages, setAllMessages] = useState({});
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Subscribe to new messages
    core.pipelines.$readableSequence.subscribe((data) => {
      setAllMessages((messages) => ({
        ...messages,
        [data.key]: parseMessage(data),
      }));
    });

    // Load previous messages
    core.init().then((data) => {
      setAllMessages(parseMessages(data.messages));
    });
  }, [core]);

  // Transform messages into an array of messages and filter/sort the data.
  useEffect(() => {
    let result = Object.values(allMessages);

    if (types) {
      result = result.filter(({ type }) => types.includes(type));
    }

    if (sorted) {
      result = result.sort((a, b) => a.timestamp - b.timestamp);
    }

    setMessages(result);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allMessages]);

  return messages;
}
