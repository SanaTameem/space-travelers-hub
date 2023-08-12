import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Dragons from '../components/Dragons';

describe('Dragons', () => {
  test('Dragons are rendered correctly', () => {
    const myDragons = render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
    expect(myDragons).toMatchSnapshot();
  });
});
