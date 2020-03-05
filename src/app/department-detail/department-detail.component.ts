import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap , Router} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //snapshot approach
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    //paramMap Observable approach
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious() {
    if (this.departmentId > 1) {
      let previousId = this.departmentId - 1;
      this.router.navigate(['/route1', previousId]);
    }
  }

  goNext() {
    if (this.departmentId < 5) {
      let nextId = this.departmentId + 1;
      this.router.navigate(['/route1', nextId]);
    }
  }

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    //absolute navigation
    // this.router.navigate(['/route1', {id: selectedId}]);
    //relative navigation
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

}
