import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";




@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {
  search!:string;
  constructor(
    
    private router: Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
     console.log(this.search)
  
  
      this.router.navigate(["repo"]);
    
  }
 

}
