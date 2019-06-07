let input = document.querySelectorAll('.input');
let button = document.querySelector('.button');

let buttonText = button.textContent = 'submit'

function submitForm(input) {
    let name = input.getAttribute('name')
    test(input, name)
    input.addEventListener('focus', () => {
        input.setAttribute('placeholder', '')
    })
    input.addEventListener('blur', () => test(input, name))
}

function test(input, name) {
    input.setAttribute('placeholder', function (name) {
        if (name === 'firstName') {
            return 'First Name'
        } else if (name === 'lastName') {
            return 'Last Name'
        }
    }(name))
}

button.addEventListener('click', submitButton)

function submitButton(evt) {
    let inputValueOne = input[0].value
    let inputValueTwo = input[1].value
    return console.log('nothing?', inputValueOne, inputValueTwo)
}
submitForm(input[0])
submitForm(input[1])