import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

import { MemberService } from './members/member.service';
import { HomepageComponent } from './homepage/homepage.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    MemberDetailComponent,
    HomepageComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'members',
        component: MembersComponent
      }, {
        path: '',
        component: HomepageComponent
      }
    ]),
    AngularFontAwesomeModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
