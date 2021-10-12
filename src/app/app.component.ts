import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
  apiKey:'AIzaSyAuqt9oXe42APB_9gQgSZ86WXmuqkEgWVA',
  databaseURL:'https://angularproject-61f9e-default-rtdb.firebaseio.com',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatapp';

  constructor() {
    firebase.initializeApp(config);
  }
}
