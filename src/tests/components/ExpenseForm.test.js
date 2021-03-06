import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';

const expenses = [{
    id: '0',
    description: 'gum',
    note: '',
    amount: 195,
    createdAt: 0
}, {
    id: '1',
    description: 'rent',
    note: '',
    amount: 122195,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '2',
    description: 'credit',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];

test('should render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on imput change', ()=> {
    const value = "New description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper. state('description')).toBe(value);
});