import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./common/navbar/navbar.component";
import { FooterComponent } from "./common/footer/footer.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { UtilitiesService } from "./services/utilities.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [UtilitiesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
