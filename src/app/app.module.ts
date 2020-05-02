import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProjectcardComponent } from './projectpage/projectcard/projectcard.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ContactformComponent } from './contactpage/contactform/contactform.component';
import { CorrectEmail } from './contactpage/contactform/correct-email.directive';
import { FooterComponent } from './footer/footer.component';
import {DateSuffixPipe} from './footer/dateSuffix.pipe';
import {SocialbuttonComponent} from './shared/socialbutton/socialbutton.component';
import { SolvingpageComponent } from './solvingpage/solvingpage.component';
import { SkyscrapersDisplayComponent } from './solvingpage/skyscrapersDisplay/skyscrapersDisplay.component';
import { SkyscrapersComponent } from './solvingpage/skyscrapers/skyscrapers.component';
import { MinMaxLimiterDirective } from './shared/min-max-limiter.directive';
import { MinesweeperDisplayComponent } from './solvingpage/minesweeper-display/minesweeper-display.component';
import { ColourkeyComponent } from './solvingpage/minesweeper-display/colourkey/colourkey.component';
import { SkillitemComponent } from './skillpage/skillitem/skillitem.component';
import { SkillpageComponent } from './skillpage/skillpage.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { ProjecthighlightComponent } from './projectpage/projecthighlight/projecthighlight.component';
import { ProblemhighlightComponent } from './solvingpage/problemhighlight/problemhighlight.component';
import { TitleComponent } from './shared/title/title.component';
import { NavComponent } from './nav/nav.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectpageComponent,
    HomepageComponent,
    ProjectcardComponent,
    ContactpageComponent,
    ContactformComponent,
    CorrectEmail,
    FooterComponent,
    DateSuffixPipe,
    SocialbuttonComponent,
    SolvingpageComponent,
    SkyscrapersDisplayComponent,
    SkyscrapersComponent,
    MinMaxLimiterDirective,
    MinesweeperDisplayComponent,
    ColourkeyComponent,
    SkillitemComponent,
    SkillpageComponent,
    CarouselComponent,
    ProjecthighlightComponent,
    ProblemhighlightComponent,
    TitleComponent,
    NavComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
