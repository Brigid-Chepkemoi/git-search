import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";





@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  rep: any[] = [];
  constructor() {}

  ngOnInit(): void {}
}
