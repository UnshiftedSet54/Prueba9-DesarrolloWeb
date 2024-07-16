// Manejo de temas
const htmlElement = document.querySelector('html')

document.querySelector('.theme-button-light').onclick = (event) => {
  htmlElement.setAttribute('class', 'light')
}

document.querySelector('.theme-button-dark').onclick = (event) => {
  htmlElement.setAttribute('class', 'dark')
}

// Manejo de datos de formulario
document.getElementById('form').onsubmit = async (event) => {
  event.preventDefault()

  const registroCoche = {
    id: document.getElementById('id').value,
    nombre: document.getElementById('name').value,
    email: document.getElementById('email').value,
    movil: document.getElementById('movil').value,
    matricula: document.getElementById('matricula').value,
    marca: document.getElementById('marca').value,
    modelo: document.getElementById('modelo').value
  }

  const setAlert = (msg, clasName) => {
    const msgElement = document.getElementById('msg')
    msgElement.textContent = msg
    msgElement.setAttribute('class', clasName)
    msgElement.style.visibility = 'visible'
    setTimeout(() => {
      msgElement.style.visibility = 'hidden'
      msgElement.removeAttribute('class')
    }, "3000")
  }

  const response = await fetch('http://localhost:3001/registro', {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(registroCoche)
  })
  .then(response => response.json())
  .then(data => {
    setAlert('Success!', 'success')
    console.log(data.msg)
  })
  .catch(error => {
    setAlert('Fail!', 'fail')
    console.log(error)
  })
}