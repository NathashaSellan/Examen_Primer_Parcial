import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string ="Formato de Correo";
  usuario ={
    email: ''
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm){
    console.log('submit');
    console.log('Email:', this.usuario.email);
    

  }

}
// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-input',
//   templateUrl: './input.page.html',
//   styleUrls: ['./input.page.scss'],
// })
// export class InputPage implements OnInit {

//   nombre: string ="Nathasha Sellan";
//   usuario ={
//     email: '',
//     telefono:'',
//     birthday:''
//   }
//   constructor() { }

//   ngOnInit() {
//   }

//   onSubmit(formulario: NgForm){
//     console.log('submit');
//     console.log('Nombre:', this.nombre);
//     console.log('Email:', this.usuario.email);
//     console.log('Telefono:', this.usuario.telefono);
//     console.log('Fecha de Nacimiento:', this.usuario.birthday);

//     const fechaNacimientoDate = new Date(this.usuario.birthday);
//     const fechaActual = new Date();
//     const edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();

//     console.log('Edad:', edad);

//   }

// }