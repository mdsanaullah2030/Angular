import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']  
})
export class ViewuserComponent implements OnInit {
  users: any;
  searchText: string = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.userService.getAlluser().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error) => {
        console.log('Error fetching users:', error);
      }
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe({
      next: (res) => {
        this.userService.getAlluser().subscribe({
          next: (data) => {
            this.users = data;
          }
        });
      },
      error: (error) => {
        console.log('Error deleting user:', error);
      }
    });
  }

  updateUser(id: string) {
    this.router.navigate(['update', id]);
  }
}
