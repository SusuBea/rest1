import {adatLeiro} from "../../adatLeiro.js";
import SorView from "./SorView.js";
import FejlecView from "./FejlecView.js";
import UrlapView from "../Urlap/UrlapView.js";



export default class TablaView {
    #list = [];
    constructor(list, szuloElem) {
      this.szuloElem = szuloElem;
      this.#list = list;
      szuloElem.append(`<table class='table table-striped'>
                          <thead></thead>
                          <tbody></tbody>
                          </table>`);
      this.tbodyElem = szuloElem.find("tbody");
      this.theadElem = szuloElem.find("thead");
      console.log(this.tbodyElem);
      new FejlecView(adatLeiro, this.theadElem);
      this.sorMegjelenit();
      new UrlapView(szuloElem);
    }

    sorMegjelenit(){
        //itt fogjuk példányosítani a sort, ahány elem van 
        this.#list.forEach((elem, index)=>{
            new SorView(index, elem, this.tbodyElem)
            

        })
    }
  }
  