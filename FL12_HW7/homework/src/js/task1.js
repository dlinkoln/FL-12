let userEmail = 'user@gmail.com';
let adminEmail = 'admin@gmail.com';
let email = prompt('Input your email');
let userPass = 'UserPass';
let adminPass = 'AdminPass';

if (email === '' || email === null) {
    alert('Canceled');
} else if (email.length < 5) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (email === userEmail) {
    let passU = prompt('Enter password user...');
    if (passU === '' || passU === null) {
        alert('Canceled');
    } else if (passU === userPass) {
        let changeU = confirm('Do you want to change your password?');
        if (changeU === true) {
            let passUtoC = prompt('Enter password admin again...');
            if (passUtoC === userPass) {
                let changeUpass = prompt('Enter new password');
                if (changeUpass === '' || changeUpass === null) {
                    alert('Canceled');
                } else if (changeUpass.length < 6) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let againUpass = prompt('Repeat user pass');
                    if (againUpass === changeUpass) {
                        userPass = changeUpass;
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            }
        } else {
            alert('You have failed the change.');
        }
    }
} else if (email === adminEmail) {
    let passA = prompt('Enter password admin...');
    if (passA === '' || passA === null) {
        alert('Canceled');
    } else if (passA === adminPass) {
        let changeA = confirm('Do you want to change your password?');
        if (changeA === true) {
            let passAtoC = prompt('Enter password user again...');
            if (passAtoC === adminPass) {
                let changeApass = prompt('Enter new password');
                if (changeApass === '' || changeApass === null) {
                    alert('Canceled');
                } else if (changeApass.length < 6) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let againApass = prompt('Repeat admin pass');
                    if (againApass === changeApass) {
                        adminPass = changeApass;
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            }
        } else {
            alert('You have failed the change.');
        }
    }
} else {
    console.log('I don’t know you');
}