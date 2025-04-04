fetch('https://dummyjson.com/docs/carts')
    .then(res => res.json())
    .then(console.log);