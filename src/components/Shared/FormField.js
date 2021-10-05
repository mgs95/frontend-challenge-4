import React from 'react';

/**
 * FormField: App form field controller component.
 */
export default function FormField({ children }) {
  return (
    <div className='field'>
      <div className='control'>{children}</div>
    </div>
  );
}
