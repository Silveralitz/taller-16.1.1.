const postsContainer = document.getElementById('postsContainer');
const loading = document.getElementById('loading');
const errorMsg = document.getElementById('error');

// Llamada a la API pública JSONPlaceholder
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) throw new Error('Error al conectar con la API');
    return response.json();
  })
  .then(data => {
    loading.style.display = 'none';

    // Mostrar los primeros 10 resultados
    data.slice(0, 10).forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');

      postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      `;

      postsContainer.appendChild(postDiv);
    });
  })
  .catch(error => {
    loading.style.display = 'none';
    errorMsg.textContent = 'Error: ' + error.message;
  });
