import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Profile from '../components/Profile/Profile';

const rocketsDummyData = [
  {
    rocket_id: '1',
    rocket_name: 'rocket 1',
    rocket_type: 'rocket',
    flickr_images: ['https://via.placeholder.com/150'],
    description: 'Rocket 1',
    reserved: false,
  },
  {
    rocket_id: '2',
    rocket_name: 'rocket 2',
    rocket_type: 'rocket',
    flickr_images: ['https://via.placeholder.com/150'],
    description: 'Rocket 2',
    reserved: true,
  },
  {
    rocket_id: '3',
    rocket_name: 'rocket 3',
    rocket_type: 'rocket',
    flickr_images: ['https://via.placeholder.com/150'],
    description: 'Rocket 3',
    reserved: true,
  },
];

const missionsDummyData = [
  {
    mission_name: 'Thaicom 1',
    mission_id: '9D1B7E0',
    description:
      'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: false,
  },
  {
    mission_name: 'Thaicom 2',
    mission_id: '1245sc',
    description:
      'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: true,
  },
  {
    mission_name: 'Thaicom 3',
    mission_id: 'vg12sc',
    description:
      'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: false,
  },
];

let tree = null;
describe('Tests Profile.js component render', () => {
  beforeEach(() => {
    const mockStore = configureStore();
    const store = mockStore({
      rockets: { rockets: rocketsDummyData },
      missions: { missions: missionsDummyData },
    });
    tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
  });
  it('Testing reserved rockets render', () => {
    expect(tree).toMatchSnapshot();
    const rocketItems = screen.getAllByTestId('reservedRocketItem');
    expect(rocketItems).toHaveLength(2);
  });
  it('Testing reserved missions render', () => {
    expect(tree).toMatchSnapshot();
    const missionItems = screen.getAllByTestId('reservedMissionItem');
    expect(missionItems).toHaveLength(1);
  });
});
