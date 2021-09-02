import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Nomenclature } from './nomenclature.service';

export interface DocumentToPlant {
  id: number
  substrate: Nomenclature;
  box: Nomenclature;
  seed: Nomenclature;
  numberOfSeeds: number;
  seedDate: Date;
  putOnRackWithoutLight: Date;
  putOnRackWithLight: Date;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentToPlantService extends BaseService<DocumentToPlant> {
  constructor(http: HttpClient) {
    super('/api/admin/document/toplant', http);
  }
}
