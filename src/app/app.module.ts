import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { UserdetailsComponent } from './Components/userdetails/userdetails.component';
import { NewuserComponent } from './Components/newuser/newuser.component';
import { ErrorComponent } from './Components/error/error.component';
import { UseritemComponent } from './Components/useritem/useritem.component';
import { FormsModule } from '@angular/forms';
import { CustomPipe } from './Pipes/custom.pipe';
import { CustomDirective } from './Directives/custom.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserdetailsComponent,
    NewuserComponent,
    ErrorComponent,
    UseritemComponent,
    CustomPipe,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
