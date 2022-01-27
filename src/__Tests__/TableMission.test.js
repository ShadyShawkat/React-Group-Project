import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import TableMission from '../components/Missions/TableMission';
import store from '../redux/store';

describe('Test TableMission render', () => {
  test('Test TableMission tHead Mission', () => {
    render(
      <Provider store={store}>
        <TableMission />
      </Provider>,
    );
    expect(screen.getByText('Mission')).toBeInTheDocument();
  });

  test('Test TableMission Description Mission', () => {
    render(
      <Provider store={store}>
        <TableMission />
      </Provider>,
    );
    expect(screen.getByText('Description')).toBeInTheDocument();
  });

  test('Test TableMission Status', () => {
    render(
      <Provider store={store}>
        <TableMission />
      </Provider>,
    );
    expect(screen.getByText('Status')).toBeInTheDocument();
  });
});
