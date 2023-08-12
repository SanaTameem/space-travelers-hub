import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
  test('Heading routes are working correclty', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const rocketRout = screen.getByText('Rockets');
    expect(rocketRout).toMatchSnapshot();
  });

  test('Heading routes are working correclty', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const rocketRout = screen.getByText('My Profile');
    expect(rocketRout).toMatchSnapshot();
  });
});
