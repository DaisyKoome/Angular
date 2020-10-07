import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name = 'edd';
  myName = "Hazel"
  getName(name)
  {
    alert(name)
  }
  obj ={
    name: 'dee',
    age:22
  }
  myEvent(evt)
  {
    console.warn(evt)
  }


  arr=['bruce','tony','peter']
  siteUrl=window.location.href

}
