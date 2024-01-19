class Product {
  constructor(
    public id: number, 
    public name: string, 
    public price: number) {}
}

class Delivery {
  constructor(
    public type: 'home' | 'pickup', 
    public date: Date, 
    public addressOrStoreId: string | number) {}
}

class Cart {
  private products: Product[] = [];
  private delivery: Delivery | null = null;

  addProduct(product: Product): void {
    this.products.push(product);
  }

  removeProduct(productId: number): void {
    this.products = this.products.filter(product => product.id !== productId);
  }

  calculateTotal(): number {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  setDelivery(delivery: Delivery): void {
    this.delivery = delivery;
  }

  checkout(): boolean {
    if (this.products.length === 0 || !this.delivery) {
      console.error('Нельзя оформить заказ: пустая корзина или не задана доставка');
      return false;
    }

    console.log('Заказ успешно оформлен:');
    console.log('Товары в корзине:', this.products);
    console.log('Стоимость товаров:', this.calculateTotal());
    console.log('Параметры доставки:', this.delivery);

    return true;
  }
}

const cart = new Cart();
const product1 = new Product(1, 'Ноутбук', 1000);
const product2 = new Product(2, 'Смартфон', 500);

cart.addProduct(product1);
cart.addProduct(product2);

const deliveryToHome = new Delivery('home', new Date('2024-01-20'), 'Улица Свободы, 123');
cart.setDelivery(deliveryToHome);
console.log('Стоимость товаров в корзине:', cart.calculateTotal());
cart.checkout();
