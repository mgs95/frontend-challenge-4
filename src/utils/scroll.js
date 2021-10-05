/**
 * scrollBottom: Performs a scroll to botton on the specified html element.
 *
 * @param {HTMLElement} element Target on which the scroll will be dispatched.
 */
export function scrollBottom(element) {
  if (element) {
    element.scrollTo({
      top: element.scrollHeight,
      behavior: 'smooth',
    });
  }
}
