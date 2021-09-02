import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

export interface Image {
  id: number,
  fileName: string,
  originFileName: string
}

@Injectable({
  providedIn: 'root'
})
export class ImageService extends BaseService<Image> {

  constructor(http: HttpClient) {
    super('/api/image', http);
  }
}
