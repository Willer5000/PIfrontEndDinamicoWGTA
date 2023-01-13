export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    ocupacion1: String;
    ocupacion2: String;
    posgrado: String;
    email: String;
    sobreMi: String;
    banner: String;
    img: String;

    constructor(nombre: String, apellido: String,ocupacion1: String, ocupacion2: String, posgrado: String, email: String, sobreMi: String, banner: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ocupacion1 = ocupacion1;
        this.ocupacion2 = ocupacion2;
        this.posgrado = posgrado;
        this.email = email;
        this.sobreMi = sobreMi;
        this.banner = banner;
        this.img = img;
        }
}