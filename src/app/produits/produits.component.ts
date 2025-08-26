import { Component } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
  produits: any[] = [];
  newProduct: any = { id: 0, nom: '', quantite: '', pu: '' };

  addProd() {
    if (this.newProduct.nom && this.newProduct.quantite && this.newProduct.pu != '') {
      this.newProduct.id = this.produits.length + 1;
      this.produits.push({ ...this.newProduct });
      this.newProduct = { id: 0, nom: '', quantite: '', pu: '' };
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }

  deleteProd(id:number) {

      this.produits = this.produits.filter((p)=> p.id != id);
  }

  resetForm() {
    
  }
}
