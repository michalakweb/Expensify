import * as firebase from 'firebase';
import { EDEADLK } from 'constants';

const config = {
    apiKey: "AIzaSyDB2d2Vxjb_6mdW-wWcIbLbwY9k8iwxnEg",
    authDomain: "expensify-3ebaf.firebaseapp.com",
    databaseURL: "https://expensify-3ebaf.firebaseio.com",
    projectId: "expensify-3ebaf",
    storageBucket: "expensify-3ebaf.appspot.com",
    messagingSenderId: "639871617290"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((el) => {
// //             expenses.push({
// //                 id: el.key,
// //                 ...el.val()
// //             });
// //         });

// //         console.log(expenses);
// //     })
    
// // database.ref('expenses').push({
// //   description: 'Czeko',
// //   note: '',
// //   amount: 9500,
// //   createdAt: 9761763
// // });

// setTimeout(() => {
    
// database.ref('expenses/-LbD7t4_Lfzxqw0u7KfM').update({description: 'Glumba'});
// }, 3000)

// database.ref('notes/-Krll52aVDQ3X6dOtmS7').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// Setup data sub -> Andrew is a Software Developer at Amazon.

// Change the data and make sure it reprints

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });
