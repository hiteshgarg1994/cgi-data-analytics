import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../api-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(private apiServiceService: ApiServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  nextStep = (): void => {
    const data = {};
    this.apiServiceService.submit(data).subscribe(result => {
      this.router.navigate(['/', 'page3']);
    })
  }
}
