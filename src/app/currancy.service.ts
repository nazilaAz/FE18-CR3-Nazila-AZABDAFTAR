import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrancyService {

  constructor() { 

  const currencyFormater = new Intl.NumberFormat("de-AT", {
    style: "currency",
    currency: "EUR",
  });
}
  
}
