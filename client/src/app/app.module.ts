import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule, Http, RequestOptions} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {ROUTES} from './app.routes';
import {DatabaseService} from 'app/services/database.service';
import {ErrorHandlerService} from 'app/services/error-handler.service';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SigninComponent} from "./components/signin/signin.component";
import {SignupComponent} from "./components/signup/signup.component";
import {AuthService} from "./services/auth.service";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule.forRoot(ROUTES),
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatRadioModule,
        BrowserAnimationsModule
    ],
    providers: [
        ErrorHandlerService,
        DatabaseService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
