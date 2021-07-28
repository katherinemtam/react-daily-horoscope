import React from 'react';
import { render, screen } from '@testing-library/jest-dom';
import AllHoroscopes from '../';

describe('AllHoroscopes container', () => {
  it('renders a list of horoscopes for today', async () => {
    render(<AllHoroscopes/>);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
