let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

let productsDiv = document.getElementsByClassName('products')[0];

for (const product of products) {
    let productBlock = document.createElement('div');
    productsDiv.append(productBlock);

    let h2 = document.createElement('h2')
    h2.innerText = product.title + ' ' + product.price + ' ' + 'Uah';

    let img = document.createElement('img');
    img.src = product.image;

    let button = document.createElement('button');
    button.innerText = 'Add to cart'

    productBlock.append(h2, img, button);

    button.onclick = function () {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}