import { Component } from '@angular/core';
import { Usuario } from './model/Usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){
    let usuario1:Usuario = new Usuario();
    usuario1.idUsuario = 1;
    usuario1.apellido = "Londoño";
    usuario1.nombre = "Sebastian";
    usuario1.estado = false;

    let usuario2:Usuario = new Usuario();
    usuario2.idUsuario = 2;
    usuario2.apellido = "Benavides";
    usuario2.nombre = "Julio";
    usuario2.estado = true;

    
    this.listUsuarios.push(usuario1);
    this.listUsuarios.push(usuario2);
    this.eliminarPorId(1);
  }

  public nombres: string[] = ['Pedro','Juan','Gilberto'];
  public nombres2: string[] = ['Auan','Jose'];
  public listUsuarios: Usuario[] = [];

  public activedButton: boolean = false;

  public imagenURL = "https://placeimg.com/600/400/any";

  public concatenar(list: string[], list2: string[]): string[]{
    return list2.concat(list);
  }

  public desactivarBoton(dato: boolean): void{
    this.activedButton = dato;
  }

  public mostrarEvento(event: any): void{

    console.log("Boton enter press");
  }

  public eliminarPorId(id: number): void{
    for (const iterator of this.listUsuarios) {
      if(iterator.idUsuario === id){
        this.listUsuarios.splice(this.listUsuarios.indexOf(iterator),1);
      }
    }
  }

  public addFirstElement(name:string): void{
    this.nombres.unshift(name);
  }

  public addLastElement(name:string): void{
    this.nombres.push(name)
  }

  public deleteFirstElement():void{
    let respuesta = this.nombres.shift();
    console.log("El elemento eliminado es: "+respuesta);
  }

  public deleteLastElement():void{
    let respuesta = this.nombres.pop();
    console.log("Elimino a :"+respuesta);
  }
}
