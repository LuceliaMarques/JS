export function home(){

    return `<h1>Consulta de CEP</h1>
    <label for="CEP">Infome o CEP</label>
    <input type="text" id="CEP" name="CEP" maxlength="9"/>
    <section class="border display">
        <div id="valor"></div>
    </section>
    `;
}