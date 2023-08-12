import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from '../components/Missions';

const mockStore = configureMockStore([thunk]);

test('renders Missions component correctly', async () => {
  const store = mockStore({
    mission: {
      missions: [
        {
          id: 'Mission_1',
          mission_name: 'Mission 1',
          description: 'Description for Mission 1',
          reserved: true,
        },
        {
          id: 'Mission_2',
          mission_name: 'Mission 2',
          description: 'Description for Mission 2',
          reserved: false,
        },
      ],
    },
  });

  const { getByText } = render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );

  // Add assertions based on your component's behavior
  expect(getByText('Mission 1')).toBeInTheDocument();
  expect(getByText('Mission 2')).toBeInTheDocument();
});
