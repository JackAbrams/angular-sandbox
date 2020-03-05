import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {

  public departments = [];
  public errorMsg;
  public selectedId;

  constructor(private router: Router, private _departmentService: DepartmentService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //subscribe to employeeService
    this._departmentService.getDepartments()
        .subscribe(data => this.departments = data,
                   error => this.errorMsg = error);

     this.route.paramMap.subscribe((params: ParamMap) => {
       let id = parseInt(params.get('id'));
       this.selectedId = id;
     });
  }

  onSelect(department) {
    this.router.navigate(['/route1', department.id]);
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }

}
