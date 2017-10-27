import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';

// Components
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventsComponent } from './events/events.component';

// Router
import { AppRoutingModule } from './app-routing.module';

// Services
import { MemberService } from './members/member.service';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailComponent,
    EventsComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    NgProgressModule,
    AppRoutingModule
  ],
  providers: [
    MemberService,
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
