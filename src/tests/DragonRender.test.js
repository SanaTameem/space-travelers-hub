import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Dragons from '../components/Dragons';
import { fetchDragons } from '../redux/dragons/dragonsSlice';

const mockStore = configureMockStore([thunk]);

test('renders dragons component correctly', async () => {
  const store = mockStore({
    dragon: {
      dragonsData: [
        {
          id: 'Dragon_1',
          name: 'Dragon 1',
          description: 'Description for Dragon 1',
          reserved: true,
          type: 'dragon',
        },
        {
          id: 'Dragon_2',
          name: 'Dragon 2',
          description: 'Description for Dragon 2',
          reserved: false,
          type: 'dragon',
        },

      ],
    },
  });

  const { getByText } = render(
    <Provider store={store}>
      <Dragons />
    </Provider>,
  );

  await store.dispatch(fetchDragons());

  expect(getByText('Dragon 1')).toBeInTheDocument();
  expect(getByText('Dragon 2')).toBeInTheDocument();
});
