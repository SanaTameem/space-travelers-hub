import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../components/Rockets';

describe('Rockets', () => {
  test('Rockets are rendered correctly', () => {
    const myRockets = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(myRockets).toMatchSnapshot();
  });
});
