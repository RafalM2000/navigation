import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { Routes, RouterModule } from '@angular/router';
import { WarningComponent } from './warning/warning.component';

export const appRouters: Routes = [
  {path: '', component: OneComponent},
  {path: 'one', component: OneComponent},
  {path: 'two', component: TwoComponent},
  {path: 'three', component: ThreeComponent, data: [{version: '1.3.8'}]},
  {path: '**', component: WarningComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    WarningComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouters)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
