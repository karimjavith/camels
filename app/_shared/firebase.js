// import * as firebase from 'nativescript-plugin-firebase';
// import { Logger } from './logger';

// export default firebase;

// let logger = new Logger();

// export const init = debug => {
//   debug && logger.enableDebug();
//   firebase
//     .init({
//       iOSEmulatorFlush: false,
//     })
//     .then(() => logger.info('firebase.init done'), error => logger.error('firebase.init error: ' + error));
// };

// export const getCurrentUser = () => {
//   return firebase
//     .getCurrentUser()
//     .then(user => {
//       if (user.anonymous) {
//         throw Error('Firebase current user is anonymous');
//       }
//       return user.getIdToken(true).then(token => {
//         const userData = { username: user.displayName, token };
//         logger.info('Firebase current user:', JSON.stringify(userData));
//         return userData;
//       });
//     })
//     .catch(err => {
//       logger.error(err);
//       throw Error('Error while getting current user');
//     });
// };

// export const login = (email, password) => {
//   const options = {
//     type: firebase.LoginType.PASSWORD,
//     passwordOptions: {
//       email,
//       password,
//     },
//   };
//   return firebase
//     .login(options)
//     .then(user => {
//       logger.info('Firebase login success');
//       return user.getIdToken().then(token => {
//         const userData = { username: user.displayName, token };
//         logger.info('Firebase current user:', JSON.stringify(userData));
//         return userData;
//       });
//     })
//     .catch(err => {
//       logger.error(err);
//       throw Error('Login failed');
//     });
// };

// export const logout = () => {
//   return firebase
//     .logout()
//     .then(data => {
//       logger.info('Firebase logout success');
//       logger.info('Firebase logout response :', data);
//       return data;
//     })
//     .catch(err => {
//       console.error(err);
//       throw Error('Logout failed');
//     });
// };
// export const createUser = (email, password) => {
//   let options = {
//     email,
//     password,
//   };
//   return firebase
//     .createUser(options)
//     .then(user => {
//       logger.info('Firebase create user success');
//       return user;
//     })
//     .catch(err => {
//       console.error(err);
//       throw Error('Sign up failed');
//     });
// };

// export const updateProfile = (displayName, photoUrl) => {
//   const options = {
//     displayName,
//     photoUrl,
//   };
//   return firebase
//     .updateProfile(options)
//     .then(() => {
//       logger.info('Firebase update profile success');
//       return true;
//     })
//     .catch(err => {
//       logger.error(err);
//       throw Error('Update profile failed');
//     });
// };

// export const passwordReset = email => {
//   return firebase
//     .sendPasswordResetEmail(email)
//     .then(() => {
//       logger.info('Firebase update profile success');
//       return true;
//     })
//     .catch(err => {
//       logger.error(err);
//       throw Error(err);
//     });
// };
// export const deleteUser = () => {
//   return firebase
//     .deleteUser()
//     .then(() => {
//       logger.info('Firebase delete profile success');
//       return true;
//     })
//     .catch(err => {
//       logger.error(err);
//       throw Error(err);
//     });
// };
