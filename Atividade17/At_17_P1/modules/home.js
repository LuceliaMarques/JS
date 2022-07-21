export function home(){

    return ` 
    <h3>Atividade 7 - Parte 1</h3>
    <p>Previsão do Tempo</p>
    <label for="estado">Estado:</label>
    <select id="estado">
        <option disabled selected>- Selecione -</option>
        <optgroup label="Nordeste">
            <option value="AL">AL</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="MA">MA</option>
            <option value="PB">PB</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RN">RN</option>
            <option value="SE">SE</option>
        </optgroup>
        <optgroup label="Norte">
            <option value="AC">AC</option>
            <option value="AM">AM</option>
            <option value="AP">AP</option>
            <option value="PA">PA</option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="TO">TO</option>
        </optgroup>
        <optgroup label="Centro-Oeste">
            <option value="DF">DF</option>
            <option value="GO">GO</option>
            <option value="MS">MS</option>
            <option value="MT">MT</option>
        </optgroup>
        <optgroup label="Suldeste">
            <option value="ES">ES</option>
            <option value="MG">MG</option>
            <option value="RJ">RJ</option>
            <option value="SP">SP</option>
        </optgroup>
        <optgroup label="Sul">
            <option value="PR">PR</option>
            <option value="RS">RS</option>
            <option value="SC">SC</option>
        </optgroup>
    </select>
    <label for="selectCidade">Município:</label>
    <select id="selectCidade"></select>
    <section>
        <div id="valor"></div>
    </section>
    `;
}