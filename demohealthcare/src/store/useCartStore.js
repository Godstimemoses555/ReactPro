import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create()(
  persist(
    (set, get) => ({
      cartItems: [],
      isCartOpen: false,

      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

      addToCart: (product) => {
        const currentItems = get().cartItems;
        const existingItem = currentItems.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            cartItems: currentItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item
            ),
          });
        } else {
          set({ cartItems: [...currentItems, { ...product, quantity: 1 }] });
        }
      },

      removeFromCart: (productId) => {
        const currentItems = get().cartItems;
        const existingItem = currentItems.find((item) => item.id === productId);

        if (existingItem.quantity > 1) {
          set({
            cartItems: currentItems.map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          });
        } else {
          set({
            cartItems: currentItems.filter((item) => item.id !== productId),
          });
        }
      },

      deleteFromCart: (productId) => {
        set({
          cartItems: get().cartItems.filter((item) => item.id !== productId),
        });
      },

      clearCart: () => set({ cartItems: [] }),

      getTotalPrice: () => {
        return get().cartItems.reduce(
          (total, item) => total + item.price * (item.quantity || 1),
          0
        );
      },

      getItemCount: () => {
        return get().cartItems.reduce(
          (total, item) => total + (item.quantity || 1),
          0
        );
      },
    }),
    {
      name: 'ciyacare-cart-storage', // unique name for localStorage
    }
  )
);

export default useCartStore;
