export class Planta {
  id: string;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  altura_maxima: string;
  clima: string;
  sustrato_siembra: string;

  public constructor(id: string, nombre_comun: string, nombre_cientifico: string, tipo: string, altura_maxima: string, clima: string, sustrato_siembra: string) {
    this.id = id;
    this.nombre_comun = nombre_comun;
    this.nombre_cientifico = nombre_cientifico;
    this.tipo= tipo;
    this.altura_maxima = altura_maxima;
    this.clima = clima;
    this.sustrato_siembra = sustrato_siembra;
  }

}
