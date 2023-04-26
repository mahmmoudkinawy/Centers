import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { allUsers } from 'src/app/models/users';
import { Users } from 'src/app/services/global.service';
import { HttpHeaderService } from 'src/app/services/http-header.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: allUsers[] = [];
  displayedColumns: string[] = ['fullName', 'gender', 'nationalId', 'phoneNumber', 'email', 'action'];
  dataSource!: MatTableDataSource<allUsers>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http:HttpHeaderService) {}

  getUsers() {
    let header = new HttpHeaders({
      Authorization: 'Bearer ' + localStorage.getItem('token')??''
    });

    this.http.getHeader(Users.get,header).subscribe({
      next:(res) => {
        this.users = res;
        console.log(this.users);
      },
      error:(err) => {
        console.error(err);
      }
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngOnInit(): void {
    this.getUsers();
  }


}
