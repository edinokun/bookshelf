import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MissionsComponent } from './missions/missions.component';
import { NewsComponent } from './news/news.component';
import { LeftComponent } from './left/left.component';
import { FooterComponent } from './footer/footer.component';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
import { NewsElementComponent } from './news-element/news-element.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MissionsComponent,
    NewsComponent,
    LeftComponent,
    FooterComponent,
    MissionDetailComponent,
    NewsElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
