import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { EventManagerComponent } from './event-manager/event-manager.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventEditorComponent } from './event-editor/event-editor.component';
import { EventPreviewComponent } from './event-preview/event-preview.component';
import { RegistrationComponent } from './registration/registration.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeRedirectComponent } from './home-redirect/home-redirect.component';
import { PictureModuleComponent } from './picture-module/picture-module.component';
import { CguComponent } from './cgu/cgu.component';
import { LoginComponent } from './login/login.component';
import { CarPoolingComponent } from './car-pooling/car-pooling.component';
import { ModuleCardComponent } from './module-card/module-card.component';
import { CarPoolingEntryComponent } from './car-pooling-entry/car-pooling-entry.component';


const appRoutes:Routes = [
  { path:"registration", component:RegistrationComponent },
  { path:"home", component:HomeComponent },
  { path:"profile", component:ProfileComponent },
  { path:"events", component:EventManagerComponent },
  { path:"event/create", component:EventEditorComponent },
  { path:"event/:id/edit", component:EventEditorComponent },
  { path:"event/:id", component:EventDetailComponent },
  { path:"login", component:LoginComponent},
  {path:"cgu",component:CguComponent},
  {path:"carpooling", component:CarPoolingComponent},
  {path:"pictureModule",component:PictureModuleComponent},
  { path:"", pathMatch:'full', redirectTo:"home" }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    FooterComponent,
    HeaderComponent,
    EventManagerComponent,
    EventDetailComponent,
    EventEditorComponent,
    EventPreviewComponent,
    RegistrationComponent,
    LogoutComponent,
    HomeRedirectComponent,
    PictureModuleComponent,
    CguComponent,
    LoginComponent,
    CarPoolingComponent,
    ModuleCardComponent,
    CarPoolingEntryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { 
      provide : LOCALE_ID, useValue: "fr-FR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
