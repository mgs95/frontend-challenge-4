/** CHALLENGE NOTE
 *
 * I do not know the shape of the message instances, so I will type them as Object.
 * The proper thing to do would be to type them appropiatelly with its type (that would
 * be defined in some common place so it can be reused).
 */

/**
 * parseMessages: parse all messages obtained from a landbot core instance.
 *
 * @param {Object} messages Object containing all the messages.
 * @returns {Object} Parsed messages.
 */
export function parseMessages(messages) {
  return Object.values(messages).reduce((obj, next) => {
    obj[next.key] = parseMessage(next);
    return obj;
  }, {});
}

/**
 * parseMessage: parse a message obtained from a landbot core instance.
 *
 * @param {Object} data message instance.
 * @returns {Object} Parsed message.
 */
export function parseMessage(data) {
  const { key, title, message, samurai, timestamp, type } = data;

  return {
    author: samurai !== undefined ? 'bot' : 'user',
    text: title || message,
    key,
    timestamp,
    type,
  };
}
