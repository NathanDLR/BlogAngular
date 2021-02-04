import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog';

  style: Number = 0;

  styleEventHandler($event: any){
    this.style = $event;
  }

}
