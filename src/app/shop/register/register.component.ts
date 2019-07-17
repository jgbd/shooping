import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private async deleteProduct() {

    const res = await swal.fire({
      title: "Eliminar",
      type:'warning',
      text: "Seguro de eliminar recuerde que no podra recuperar el producto despues de esta acción",
      allowOutsideClick: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Aceptar'
    });
  }
}
