import { Component, OnInit } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';
import { faCocktail } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { data } from 'src/app/components/food.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  faHamburger = faHamburger;
  faBars = faBars;
  faAppleAlt = faAppleAlt;
  faCocktail = faCocktail;
  faPizzaSlice = faPizzaSlice;
  itens;
  itemSearch;


  foods(food: string){
    if (food === "all") {
      this.itens = data.food;
    } else {
      this.itens = data.food.filter((e) => e.cuisine === food);
    }
  }

  constructor() { }

  ngOnInit(): void { }

  search(foodSearch: string) {
   this.itemSearch= data.food.filter(el => el.title.toLowerCase().includes(foodSearch.toLowerCase()))
  }



}
