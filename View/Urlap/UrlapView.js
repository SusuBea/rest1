export default class UrlapView {
  constructor(szuloElem) {
    //létrehozok egy form taget
    //létrehozok egy kapaszkodót a formelemhez this.formElem
    this.szuloElem = szuloElem;
    //let txt = this.htmlOsszerak();
    this.htmlOsszerak();
  }

  htmlOsszerak() {
    //végigmegyek az adatLeiro kulcsain és létrehozom az egyes beviteli mezőket
    let txt = "";

    txt += `    <form action="/action_page.php">
                <div class="mb-3 mt-3">
                  <label for="email" class="form-label">Sorszám:</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter sorszám" name="email">
                </div>
                <div class="mb-3 mt-3">
                    <label for="nev" class="form-label">Név:</label>
                    <input type="nev" class="form-control" id="nev" placeholder="Enter név" name="nev">
                </div>
                <div class="mb-3 mt-3">
                    <label for="szulev" class="form-label">Születési év:</label>
                    <input type="text" class="form-control" id="szulev" placeholder="Enter születési év" name="szulev">
                </div>
                <input type="submit" value="Submit">
                </form>`;

    this.szuloElem.append(txt);

   
  }
}
