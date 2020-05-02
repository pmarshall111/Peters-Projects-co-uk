import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProblemService} from './problem.service';
import {ProblemModel} from './problem.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-solvingpage',
  templateUrl: './solvingpage.component.html',
  styleUrls: ['./solvingpage.component.css']
})
export class SolvingpageComponent implements OnInit, OnDestroy {
  problem: ProblemModel;
  subscription: Subscription;

  constructor(private problemService: ProblemService) {}

  ngOnInit(): void {
    this.subscription = this.problemService.problem.subscribe(data => {
      this.problem = data;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
