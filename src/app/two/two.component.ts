import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor(private myRouter: Router) { }

  ngOnInit(): void {
    setTimeout(() => this.myRouter.navigate(['/three']), 3000);
  }

}
