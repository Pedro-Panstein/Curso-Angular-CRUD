import { Component, ViewChild } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from '../../interfaces/user';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalViewComponent } from './modal-view/modal-view.component';
import { ModalFormUserComponent } from './modal-form-user/modal-form-user.component';
import { ModalDeleteComponent } from './modal-delete/modal-delete.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'benefits', 'action'];
  dataSource: any;
  listusers: User[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog,
  ) {
    this.dataSource = new MatTableDataSource<any>(this.listusers);
  }

  ngOnInit() {
    this.getListUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getListUsers() {
    this.usersService.getAllUsers().subscribe({
      next: (response: any) => {
        console.log('Lista de usuários firebase', response);
        this.listusers = response;

        this.dataSource = new MatTableDataSource<any>(this.listusers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error(err)
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Logica do modal
  openModalView(user: User){
    this.dialog.open(ModalViewComponent, {
       width: '700px',
       height: '330px',
       data: user,
    })
  }

  openModalEdit(user: User){
    this.dialog.open(ModalFormUserComponent, {
      width: '700px',
      height: '300px',
      data: user,
    })
  }

  openModalDelete(user: User){
    this.dialog.open(ModalDeleteComponent, {
      width: '500px',
      height: '200px',
      data: user,
    })
  }
}
