/*
// Jest tsting
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
*/

// Enzyme testing
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList'
import AddPlayer from './components/AddPlayer/AddPlayer'


it('renders without crashing', () => {
    shallow(<App />);
});

it('should update player\'s score', () => {

  const appComponent = shallow(<App />);
  const players = [
    {
      name: "Ola",
      score: 5
    },
    {
      name: "Iza",
      score: 15
    },
    {
      name: "Ala",
      score: 75
    }
  ];

  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

  onScoreUpdate(2, 25);

  const playersAfterUpdate = appComponent.state().players;
  // the above might also be coded:
  //const playersAfterUpdate = appComponent.state('players');

  expect(playersAfterUpdate[2].score).toEqual(75+25);
});

it('should add new player', () => {
  const appComponent = shallow(<App />);

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');

  onPlayerAdd('Ania');

  const players = appComponent.state('players');

  expect(players[players.length - 1].name).toEqual('Ania');
});

it('should remove player', () => {
  const appComponent = shallow(<App players={[]} />);
  const players = [
    {
      name: 'Ania',
      score: 5,
    },
    {
      name: 'Robert',
      score: 0,
    }
  ];
  appComponent.setState({ players });

  const onPlayerRemove = appComponent.find(PlayersList).prop('onPlayerRemove');
  onPlayerRemove('Ania');

  const playersAfterUpdate = appComponent.state().players;

  expect(playersAfterUpdate[0]).not.toEqual('Ania');
});
