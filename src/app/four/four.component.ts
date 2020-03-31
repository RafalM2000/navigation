import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {

  offerNo: string;

  constructor(private currentRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.offerNo = this.currentRouter.snapshot.params['idOffer'];
  }

}
