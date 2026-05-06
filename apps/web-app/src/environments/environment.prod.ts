import { FirebaseOptions } from '@angular/fire/app';

import { EnvironmentType } from './environmentType';

export const environment = {
  environmentType: EnvironmentType.PROD,
  firebase: {
    apiKey: '${FIREBASE_API_KEY}',
    authDomain: '${FIREBASE_AUTH_DOMAIN}',
    projectId: '${FIREBASE_PROJECT_ID}',
    storageBucket: '${FIREBASE_STORAGE_BUCKET}',
    messagingSenderId: '${FIREBASE_MESSAGING_SENDER_ID}',
    appId: '${FIREBASE_APP_ID}',
    measurementId: '${FIREBASE_MEASUREMENT_ID}',
  } as FirebaseOptions,
  firestoreCollection: 'setups',
};
