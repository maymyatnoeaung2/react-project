import { create } from "zustand";
import products from "../data/products";
import cards from "../data/cards";

const useCardStore = create((set) => ({
  cards: [
    {
      id: 1,
      productId: 2,
      quantity: 3,
    },
    {
      id: 2,
      productId: 7,
      quantity: 1,
    },
  ],

  addCard:(newCard) => 
    set((state) => ({
      cards:[...state.cards,newCard]
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      cards: state.cards.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + 1 } : el
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cards: state.cards.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity - 1 } : el
      ),
    })),

  removeQuantity: (id) => set((state) => ({cards:state.cards.filter((el) => el.id !== id )})),

}));

export default useCardStore;
