// import some default angular directives..

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Component, Directive} from '@angular/core';


// ###################################### APP COMPONENT #################################
// creating main component for this app..

@Component({
    selector:'my-app',
    directives:[CricketerComponent],
    template:`
       <h1>My Favorite cricketer ....</h1> 
       <cricketer > </cricketer>
    `
})

export class AppComponent{
     constructor (){}
}


//################################### CRICKETER COMPONENT ################################

@Component({
    selector:'cricketer',
    template:`
        <h2> My Favorite cricketer is Yuvraj .. </h2>
     `
})

export class CricketerComponent {

}

// initializing ur app..

@NgModule({
  imports:[BrowserModule],
  declarations:[AppComponent , CricketerComponent],
  bootstrap:[AppComponent]
})

export class AppModule{}

// creatint a intance for platform .. 
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
