import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MathsComponent } from './maths/maths.component';
import { ChessComponent } from './chess/chess.component';
import { YoutubeViewerComponent } from './youtube-viewer/youtube-viewer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    MathsComponent,
    ChessComponent,
    YoutubeViewerComponent

  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
