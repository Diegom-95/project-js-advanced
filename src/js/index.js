// Importiamo lo stile CSS
import './css/style.css';

// Codice JavaScript di esempio
document.addEventListener('DOMContentLoaded', () => {
  console.log('Il progetto è stato caricato correttamente!');
  
  // Aggiungiamo un piccolo elemento al DOM
  const app = document.getElementById('app');
  const button = document.createElement('button');
  button.textContent = 'Cliccami!';
  button.addEventListener('click', () => {
    alert('Hai cliccato il pulsante!');
  });
  
  app.appendChild(button);
});
