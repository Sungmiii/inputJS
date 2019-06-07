let input = document.querySelectorAll('.input');



function placehoder(input) {
    let name = input.getAttribute('name')
    input.setAttribute('placeholder', function (name) {
        if (name === 'firstName') {
            return 'First Name'
        } else if (name === 'lastName') {
            return 'Last Name'
        }
    }(name))

    input.addEventListener('focus', () => {
        input.setAttribute('placeholder', '')
    })

    input.addEventListener('blur', () => input.setAttribute('placeholder', function (name) {
        if (name === 'firstName') {
            return 'First Name'
        } else if (name === 'lastName') {
            return 'Last Name'
        }
    }(name)))
}

placehoder(input[0])
placehoder(input[1])