import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private firstOfScubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // this.firstOfScubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    this.firstOfScubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      alert(error);
      console.log(error);
    }, () => {
      console.log('Completed!');
    });
  }

  ngOnDestroy() {
    this.firstOfScubscription.unsubscribe();
  }
}
