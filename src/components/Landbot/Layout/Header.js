import Subtitle from 'components/Shared/Subtitle';
import React from 'react';

/**
 * Header: Landbot chat header element.
 */
export default function Header({ children }) {
  return (
    <header className='landbot-header'>
      <Subtitle>{children}</Subtitle>
    </header>
  );
}
