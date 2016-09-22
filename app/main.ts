// import some default angular directives..

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Component} from '@angular/core';
import { FormsModule }   from '@angular/forms';


// ###################################### APP COMPONENT #################################
// creating main component for this app..

@Component({
    selector:'my-app',
    directives:[CricketerComponent],
    template:`
       <h1>My Favorite cricketer ....</h1> 
       <cricketer> </cricketer>
    `
})

export class AppComponent{
    constructor(){}
}


//################################### CRICKETER COMPONENT ################################
// ##########################  Data Flow ##############################
// ######################### Interpolation ##########################
// #########################  Event Binding ########################
// Two Way Data Binding



@Component({
    selector:'cricketer',
    template:`

        <div *ngIf="!isButtonClicked">
            <h2>Cricketer Info</h2>
            <input [(ngModel)] = "playerName">
            <h3>Player Name : {{playerName}}</h3>
        </div>

        <button *ngIf="!isButtonClicked" (click)="showMore()">ShowMore</button>

         <button *ngIf="isButtonClicked" (click)="showLess()">ShowLess</button>
         <div *ngIf="isButtonClicked">
            <h2>Cricketer Info</h2>
            <h3>Player Name : {{playerName}}</h3>
            <h3>Player Jersy Number : {{playerJersyNo}}</h3>
            <h3>Player Birthday : {{playerBirthday}}</h3>
        </div>
        
     `
})

export class CricketerComponent {
    isButtonClicked:boolean = false;

    playerName:string = "AB De Villiers";
    playerJersyNo:number = 17;
    playerBirthday:string = "17th Feb";
    constructor(){}

    showMore(){
        this.isButtonClicked = true;
    }

    showLess(){
        this.isButtonClicked = false
    }

}


// initializing ur app..

@NgModule({
  imports:[BrowserModule,FormsModule],
  declarations:[AppComponent , CricketerComponent],
  bootstrap:[AppComponent]
})

export class AppModule{}

// creatint a intance for platform .. 
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
