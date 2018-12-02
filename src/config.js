export const firebaseConfig =
  process.env.NODE_ENV === 'production'
    ? {
        apiKey: 'AIzaSyDOTe8SVN_5WGtuKdXQoQy5slhAq3kEIbs',
        authDomain: 'findy-id.firebaseapp.com',
        databaseURL: 'https://findy-id.firebaseio.com',
        projectId: 'findy-id',
        storageBucket: 'findy-id.appspot.com',
        messagingSenderId: '943881521886'
      }
    : {
        apiKey: 'AIzaSyCg_rSKtCxZr1W69VNWI4s-lhj53QJ4Fdk',
        authDomain: 'findy-id-development.firebaseapp.com',
        databaseURL: 'https://findy-id-development.firebaseio.com',
        projectId: 'findy-id-development',
        storageBucket: 'findy-id-development.appspot.com',
        messagingSenderId: '614464328426'
      }
