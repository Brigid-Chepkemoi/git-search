import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GitSearchService } from '../git-search.service';
import { RepoGitService } from '../repo-git.service';
import { FormsModule } from '@angular/forms';



// @Component({
//   selector: 'app-gitsearch-form',
//   templateUrl: './gitsearch-form.component.html',
//   styleUrls: ['./gitsearch-form.component.css']
// })
@NgModule({
  imports:[FormsModule]
})
export class GitsearchFormComponent implements OnInit {
  search!:string;
  constructor(
    private gitService: GitSearchService,
    private gitRepo: RepoGitService,
    private router: Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
     console.log(this.search)
  
      this.gitRepo.repoArr = [];

      this.gitService.getSearchResults(this.search);
      this.gitRepo.getRepoDetails(this.search);
      this.router.navigate(["repo"]);
    
  }
 

}
