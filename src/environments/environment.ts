// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://api.themoviedb.org/3/movie/top_rated?api_key=',
  baseUrl2: 'https://api.themoviedb.org/3/movie/',
  apiKey: 'ebecc48e5306cf18a45b858e7b92b242',
  firebaseConfig: {
    apiKey: 'AIzaSyDe6SbldYfUlUDM_GQ4H7HPfhPDW2IsA1Q',
    authDomain: 'movie-app-95117.firebaseapp.com',
    projectId: 'movie-app-95117',
    storageBucket: 'movie-app-95117.appspot.com',
    messagingSenderId: '550159220800',
    appId: '1:550159220800:web:86cf605d079acc4c839fa5',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
