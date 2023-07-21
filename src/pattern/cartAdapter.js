import { toast } from "react-toastify";

class CartAdapter {
    constructor() {
        this.CartItems = this.CartItems ? this.CartItems : [];
    }

    async getCartItems() {
        return this.CartItems;
    }

    async addItemCart(CartItems, item) {
        const alreadyInCart = CartItems.findIndex(
            (singleitem) => singleitem.id === item.id
        );

        if (alreadyInCart !== -1) {
            return null;
        }

        return item;
    }

    async removeItemFromCart(CartItems, item) {
        return CartItems.filter((aitem) => aitem.id !== item.id);
    }
}

export default CartAdapter;
