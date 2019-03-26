import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setuop default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount');
});

test('should sort by date', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_DATE'})
    expect(state.sortBy).not.toBe('amount');
});

test('should set text filter', () => {
    const state = filtersReducer({
        text: 'eeee',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }, { type: 'SET_TEXT_FILTER', text: 'Grong'})
    expect(state.text).toBe('Grong');
});

test('should set startDate filter', () => {
    const state = filtersReducer({
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }, { type: 'SET_START_DATE', startDate: moment(0)})
    expect(state.startDate).toEqual(moment(0));
});

test('should set endDate filter', () => {
    const state = filtersReducer({
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }, { type: 'SET_END_DATE', endDate: moment(0)})
    expect(state.endDate).toEqual(moment(0));
});