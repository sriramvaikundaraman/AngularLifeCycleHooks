import { Component, SimpleChanges ,Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'PracticeApp2';
  name:string = 'Sri';
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';

}
