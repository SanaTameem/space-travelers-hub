import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Rockets from '../components/Rockets';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const mockStore = configureMockStore([thunk]);

test('renders rockets component correctly', async () => {
  jest.setTimeout(30000);
  const store = mockStore({
    rocket: {
      rocketsData: [
        {
          id: 'Rocket_1',
          name: 'Rocket 1',
          description: 'Description for Rocket 1',
          reserved: true,
          type: 'rocket',
        },
        {
          id: 'Rocket_2',
          name: 'Rocket 2',
          description: 'Description for Rocket 2',
          reserved: false,
          type: 'rocket',
        },

      ],
    },
  });

  const { getByText } = render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

  await store.dispatch(fetchRockets());

  expect(getByText('Rocket 1')).toBeInTheDocument();
  expect(getByText('Rocket 2')).toBeInTheDocument();
});
