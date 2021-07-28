import React from 'react';
import { render, screen } from '@testing-library/react';
import AllHoroscopes from './AllHoroscopes';

describe('AllHoroscopes container', () => {
  it('renders a list of horoscopes for today', async () => {
    render(<AllHoroscopes />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
