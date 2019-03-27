import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
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

test('should render ExpenseList with mock expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList with no expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});
