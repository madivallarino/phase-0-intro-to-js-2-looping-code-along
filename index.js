// Code your solutions in this file


function writeCards(array, string){
    const message = []
    for (let i = 0; i < array.length; i++){
        message.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`);
    }
    return message;
}

writeCards(["Madi", "Mel", "Rae"], "birthday");


function countDown(number){
    while (number >= 0){
        console.log(number--)
    }
}
