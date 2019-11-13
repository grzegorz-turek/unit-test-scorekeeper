import React from 'react';
import { shallow, mount } from 'enzyme';
import AddPlayer from './AddPlayer';
//import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
    shallow(<AddPlayer />);
});

it('renders correct name', () => {
    const onPlayerAdd = jest.fn();
    const addPlayerComponent = mount(<AddPlayer onPlayerAdd={onPlayerAdd} />);

    const nameInput = addPlayerComponent.find('input').first().getDOMNode();
    nameInput.value = 'Ania';

    const form = addPlayerComponent.find('form');
    form.simulate('submit');

    expect(onPlayerAdd).toBeCalledWith('Ania');
});