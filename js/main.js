function getInputFieldValueById(inputId) {
    return parseInt(document.getElementById(inputId).value);
}
function setInputFieldValueById(inputId, inputValue){
    document.getElementById(inputId).value = parseInt(inputValue);
}


const buttons = document.getElementsByClassName('selection-btn');
const buttonArray = Array.from(buttons);
let counter = 1;
buttonArray.forEach(function (button) {
    button.addEventListener('click', function (event) {
        const h5Element = event.target.parentElement.querySelector(".card-title");
        const playerName = h5Element.innerText;
        const appendPlayer = document.getElementById('selected-players');

        if (counter > 5) {
            alert("Max 5 players");
            return;
        }
        appendPlayer.append(counter + '. ' + playerName);
        appendPlayer.append(document.createElement('br'));
        console.log(playerName);
        ++counter ;

    });
});

let TotalValue ;

document.getElementById('calculate').addEventListener('click', function(){
    const perPlayer =  getInputFieldValueById('per-player');
    const playerExpenses = perPlayer*(counter-1);
    setInputFieldValueById('player-expenses', playerExpenses) ;
    const manager = getInputFieldValueById('manager');
    const coach = getInputFieldValueById('coach');
    if(playerExpenses=='' || manager == '' || coach == ''){
        alert("Error input !")  ;
        return ;
    }
    TotalValue = parseFloat(playerExpenses+manager+coach) ;
    console.log(TotalValue);
})

document.getElementById('calculate-total').addEventListener('click', function(){
    setInputFieldValueById('total', TotalValue);
    const playerExpenses = document.getElementById('player-expenses').value ;
    if( playerExpenses == '' || playerExpenses <= 0 || isNaN(playerExpenses)){
        alert('select player first !') ;
        return ;
    } 
})





