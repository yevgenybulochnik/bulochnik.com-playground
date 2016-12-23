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
import { RiskCalcComponent } from './risk-calc/risk-calc.component';


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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
