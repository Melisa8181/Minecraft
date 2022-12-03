document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json');
        const data = await res.json();
        //console.log(data);
        listProducts(data);
        detectBtn(data);
    } catch (error) {
        console.log(error);
    }
}

const productsContainer = document.querySelector('#products-container')
const listProducts = (data) => {
    const template = document.querySelector('#products-template').content;
    const fragment = document.createDocumentFragment();
    //.log(template)
    data.forEach(product => {
        //console.log(product);
        template.querySelector('img').setAttribute('src', product.thumbnailUrl);
        template.querySelector('h5').textContent = product.title;
        template.querySelector('p span').textContent = product.price;
        template.querySelector('button').dataset.id = product.id;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    productsContainer.appendChild(fragment);
}

let cart = {}

const detectBtn = (data) => {
    const btns = document.querySelectorAll('.newcard button');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            //console.log(btn.dataset.id);
            const product = data.find(item => item.id === parseInt(btn.dataset.id));
            product.amount = 1;
            if(cart.hasOwnProperty(product.id)) {
                product.amount = cart[product.id].amount + 1;
            }

            cart[product.id] = { ...product }
            //console.log('cart', cart);
            listCart();
        })
    })
}

const items = document.querySelector('#items');

const listCart = () => {
    items.innerHTML = '';

    const template = document.querySelector('#template-cart').content;
    const fragment = document.createDocumentFragment()

    Object.values(cart).forEach(product => {
        //console.log('product', product);
        template.querySelector('th').textContent = product.id;
        template.querySelectorAll('td')[0].textContent = product.title;
        template.querySelectorAll('td')[1].textContent = product.amount;
        template.querySelector('span').textContent = product.price * product.amount;

        template.querySelector('.btn-info').dataset.id = product.id;
        template.querySelector('.btn-danger').dataset.id = product.id;

        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })

    items.appendChild(fragment);

    listFooter();
    actionBtns();
}

const footer = document.querySelector('#footer-cart')
const listFooter = () => {

    footer.innerHTML = '';

    if(Object.keys(cart).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Empty cart</th>
        `
        return;
    }

    const template = document.querySelector('#template-footer').content;
    const fragment = document.createDocumentFragment()

    const nAmount = Object.values(cart).reduce((acc, {amount}) => acc + amount, 0)
    const nPrice = Object.values(cart).reduce((acc, {amount, price}) => acc + amount * price, 0)
    //console.log(nPrice)

    template.querySelectorAll('td')[0].textContent = nAmount;
    template.querySelector('span').textContent = nPrice;

    const clone = template.cloneNode(true);
    fragment.appendChild(clone);

    footer.appendChild(fragment);

    const btn = document.querySelector('#empty-cart');
    btn.addEventListener('click', () => {
        cart = {};
        listCart();
    })

}

const actionBtns = () => {
    const addBtns = document.querySelectorAll('#items .btn-info');
    const removeBtns = document.querySelectorAll('#items .btn-danger')

    addBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            //console.log(btn.dataset.id)
            const product = cart[btn.dataset.id]
            product.amount ++;
            cart[btn.dataset.id] = {...product};
            listCart();

        })
    })

    removeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            //console.log('removing...')
            const product = cart[btn.dataset.id]
            product.amount --;
            if(product.amount === 0) {
                delete cart[btn.dataset.id]
            } else {
                cart[btn.dataset.id] = {...product};
            }
            listCart();
        })
    })
}


