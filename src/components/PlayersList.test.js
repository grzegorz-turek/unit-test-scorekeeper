import React from 'react';
import { shallow } from 'enzyme';
import PlayersList from './PlayersList';
import Player from './Player';

it('renders without crashing', () => {
    shallow(<PlayersList players={[]} />);
});

it('renders correct number of players', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const playerComponent = shallow(<PlayersList players={players} />);
    //console.log(playerComponent.debug());

    const expectedPlayersNumber = playerComponent.find(Player).length;

    expect(expectedPlayersNumber).toEqual(2);
});

it('change score', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        },
        {
            name: 'Gerd',
            score: 10
        },
        {
            name: 'Hubert',
            score: 2
        }
    ]

    const mockedOnScoreUpdate = jest.fn();
    const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
    //console.log(playerComponent.debug());

    const firstPlayer = playerComponent.find(Player).at(2);
    const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
    onPlayerScoreChange(3);

    expect(mockedOnScoreUpdate).toBeCalledWith(2, 3);
});