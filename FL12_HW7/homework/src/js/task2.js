let starter = confirm('Do you want to play a game?');
let userPrize = 0;
let maxNum = 9;
let attempts = 3;
let prize = 100;
if (starter === true) {
    let randomNum = Math.floor(Math.random() * Math.floor(maxNum));
    console.log(randomNum);
    let changeOne = prompt(`
    Choose a roulette pocket number from 0 to ${maxNum - 1}? 
    \nAttempts left: ${attempts}
    \nTotal prize:${userPrize}$
    \nPossible prize on current attempt: ${prize}$
    `);
    console.log(changeOne);
    if (randomNum === parseInt(changeOne)) {
        alert(`Congratulation, you won!   Your prize is:${prize}$`);
        let userPrize = + prize;
        let runAgain = confirm('Do you want play again?');
        if (runAgain) {
            let maxNum = 13;
            let attempts = 3;
            let prize = 200;
            let randomNum = Math.floor(Math.random() * Math.floor(maxNum));
            console.log(randomNum);
            let changeOne = prompt(`
            Choose a roulette pocket number from 0 to ${maxNum - 1}? 
            \nAttempts left: ${attempts}
            \nTotal prize:${userPrize}$
            \nPossible prize on current attempt: ${prize}$
            `);
            console.log(changeOne);
            if (randomNum === parseInt(changeOne)) {
                alert(`Congratulation, you won!   Your prize is:${prize}$`);
            } else {
                let changeTwo = prompt(`
                Choose a roulette pocket number from 0 to ${maxNum - 1}? 
                \nAttempts left: ${attempts - 1}
                \nTotal prize:${userPrize}$
                \nPossible prize on current attempt: ${prize / 2}$`
                );
                if (parseInt(changeTwo) === randomNum) {
                    alert(`Congratulation, you won!   Your prize is:${prize / 2}$`);
                } else {
                    let changeThree = prompt(`
                    Choose a roulette pocket number from 0 to ${maxNum - 1}? 
                    \nAttempts left: ${attempts - 2}
                    \nTotal prize:${userPrize}$
                    \nPossible prize on current attempt: ${prize / 4}$
                    `);
                    if (parseInt(changeThree) === randomNum) {
                        alert(`Congratulation, you won!   Your prize is: ${prize / 4}$`);
                    }
                }
            }
        }
    } else {

        let changeTwo = prompt(`
        Choose a roulette pocket number from 0 to ${maxNum - 1}? 
        \nAttempts left: ${attempts - 1}
        \nTotal prize:${userPrize}$
        \nPossible prize on current attempt: ${prize / 2}$`
        );
        if (parseInt(changeTwo) === randomNum) {
            alert(`Congratulation, you won!   Your prize is:${prize / 2}$`);
            let userPrize = + prize / 2;
            let runAgain = confirm('Do you want play again?');
            if (runAgain) {
                let maxNum = 13;
                let attempts = 3;
                let prize = 200;
                let randomNum = Math.floor(Math.random() * Math.floor(maxNum));
                console.log(randomNum);
                let changeOne = prompt(`
                Choose a roulette pocket number from 0 to ${maxNum - 1}? 
                \nAttempts left: ${attempts}
                \nTotal prize:${userPrize}$
                \nPossible prize on current attempt: ${prize}$
                `);
                console.log(changeOne);
                if (randomNum === parseInt(changeOne)) {
                    alert(`Congratulation, you won!   Your prize is:${userPrize}$`);
                } else {
                    let changeTwo = prompt(`
                    Choose a roulette pocket number from 0 to ${maxNum - 1}? 
                    \nAttempts left: ${attempts - 1}
                    \nTotal prize:${userPrize}$
                    \nPossible prize on current attempt: ${prize / 2}$`
                    );
                    if (parseInt(changeTwo) === randomNum) {
                        alert(`Congratulation, you won!   Your prize is:${prize / 2}$`);
                    } else {
                        let changeThree = prompt(`
                        Choose a roulette pocket number from 0 to ${maxNum - 1}? 
                        \nAttempts left: ${attempts - 2}
                        \nTotal prize:${userPrize}$
                        \nPossible prize on current attempt: ${prize / 4}$
                        `);
                        if (parseInt(changeThree) === randomNum) {
                            alert(`Congratulation, you won!   Your prize is: ${prize / 4}$`);
                        }
                    }
                }
            }
        } else {
            let changeThree = prompt(`
            Choose a roulette pocket number from 0 to ${maxNum - 1}? 
            \nAttempts left: ${attempts - 2}
            \nTotal prize:${userPrize}$
            \nPossible prize on current attempt: ${prize / 4}$
            `);
            if (parseInt(changeThree) === randomNum) {
                alert(`Congratulation, you won!   Your prize is: ${prize / 4}$`);
                let userPrize = + prize / 4;
                let runAgain = confirm('Do you want play again?');
                if (runAgain) {
                    let maxNum = 13;
                    let attempts = 3;
                    let prize = 200;
                    let randomNum = Math.floor(Math.random() * Math.floor(maxNum));
                    console.log(randomNum);
                    let changeOne = prompt(`
                    Choose a roulette pocket number from 0 to ${maxNum - 1}? 
                    \nAttempts left: ${attempts}
                    \nTotal prize:${userPrize}$
                    \nPossible prize on current attempt: ${prize}$
                    `);
                    console.log(changeOne);
                    if (randomNum === parseInt(changeOne)) {
                        alert(`Congratulation, you won!   Your prize is:${prize + userPrize}$`);
                    } else {
                        let changeTwo = prompt(`
                        Choose a roulette pocket number from 0 to ${maxNum - 1}? 
                        \nAttempts left: ${attempts - 1}
                        \nTotal prize:${userPrize}$
                        \nPossible prize on current attempt: ${prize / 2}$`
                        );
                        if (parseInt(changeTwo) === randomNum) {
                            alert(`Congratulation, you won!   Your prize is:${prize / 2}$`);
                        } else {
                            let changeThree = prompt(`
                            Choose a roulette pocket number from 0 to ${maxNum - 1}? 
                            \nAttempts left: ${attempts - 2}
                            \nTotal prize:${userPrize}$
                            \nPossible prize on current attempt: ${prize / 4}$
                            `);
                            if (parseInt(changeThree) === randomNum) {
                                alert(`Congratulation, you won!   Your prize is: ${prize / 4}$`);
                            }
                        }
                    }
                }

            } else {
                alert('Thank you for your participation. Your prize is: … $');
                let runAgain = confirm('Do you want play again?');
                if (runAgain) {
                    let maxNum = 13;
                    let attempts = 3;
                    let prize = 200;
                    let randomNum = Math.floor(Math.random() * Math.floor(maxNum));
                    console.log(randomNum);
                    let changeOne = prompt(`
                    Choose a roulette pocket number from 0 to ${maxNum - 1}? 
                    \nAttempts left: ${attempts}
                    \nTotal prize:${userPrize}$
                    \nPossible prize on current attempt: ${prize}$
                    `);
                    console.log(changeOne);
                    if (randomNum === parseInt(changeOne)) {
                        alert(`Congratulation, you won!   Your prize is:${prize + userPrize}$`);
                    } else {
                        let changeTwo = prompt(`
                        Choose a roulette pocket number from 0 to ${maxNum - 1}? 
                        \nAttempts left: ${attempts - 1}
                        \nTotal prize:${userPrize}$
                        \nPossible prize on current attempt: ${prize / 2}$`
                        );
                        if (parseInt(changeTwo) === randomNum) {
                            alert(`Congratulation, you won!   Your prize is:${prize / 2}$`);
                        } else {
                            let changeThree = prompt(`
                            Choose a roulette pocket number from 0 to ${maxNum - 1}? 
                            \nAttempts left: ${attempts - 2}
                            \nTotal prize:${userPrize}$
                            \nPossible prize on current attempt: ${prize / 4}$
                            `);
                            if (parseInt(changeThree) === randomNum) {
                                alert(`Congratulation, you won!   Your prize is: ${prize / 4}$`);
                            }
                        }
                    }
                }
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}


