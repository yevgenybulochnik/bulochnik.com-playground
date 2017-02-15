import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EunavComponent } from './eunav/eunav.component';
import { AboutComponent } from './about/about.component';
import { VirtualCvComponent } from './virtual-cv/virtual-cv.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageStartComponent } from './pagestart/pagestart.component';
import { NoteEditorComponent } from './noteeditor/note-editor.component';
import { SubjectiveComponent} from './subjective/subjective.component';
import { RiskCalcComponent } from './risk-calc/risk-calc.component';
import { FocusDirective } from './focus.directive.ts';

import { QuillModule } from 'ngx-quill';


const appRoutes: Routes = [
  {path:'', component: PageStartComponent},
  {path:'about', component: AboutComponent},
  {path:'virtualcv', component: VirtualCvComponent},
  {path:'noteeditor', component: NoteEditorComponent},
  {path:'404',component: NotFoundComponent},
  {path: '**', redirectTo:"/404"}
];

@NgModule({
  declarations: [
    AppComponent,
    EunavComponent,
    AboutComponent,
    VirtualCvComponent,
    NotFoundComponent,
    PageStartComponent,
    NoteEditorComponent,
    RiskCalcComponent,
    SubjectiveComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
