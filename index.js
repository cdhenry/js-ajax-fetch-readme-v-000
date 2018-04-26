const token = '48ba16ca61dfbbd97d4282c0605fa6ddd77f9700'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
