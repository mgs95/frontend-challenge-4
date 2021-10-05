import { useMemo } from 'react';

/** CHALLENGE NOTE
 *
 * It is not a good practice to use global variables (and also it would make it harder if we wanted
 * to increse the number of chats) so I included the initialization in a reusable hook.
 *
 * Is configurable so it is easy to extend and reuse.
 *
 * Note the use of `useMemo`, it is important for this instance not to be reinitilialized if config
 * does not change, so using `useMemo` here make it safer.
 */

/**
 * useLandbot: Creates a landbot core instance.
 *
 * @param {Object} config Landbot configuration.
 * @param {number} config.brandId Landbot brand identifier.
 * @param {string} config.channelToken Unique identifier for the opened channel.
 * @param {string} config.welcomeUrl Welcome site url.
 * @param {Array<{samurai: number, type: string, message: string}>} config.welcome Initial messages
 *
 * @returns {window.Landbot.Core} A memoized landbot core instance.
 */
export default function useLandbot({
  brandID,
  channelToken,
  welcomeUrl,
  welcome,
}) {
  return useMemo(
    () =>
      new window.Landbot.Core({
        firebase: window.firebase,
        brandID,
        channelToken,
        welcomeUrl,
        welcome,
      }),
    [brandID, channelToken, welcomeUrl, welcome]
  );
}
