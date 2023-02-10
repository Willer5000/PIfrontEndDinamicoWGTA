import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
import { catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {

  expURL = "https://wgtabackend.onrender.com/explab/"
  constructor(private http: HttpClient) { }

  //public getExperiencia(): Observable<Experiencia[]>{
   // return this.http.get<Experiencia[]>(this.expURL+'lista');
  //}
  public getExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.expURL+'lista').pipe(
      catchError(error => {
        console.error(error);
        return of([]);
      })
    );
  }
  public detail(id: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(this.expURL + `detail/${id}`)
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.http.post<any>(this.expURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.http.put<any>(this.expURL + `update/${id}`, experiencia);
  }
 /* public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.expURL + `delete/${id}`)
  }
}*/
public delete(id: number): Observable<any>{
  return this.http.delete<any>(this.expURL + `delete/${id}`).pipe(
    catchError(error => {
      console.error(error);
      return of({});
    })
  );
}
}
/*
  constructor(private httpClient: HttpClient) { }
  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`)
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`)
  }
}
*/