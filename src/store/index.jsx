 
import { create } from "zustand";

// Create the Zustand store
export const useCartStore = create((set, get) => ({
  cart: JSON.parse(localStorage.getItem("cart") || "[]"), // Load initial state from localStorage

  // Add product to cart
  addToCart: (product, quantity = 1) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If the product exists in the cart, update its quantity
        const updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Persist updated cart
        return { cart: updatedCart };
      } else {
        // Otherwise, add the product to the cart
        const newCart = [...state.cart, { ...product, quantity }];
        localStorage.setItem("cart", JSON.stringify(newCart)); // Persist new cart
        return { cart: newCart };
      }
    }),

  // Remove product from cart
  removeFromCart: (productId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Persist updated cart
      return { cart: updatedCart };
    }),


  // Increase quantity by 1
  increaseQuantity: (productId) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  // Decrease quantity by 1
  decreaseQuantity: (productId) =>
    set((state) => {
      const updatedCart = state.cart.map((item) => {
        if (item.id === productId) {
          const newQuantity = item.quantity - 1;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean);
      
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),

  // Check if product is in cart
  isInCart: (productId) => {
    const state = get();
    return state.cart.some((item) => item.id === productId);
  },

  // Get product quantity in cart
  getQuantity: (productId) => {
    const state = get();
    const product = state.cart.find((item) => item.id === productId);
    return product ? product.quantity : 0;
  },

  // Get total items count
  getTotalItems: () => {
    const state = get();
    return state.cart.reduce((total, item) => total + item.quantity, 0);
  },

  // Get total price
  getTotalPrice: () => {
    const state = get();
    return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  // Clear the cart
  clearCart: () => {
    localStorage.removeItem("cart"); // Clear localStorage
    set({ cart: [] }); // This updates the store state immediately
  },
}));
