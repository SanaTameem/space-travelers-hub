import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Profile from '../components/Profile';
import '@testing-library/jest-dom';

describe('Profile', () => {
  test('Profile is rendered correctly', () => {
    const myProfile = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(myProfile).toMatchSnapshot();
  });
});
