const cartItems = [];

function addToCart(productName) {
    cartItems.push(productName);
    alert(productName + " foi adicionado ao carrinho!");
    displayCartItems();
}

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
    } else {
        const ul = document.createElement('ul');
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
        cartItemsContainer.appendChild(ul);
    }
}

function continueShopping() {
    alert('Continue comprando!');
    window.scrollTo(0, 0);
}

function finalizePurchase() {
    if (cartItems.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Compra finalizada! Obrigado por comprar conosco.');
        cartItems.length = 0; // Esvazia o carrinho
        displayCartItems();
    }
}
