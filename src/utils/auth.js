import * as firebase from 'firebase';

export function requireAuth(nextState, replace, cb) {
  firebase.auth().onAuthStateChanged((user) => {
    // console.log('auth: auth state changed: user: ', user);
    if (user) {
      cb();
    } else {
      replace({
        pathname: '/signin',
        state: { nextPathname: nextState.location.pathname }
      });
      cb();
    }
  });
}
