import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import RocketItem from '../components/RocketItem/RocketItem';
import store from '../redux/store';

const rocketsDummyData = [
  {
    rocket_id: '1',
    rocket_name: 'rocket 1',
    rocket_type: 'rocket',
    flickr_images: ['https://via.placeholder.com/150'],
    description: 'Rocket 1',
    reserved: false,
  },
];

let tree = null;
describe('Testing rockets render', () => {
  beforeEach(() => {
    rocketsDummyData.reserved = !rocketsDummyData.reserved;
    tree = render(
      <Provider store={store}>
        <ul className="flex flex-col gap-4 mt-16">
          {rocketsDummyData.map((rocket) => (
            <li
              key={rocket.id}
              className="flex gap-6 bg-white pl-2 pr-5 py-3 rounded-lg"
              data-testid="rocketItem"
            >
              <RocketItem rocket={rocket} />
            </li>
          ))}
        </ul>
      </Provider>,
    );
  });
  it('Tests Rockets.js component render', () => {
    expect(tree).toMatchSnapshot();
    const rocketItems = screen.getAllByTestId('rocketItem');
    expect(rocketItems).toHaveLength(1);
  });
});
