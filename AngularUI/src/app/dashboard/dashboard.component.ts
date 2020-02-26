import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Component, OnInit , ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public tableList = [] ;
  public Data = [] ;
  public errorMsg = '';
  public show = false;
  item: string;
  loginId = sessionStorage.getItem('email');
  sortedData: TableData[];
  constructor(private router: Router, private user: UserServiceService) {
  //  this.sortedData = this.tableList.slice();
  }

  displayedColumns: string[] = ['name', 'email', 'phone', 'company'];
  dataSource = new MatTableDataSource(this.sortedData);

  @ViewChild(MatSort, {static: true}) sort: MatSort;


  ngOnInit(): void {
  }
  list() {
    if (this.loginId != null) {
      console.log('inside list', this.loginId);
      this.show = true;
      this.user.getList().subscribe((data) => {
        console.log(data);
        this.tableList = data;
      });
    } else {

      console.log('else part', this.loginId);
      this.router.navigateByUrl('/login');
    }
  }

  // sortData(sort: Sort) {
  //   const data = this.tableList.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.sortedData = data;
  //     return;
  //   }
  //   this.sortedData = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'name': return compare(a.name, b.name, isAsc);
  //       // case 'calories': return compare(a.calories, b.calories, isAsc);
  //       // case 'fat': return compare(a.fat, b.fat, isAsc);
  //       // case 'carbs': return compare(a.carbs, b.carbs, isAsc);
  //       // case 'protein': return compare(a.protein, b.protein, isAsc);
  //       default: return 0;
  //     }
  //   });
  //   function compare(a: number | string, b: number | string, isAsc: boolean) {
  //     return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  //   }
}

export class TableData {
  name: string;
 // username: string;
  email: string;
  phone: string;
  company: string;
}
