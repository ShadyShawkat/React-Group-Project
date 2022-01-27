import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionItem from './MissionItem';
import store from '../../redux/store'


const missions = [
    {
    mission_name: 'Thaicom',
    mission_id: '9D1B7E0',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: false,
    }
]

const handleReserv = () => {
    missions[0] = {...missions[0], reserved:true}
}


const mockObj = () =>{
    render(
        <Provider store={store}>
            <table>
                <tbody className="bg-white divide-y divide-gray-200">
                    {missions.map((mission) => (
                      <MissionItem mission={mission} key={mission.mission_id} />
                    ))}
                </tbody>
            </table>
        </Provider>
    );
}

describe('Test TableMission render', () => {
  test('Test TableMission', () => {
    mockObj();
    expect(screen.getByText('Thaicom')).toBeInTheDocument();
  });

  test('Test TableMission', () => {
    mockObj();
    expect(screen.getByText(missions[0].description)).toBeInTheDocument();
  });

  test('Test TableMission', () => {
    mockObj();
    expect(screen.getByRole('button')).toHaveTextContent('Join Mission');
  });

  test('Test TableMission', () => {
    handleReserv()
    mockObj();
    expect(screen.getByRole('button')).toHaveTextContent('Leave Mission');
  });

});
