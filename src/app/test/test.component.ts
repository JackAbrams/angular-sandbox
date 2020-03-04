import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public componentName = "test";
  public pageUrl = window.location.href;
  public myId = "testId";
  public isDisabled = true;
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  public greeting = "";
  public name = "";
  public displayName = true;
  public color = 'red';
  public colors = ["red", "blue", "green", "yellow"];

  @Input() public parentData;
  @Input('parentData2') public moreData;
  @Output() public childEvent = new EventEmitter();

  public pipeExample = "Pipe";
  public titleCaseExample = "this is title case";
  public person = {
    "firstName": "Jack",
    "lastName": "Abrams"
  }
  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "Hello " + this.componentName;
  }

  onClick(event) {
    console.log(event);
    this.greeting = 'Triggered ' + event.type + " event.";
  }

  logMessage(value) {
    console.log(value);
  }

  fireEvent() {
    this.childEvent.emit('Hey $nack');
  }

}
