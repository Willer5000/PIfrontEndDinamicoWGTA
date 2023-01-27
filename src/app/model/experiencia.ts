export class Experiencia {
    id? : Number;
    logoEx : String;
    urlEx : String;
    empresaEx : String;
    descripcionEx : String;
    lugarEx: String;
    cargoEx: String;
    desdeEx: String;
    hastaEx: String;

 constructor(logoEx: String, urlEx: String, empresaEx: String, descripcionEx: String, lugarEx: String, cargoEx: String, desdeEx: String, hastaEx: String){
    this.logoEx = logoEx;
    this.urlEx = urlEx;
    this.empresaEx = empresaEx;
    this.descripcionEx = descripcionEx;
    this.lugarEx = lugarEx;
    this.cargoEx = cargoEx;
    this.desdeEx = desdeEx;
    this.hastaEx = hastaEx;

        }
}


