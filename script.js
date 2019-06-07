let input = document.querySelectorAll('.input');
let button = document.querySelector('.button').textContent = 'submit'


function placehoder(input) {
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

placehoder(input[0])
placehoder(input[1])