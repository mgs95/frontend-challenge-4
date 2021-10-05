import FormField from 'components/Shared/FormField';
import React from 'react';

/** CHALLENGE NOTE
 *
 * As we can see in the className of the div, this is something directly related with the Landbot, so
 * it would not be a good idea to add this element in the `components/Shared` directory, as it is a
 * directory reserved for the common application elements.
 */

/**
 * InputBar: Landbot actions bar.
 */
export default function InputBar({ children }) {
  return (
    <div className='landbot-input-container'>
      <FormField>{children}</FormField>
    </div>
  );
}
