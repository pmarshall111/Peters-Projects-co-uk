import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectpageComponent } from './projectpage/projectpage.component';
import { ProjectdisplayComponent } from './projectpage/projectdisplay/projectdisplay.component';
import { ProjectinfoComponent } from './projectpage/projectinfo/projectinfo.component';
import { ArrowComponent } from './arrow/arrow.component';
import { IntropageComponent } from './intropage/intropage.component';
import { SlideshowComponent } from './intropage/slideshow/slideshow.component';
import { SelectedImageDirective } from './intropage/slideshow/selected-image.directive';
import { ProjectcardComponent } from './projectpage/projectcard/projectcard.component';
import { ImgcarouselComponent } from './projectpage/imgcarousel/imgcarousel.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ContactformComponent } from './contactpage/contactform/contactform.component';
import { CorrectEmail } from './contactpage/contactform/correct-email.directive';
import { FooterComponent } from './footer/footer.component';
import {DateSuffixPipe} from './footer/dateSuffix.pipe';
import {SocialbuttonComponent} from './shared/socialbutton/socialbutton.component';
import { SolvingpageComponent } from './solvingpage/solvingpage.component';
import { ProblemdisplayComponent } from './solvingpage/problemdisplay/problemdisplay.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectpageComponent,
    ProjectdisplayComponent,
    ProjectinfoComponent,
    ArrowComponent,
    IntropageComponent,
    SlideshowComponent,
    SelectedImageDirective,
    ProjectcardComponent,
    ImgcarouselComponent,
    ContactpageComponent,
    ContactformComponent,
    CorrectEmail,
    FooterComponent,
    DateSuffixPipe,
    SocialbuttonComponent,
    SolvingpageComponent,
    ProblemdisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
