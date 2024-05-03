import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { MathsComponent } from './maths/maths.component';
import { ChessComponent } from './chess/chess.component';
import { YoutubeViewerComponent } from './youtube-viewer/youtube-viewer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'maths', component: MathsComponent },
  { path: 'chess', component: ChessComponent },
  {path: 'youtube-viewer', component: YoutubeViewerComponent},
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
