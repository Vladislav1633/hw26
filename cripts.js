const input  = document.querySelector('#input')
const submit = document.querySelector('#covertBtn')
const currency = document.querySelector('#curency')
const res = document.querySelector('#res')
const HandleGet =() => {
    console.log(currency.value)
    console.log(input.value)
    fetch(`https://api.exchangerate.host/latest&base=KGS&symbols=${currency.value}&amount=${input.value}&places`)
        .then(response => response.json())
        .then(data => {
            res.innerHTML = &{input.value} KGS =&{object.values(data.rates)}
        })
}

submit.addEventListener('click',HandleGet)