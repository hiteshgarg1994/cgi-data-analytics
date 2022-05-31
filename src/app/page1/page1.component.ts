import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from "../api-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private apiServiceService: ApiServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  nextStep = (): void => {
    const data = {};
    this.apiServiceService.submit(data).subscribe(result => {
      this.router.navigate(['/', 'page2']);
    })
  }

}
