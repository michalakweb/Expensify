import numeral from 'numeral';

export default (expenses) => expenses.length===0 ? 0 : numeral(expenses.map(el => el.amount).reduce((a,b) => a +b ) /100).format('$0,0..0');