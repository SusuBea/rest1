export default class UrlapView {
  constructor(szuloElem) {
    //létrehozok egy form taget
    //létrehozok egy kapaszkodót a formelemhez this.formElem
    this.szuloElem = szuloElem;
    let txt = this.htmlOsszerak();
    this.szuloElem.append(txt);


  }

  htmlOsszerak() {
    //végigmegyek az adatLeiro kulcsain és létrehozom az egyes beviteli mezőket
    let txt = "";

    txt += `<form action="/action_page.php">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe"><br><br>

        <input type="submit" value="Submit">
      </form>`;

      return txt;

    // <div class="mb-3 mt-3">
    //     <label for="email" class="form-label">Email:</label>
    //     <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
    // </div>
  }
}
