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
// ################################## Attribute directive ##############################

// ######################   [style.color]   #############################
// @Component({
//     selector:'cricketer',
//     template:`
//         <h2 [style.color]=" isTrue ? 'green':'red'">My Favorite Cricketer is Yuvraj...</h2>
//      `
// })

// export class CricketerComponent {
//     isTrue:boolean = true;
//     //isTrue:boolean = false;
// }

// // ######################   [class.ClassName]   #############################
// @Component({
//     selector:'cricketer',
//     template:`
//         <h2 [class.green]=" isTrue">My Favorite Cricketer is Yuvraj...</h2>
//      `,
//      styles:[`
//         .green{
//             color:green
//         }
//      `]
// })

// export class CricketerComponent {
//     isTrue:boolean = true;
//     //isTrue:boolean = false;
// }

// // ######################   [ngClass]   #############################
// @Component({
//     selector:'cricketer',
//     template:`
//         <h2 [ngClass]="{'green':isTrue , 'blue':!isTrue}">My Favorite Cricketer is Yuvraj...</h2>
//      `,
//      styles:[`
//         .green{
//             color:green;
//         }

//         .blue{
//             color:blue;
//         }
//      `]
// })

// export class CricketerComponent {
//     isTrue:boolean = true;
//     //isTrue:boolean = false;
// }

// ######################   [ngStyle]   #############################
@Component({
    selector:'cricketer',
    template:`
        <h2 [ngStyle]="{'color':'lightblue'}">My Favorite Cricketer is Yuvraj...</h2>
     `

})

export class CricketerComponent {}


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
