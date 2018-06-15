import * as firebase from 'firebase'; //wszystkie nazwane exporty jako nowa nazwa 
//taki sposob importu rekomenduje forebase


const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIRABASE_DATABASE_URL,
    projectId: process.env.FIRABASE_PROJECT_ID,
    storageBucket: process.env.FIRABASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIRABASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// database.ref('notes')
//     .on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('notes').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('notes').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// //odpali sie 1x dla kazdej pozycji w bazie i dla kazdej nowo dodanej

// // //---staly naslouch------
// // database.ref('notes').on('value', (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childsnap) => {
// //         expenses.push({
// //             id: childsnap.key,
// //             ...childsnap.val()
// //         })
// //     })
// //     console.log(expenses)
// // })
// // //-----------------------

// // //-----1 raport------
// // database.ref('notes')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childsnap) => {
// //         expenses.push({
// //             id: childsnap.key,
// //             ...childsnap.val()
// //         })
// //     })
// //     console.log(expenses)
// //   })
// // //-----------------------



// // //-----za dananiem losowego ID
// // database.ref('notes').push({ //tworzy unikalny ID  auto
// //     title: 'second note',
// //     body: 'reacr native'
// // })
// ////-----------------------------------

// // //--------problemy  z danymi w postaci tablic
// // const firebaseNotes = {
// //     notes: {
// //         iusdfghj: {
// //             title: 'first note',
// //             body: 'my note'
// //         },
// //         sjkgfjsd: {
// //             title: 'second note',
// //             body: 'my note'
// //         }
// //     }
// // }

// // const notes = [{
// //     id: '12',
// //     title: 'first note',
// //     body: 'my note'
// // },{
// //     id: '761rtr',
// //     title: 'nother',
// //     body: 'mynote'
// // }];

// // database.ref('notes').set(notes);
// // database.ref('notes/12')
// ////------------------------------------------
// // database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // })

// // setTimeout(() => {
// //     database.ref('age').set(20);
// // }, 3500)


// // database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val())
// // })



// //----raz-----------
// // database.ref('location/city')
// //     .once('value')
// //     .then((snapshot) => { //snap to dane
// //         const val =snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((err) => {
// //         console.log('err is:', err)
// //     });
// //-------------------------------------------

// // database.ref().set({
// //       name: 'Maksymilian Hnatejko',
// //       age: 31,
// //       stressLevel: 6,
// //       job: {
// //           title: 'web dev',
// //           company: 'Google'
// //       },
// //       isSingle: false,
// //       location: {
// //           city: 'Torun',
// //           country: 'Poland'
// //       }  //root of database.wprowadzenie datnych
// // }).then(() => {
// //     console.log('data is saved')
// // }).catch((error) => {
// //     console.log('failed:', error)
// // })

// // //database.ref().set('cycuszek')

// // //database.ref('location/city').set('Poznan');

// // // database.ref('/attributes/height').set(184);
// // // database.ref('/attributes/weight').set(85);

// // database.ref('attributes').set({
// //     height: 184,
// //     weight: 85
// // }).then(() => {
// //     console.log('zrobione')
// // }).catch((error) => {
// //     console.log('jokis blad')
// // })

// // console.log('i made a request to change the data');

// // database.ref().update({
// //    stressLevel: 9,
// //    'job/company': 'Amazon',
// //    'location/city': 'Bombaj'
// // })

// // //----------usuwanie-----------
// // // //usuwanie jednego
// // // database.ref('age').set(null)
// // // //lub
// // // database.ref('age').remove()
// // // //usuwanie wszytskiego
// // // database.ref().set(null)
// // // //lub
// // // database.ref().remove()