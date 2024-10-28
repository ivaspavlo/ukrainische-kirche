import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { firebaseConfig } from '@env/environment';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
