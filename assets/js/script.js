const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');

button.addEventListener('click', add);

function add() {
    const today = '01/01';
    const dayExists = nlwSetup.dayExists(today);
    
    if(dayExists) {
        alert('Dia já incluso! 🔴');
        return;
    }

    alert('Dia adicionado com sucesso! 🔵')
    nlwSetup.addDay(today);
}

/* const data = {
    run: ['01-01', '01-02', '01-06'],
    water: ['01-04', '01-05'],
    food: ['01-04', '01-05'],
    journal: ['01-03'],
    takePills: ['01-02']
}

nlwSetup.setData(data);
nlwSetup.load(); */