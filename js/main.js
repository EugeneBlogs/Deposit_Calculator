function changeTheme() {
    if (document.getElementById("light_theme").checked) {
        document.getElementById("body").style.background = "white"
        document.getElementById("body").style.color = "#333"
    } else {
        document.getElementById("body").style.background = "#333"
        document.getElementById("body").style.color = "white"
    }
}

let form = document.forms.calculator

form.money.oninput = Calculate
form.months.onchange = Calculate
form.interest.oninput = Calculate

function Calculate() {
    let initial = +form.money.value
    if (!initial) return
    let interest = form.interest.value * 0.01
    if (!interest) return
    let year = form.months.value / 12
    if (!year) return

    let result = Math.round(initial * (1 + interest * year))
    let height = result / form.money.value * 100 + 'px'
    document.getElementById("height-after").style.height = height
    document.getElementById("money-before").innerHTML = form.money.value
    document.getElementById("money-after").innerHTML = result
}

Calculate()