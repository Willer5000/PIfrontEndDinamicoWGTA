export class Experiencia {
    id? : Number;
    logoex : String;
    urlex : String;
    empresaex : String;
    descripcionex : String;
    lugarex: String;
    cargoex: String;
    desdeex: String;
    hastaex: String;

 constructor(logoex: String, urlex: String, empresaex: String, descripcionex: String, lugarex: String, cargoex: String, desdeex: String, hastaex: String){
    this.logoex = logoex;
    this.urlex = urlex;
    this.empresaex = empresaex;
    this.descripcionex = descripcionex;
    this.lugarex = lugarex;
    this.cargoex = cargoex;
    this.desdeex = desdeex;
    this.hastaex = hastaex;

        }
}


