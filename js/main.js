fetch('data/posts_temp.json')
    .then(response => response.json())
    .then(posts => renderPosts(posts))
    .catch(error => console.error('Error fetching posts:', error));
    
/* getData()

async function getData() {
  const url = "https://api.jsonbin.io/v3/b/6909beb0d0ea881f40d2ab06";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    await renderPosts(result.record)
  } catch (error) {
    console.error(error.message);
  }
} */

async function renderPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <div class ="timestamp">${post.timestamp || ''}</div>
            <p><strong>${post.title || ''}</strong></p>
            ${post.image ? `<img src="${post.image}" alt="${post.alt || 'Post image'}" />` : ''}
            ${post.content ? `<p>${post.content}</p>` : ''}
            <div class="like-button">👍 Like</div>
        `;
        postsContainer.appendChild(postElement);
    });
}

