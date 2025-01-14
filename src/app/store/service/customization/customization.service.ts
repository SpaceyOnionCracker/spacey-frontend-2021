import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryColorMaterialsModel } from '../../models/category-color-materials.model';

@Injectable({
  providedIn: 'root',
})
export class CustomizationService {
  private customizationUrl = `${environment.url}/api/v1`;

  constructor(private http: HttpClient) {}

  addNewColor(
    color: CategoryColorMaterialsModel
  ): Observable<CategoryColorMaterialsModel> {
    return this.http.post<CategoryColorMaterialsModel>(
      `${this.customizationUrl}/color/add`,
      color
    );
  }

  saveColor(
    color: CategoryColorMaterialsModel
  ): Observable<CategoryColorMaterialsModel> {
    return this.http.put<CategoryColorMaterialsModel>(
      `${this.customizationUrl}/color/edit/${color.id}`,
      color
    );
  }

  addNewCategory(
    category: CategoryColorMaterialsModel
  ): Observable<CategoryColorMaterialsModel> {
    return this.http.post<CategoryColorMaterialsModel>(
      `${this.customizationUrl}/category/add`,
      category
    );
  }

  saveCategory(
    category: CategoryColorMaterialsModel
  ): Observable<CategoryColorMaterialsModel> {
    return this.http.put<CategoryColorMaterialsModel>(
      `${this.customizationUrl}/category/edit/${category.id}`,
      category
    );
  }

  addNewMaterial(
    material: CategoryColorMaterialsModel
  ): Observable<CategoryColorMaterialsModel> {
    return this.http.post<CategoryColorMaterialsModel>(
      `${this.customizationUrl}/material/add`,
      material
    );
  }

  saveMaterial(
    material: CategoryColorMaterialsModel
  ): Observable<CategoryColorMaterialsModel> {
    return this.http.put<CategoryColorMaterialsModel>(
      `${this.customizationUrl}/material/edit/${material.id}`,
      material
    );
  }

  addNewSize(
    size: CategoryColorMaterialsModel
  ): Observable<CategoryColorMaterialsModel> {
    return this.http.post<CategoryColorMaterialsModel>(
      `${this.customizationUrl}/size/add`,
      size
    );
  }

  saveSize(
    size: CategoryColorMaterialsModel
  ): Observable<CategoryColorMaterialsModel> {
    return this.http.put<CategoryColorMaterialsModel>(
      `${this.customizationUrl}/size/edit/${size.id}`,
      size
    );
  }
}
