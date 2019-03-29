import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDB2d2Vxjb_6mdW-wWcIbLbwY9k8iwxnEg",
    authDomain: "expensify-3ebaf.firebaseapp.com",
    databaseURL: "https://expensify-3ebaf.firebaseio.com",
    projectId: "expensify-3ebaf",
    storageBucket: "expensify-3ebaf.appspot.com",
    messagingSenderId: "639871617290"
};

firebase.initializeApp(config);

const person = {
    name: 'Glub',
    age: 24,
    isSingle: true,
    location: {
        city: 'Romp',
        country: 'Grompland'
    }
};

const database = firebase.database();

database.ref().set(person);

database.ref('age').set(25);
database.ref('location/city').set('Berlin');
database.ref('attributes').set({
    height: 175,
    weight: 62
});


