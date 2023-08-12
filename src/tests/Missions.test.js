import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Missions from '../components/Missions';

describe('Missions', () => {
  test('Missions are rendered correctly', () => {
    const myMissions = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(myMissions).toMatchSnapshot();
  });
});
