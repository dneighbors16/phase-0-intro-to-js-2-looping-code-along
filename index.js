const messages =[];

function writeCards(names, event){
    for (let i = 0; i < (names).length; i++){
        messages.push(`Thank you, ${(names)[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(input){
    let integer = (input);
    while (integer >= 0){
        console.log(integer);
        integer --;
    }
}