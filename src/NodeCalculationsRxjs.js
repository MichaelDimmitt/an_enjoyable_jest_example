import React from 'react';
import './assets/css/additionalStyling.css';
import 'rxjs/add/observable/of';
  import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
  import { map, filter, switchMap } from 'rxjs/operators';
// const  EntryMessage = () => {
//   return (
//    <div className="reposition">

//    </div>
//   )
// }

function see_how_it_does_not_work(){
  range(1, 200)
    .pipe(filter(x => x % 2 === 1), map(x => {console.log(x); x + x})) // 0 - 400 even numbers
}

function subscribe_must_occour(){
  range(1, 200)
    .pipe(filter(x => x % 2 === 1), map(x => {console.log(x); x + x})) // 0 - 400 even numbers
    .subscribe(console.log)
}

function map_explination_marks(){
  range(1, 200)
    .pipe(filter(x => x % 2 === 1), map(x => x + x)) // 0 - 400 even numbers
    .subscribe(x => {console.log(x); return x})
  // return <div>Observable.of(1,2,3).map(x => x + '!!!')</div>
}

function lame_cant_then_or_chain_off_subscribe(){
  range(1, 200)
    .subscribe(x => {console.log(x); return x})
    .pipe(filter(x => x % 2 === 1), map(x => x + x)) // 0 - 400 even numbers
  // return <div>Observable.of(1,2,3).map(x => x + '!!!')</div>
}
function stuff_dont_work() {
  Observable.of(1,2,3).map(x => x + '!!!')
    .subscribe(x => {console.log(x)} )
}

// I'm using Observable.of to mimick an api call and update cellColor;
//
// Observable.of(true)
//     .delay(2000)
//     .subscribe((success) => {
//       if(success){
//         this.cellColor = 'white';
//         this.cdr.markForCheck();
//       }
//     });

export const NodeCalculationsRxjs = ({rxpng}) => {
  return (
    <div>
      future efforts will go into this implementation
      {/*see_how_it_does_not_work()*/}
      {subscribe_must_occour() }
      {map_explination_marks()}
      <a href="/">click here</a>
    </div>
  )
}
