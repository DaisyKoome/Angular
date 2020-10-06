import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name = 'edd';
  getName()
  {
    alert("Daisy Koome")
  }
  obj ={
    name: 'dee',
    age:22
  }


  arr=['bruce','tony','peter']
  siteUrl=window.location.href

}
