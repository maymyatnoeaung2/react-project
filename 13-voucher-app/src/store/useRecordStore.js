import { create } from "zustand";

const useRecordStore = create((set) => ({
  records: [],
  addRecord: (record) => {
    set((state) => ({ records: [...state.records, record] }));
  },
  deleteRecord: (id) => {
    set((state) => ({
      records: state.records.filter((record) => record.id !== id),
    }));
  },
  updateQuantityRecord: (id, quantity) => {
    set((state) => ({
      records: state.records.map((record) => {
        if (record.id === id) {
          const newQuantity = parseInt(record.quantity) + parseInt(quantity);
          return {
            ...record,
            quantity: newQuantity,
            cost: newQuantity * record.product.price,
          };
        }
        return record;
      }),
    }));
  },
  restRecord:() => set({records:[]})
}));

export default useRecordStore;
