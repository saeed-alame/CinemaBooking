const total = document.getElementById('total')
const name = document.getElementById('name').value
const age = document.getElementById('age').value
const number = document.getElementById('number').value
const displayName = document.getElementById('displayName')
const displayNumber = document.getElementById('displayNumber')

function calc(){
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    displayName.innerHTML = name
    displayNumber.innerHTML = number
    total.innerHTML = number * 10
}

function clr(){
    document.getElementById('age').value = null
    document.getElementById('name').value = null
    document.getElementById('number').value = null
    displayName.innerHTML = '{Name}'
    displayNumber.innerHTML = '-'
    total.innerHTML = '-'

    /* Simpler Option :
    
    window.location.reload(); */
}
