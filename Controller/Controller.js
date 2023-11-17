import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";
import UrlapView from "../View/Urlap/UrlapView.js";


export default class Controller{
    constructor(){
        this.dataService = new DataService();
        this.dataService.getData("adatok.json", this.megjelenit)
        this.lista = adatLeiro;
        
    }

    megjelenit(list){
        console.log(list)
        //példányosítjuk a view-t Táblázatot
        new TablaView(list, $(".adatok"));
        new UrlapView($(".urlap"));

    }

}