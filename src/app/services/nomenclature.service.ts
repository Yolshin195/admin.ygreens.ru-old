import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Image } from './image.service';

export interface Nomenclature {
  id: number,
  title: string,
  description: string,
  image: Image
}

@Injectable({
  providedIn: 'root'
})
export class NomenclatureService extends BaseService<Nomenclature> {

  constructor(http: HttpClient) {
    super('/api/nomenclature', http);
  }
}
