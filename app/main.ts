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
       <cricketer> </cricketer>
    `
})

export class AppComponent{
    
}


//################################### CRICKETER COMPONENT ################################
// ################################## Structural directive ##############################

// // ######################   [ngIf]   #############################
// @Component({
//     selector:'cricketer',
//     template:`
//         <h2 *ngIf="cricketerList">list of best cricketer ...</h2>
//      `
// })

// export class CricketerComponent {
//     cricketerList:boolean = true;
//     //cricketerList:boolean = false;
// }


// // ######################   [ngFor]   #############################
// @Component({
//     selector:'cricketer',
//     template:`
//         <div*ngIf="cricketerList">
//             <h2>list of best cricketer ...</h2>
//             <ul>
//                 <li *ngFor="let cricketer of cricketers">
//                     {{cricketer}}
//                 </li>
//             </ul>
//         </div>
//      `
// })

// export class CricketerComponent {
//     cricketerList:boolean = true;
//     //cricketerList:boolean = false;

//     cricketers:string[] = [
//         'yuvi',
//         'dhoni',
//         'virat',
//         'raina',
//         'rohit'
//     ]
// }


// ######################   [ngFor]   #############################
@Component({
    selector:'cricketer',
    template:`
        <div*ngIf="cricketerList">
            <h2>list of best cricketer ...</h2>
            <ul>
                <li *ngFor="let cricketer of cricketers">
                    {{cricketer}}
                </li>
            </ul>
        </div>

        <div>
            <span [ngSwitch]= "bestCricketer">
                <span *ngSwitchCase="'yuvi'"> yuvi is always awesome cricketer</span>
                <span *ngSwitchCase="'dhoni'"> dhoni is always awesome cricketer</span>
                <span *ngSwitchDefault> virat is always awesome cricketer</span>
            </span>
        </div>
     `
})

export class CricketerComponent {
    cricketerList:boolean = false;
    //cricketerList:boolean = true;

    cricketers:string[] = [
        'yuvi',
        'dhoni',
        'virat',
        'raina',
        'rohit'
    ]

    bestCricketer:string = 'yuvi';
    // bestCricketer:string = 'dhoni';
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
