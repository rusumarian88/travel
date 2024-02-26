import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HederComponent } from './components/heder/heder.component';
import { SectionWithTitleComponent } from './components/section-with-title/section-with-title.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { DiscoveryCardComponent } from './components/discovery-card/discovery-card.component';
import { BarBottomComponent } from './components/bar-bottom/bar-bottom.component';
import { PhotographCardComponent } from './components/photograph-card/photograph-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    HederComponent,
    SectionWithTitleComponent,
    NewsCardComponent,
    DiscoveryCardComponent,
    BarBottomComponent,
    PhotographCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
