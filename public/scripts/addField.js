const scheduleItems = document.querySelector('#schedule-items')

// Procurar o botao
document.querySelector('#add-time')
    .addEventListener('click', () =>{createField()})
// Quando clicar no botao

// Executar acao
function createField() {
    console.log('AAAA')
    // Criar campo e somar no inner HTML do scheduleItem
    scheduleItems.insertAdjacentHTML('beforeend', `
        <div class="schedule-item">
            <button alt="Excluir" class="remove-button" onclick="this.parentNode.remove(); checkButton()"></button>

            <div class="inputs-block">
                <div class="select-block">
                    <label for="weekday">Dia da semana</label>
                    <select name="weekday[]" id="weekday">
                        <option value="" disabled="" hidden="">Selecione uma opção</option>
                
                        <option value="1">
                            Domingo</option>
                        
                        <option value="2">
                            Segunda-feira</option>
                        
                        <option value="3">
                            Terça-feira</option>
                        
                        <option value="4">
                            Quarta-feira</option>
                        
                        <option value="5">
                            Quinta-feira</option>
                        
                        <option value="6">
                            Sexta-feira</option>
                        
                        <option value="7">
                            Sábado</option>

                    </select>
                </div>

                <div class="input-block">
                    <label for="time_from">Das</label>
                    <input type="time" name="time_from[]">
                </div>

                <div class="input-block">
                    <label for="time_to">Ate</label>
                    <input type="time" name="time_to[]">
                </div>
            </div>
        </div>`
    )

    checkButton()
}

// Create first field
createField()

function checkButton(){
    // check how many items are inside shceduleitems
    if (scheduleItems.querySelectorAll('.schedule-item').length == 1) {
        scheduleItems.querySelector('.remove-button').classList.add('hidden')
    }else{
        scheduleItems.querySelectorAll('.remove-button').forEach(button => button.classList.remove('hidden'))
    }
}