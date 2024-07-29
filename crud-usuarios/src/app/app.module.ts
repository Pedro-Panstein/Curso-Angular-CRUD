import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore'
import { environment } from '../environments/environment.development';
import { AngularFireModule } from '@angular/fire/compat';
import { CrudComponent } from './pages/crud/crud.component';
// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // Angular Material
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"crud-usuarios-angular-d48d6","appId":"1:137039318262:web:8bb1d36fbde6bfdc5b30d7","storageBucket":"crud-usuarios-angular-d48d6.appspot.com","apiKey":"AIzaSyBa84oPFdHvcQPewwDNj3UMOBHrfoOo970","authDomain":"crud-usuarios-angular-d48d6.firebaseapp.com","messagingSenderId":"137039318262"})),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
