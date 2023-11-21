import { Component,Input, OnChanges , SimpleChanges,OnInit, DoCheck, 
  ChangeDetectorRef, AfterContentInit, ContentChild, ElementRef, 
  AfterContentChecked, AfterViewInit, ViewChild, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnChanges,
  OnInit, DoCheck,  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() myInput!:string;
  @ContentChild('projectedContent') projectedContent!: ElementRef;

  @ViewChild('viewElement') childDiv!: ElementRef;

  ngDoCheck(): void {
    console.log("ngDoCheck", "Header");
  }

  constructor(private cdr: ChangeDetectorRef) {
    console.log("Constructor invocation");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewInitChecked", "Checked Div", this.childDiv);
  }
  ngAfterViewInit(): void {
      console.log("ngAfterViewInit", "View DIV of header", this.childDiv.nativeElement.innerHTML);
  }
  ngAfterContentChecked(): void {
     console.log("ngAfterContentInitChecked", this.projectedContent.nativeElement.innerHTML);
  }
  ngAfterContentInit(): void {
     console.log("ngAfterContentInit", this.projectedContent);
  }


  ngOnChanges(changes: SimpleChanges): void {
    if('myInput' in changes){
      console.log("ngOnChanges", this.myInput);
    }
  }

  ngOnInit(): void {
    console.log("ngOnInit","Header");
  }

  ngOnDestroy(): void {
    console.log('Component is being destroyed. Clean up resources here.');
  }

}
