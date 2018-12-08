/* VARIJABLE I SELEKTORI */

const forma = document.getElementById('forma')
const ime = document.getElementById('ime')
const email = document.getElementById('email')
const lozinka = document.getElementById('lozinka')

let sveJeValidno = true

/* FUNKCIJE */

function proveriIme() {
  if (ime.value.length > 3 && ime.value.length < 30 && ime.value.includes(' ')) {
    ime.classList.add('valid')
    ime.classList.remove('invalid')
  } else {
    sveJeValidno = false
    ime.classList.add('invalid')
    ime.classList.remove('valid')
  }
}

function proveriEmail() {
  if (email.value.includes('@') && email.value.includes('.')) {
    email.classList.add('valid')
    email.classList.remove('invalid')
  } else {
    sveJeValidno = false
    email.classList.add('invalid')
    email.classList.remove('valid')
  }
}

function proveriLozinku() {
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(lozinka.value)) {
    lozinka.classList.add('valid')
    lozinka.classList.remove('invalid')
  } else {
    sveJeValidno = false
    lozinka.classList.add('invalid')
    lozinka.classList.remove('valid')
  }
}

function proveri(e) {
  e.preventDefault()

  sveJeValidno = true
  proveriIme()
  proveriEmail()
  proveriLozinku()

  if (sveJeValidno) forma.submit()
}

/* DOGADJAJI */

forma.addEventListener('submit', proveri)
ime.addEventListener('input', proveriIme)
email.addEventListener('input', proveriEmail)
lozinka.addEventListener('input', proveriLozinku)
