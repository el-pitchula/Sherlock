function solve() {
    const story = document.getElementById('story').value;
    // Enviar a história para o servidor via uma requisição AJAX
    fetch('/solve', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ story: story })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').textContent = data.solution;
    });
  }
  