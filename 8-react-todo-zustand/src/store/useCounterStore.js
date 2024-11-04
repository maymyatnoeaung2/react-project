import { create } from "zustand";

const useCounterStore = create((set) => ({
    count: 9,
    resetCount: () => set({count:0}),
    increaseCount:(amount) => set((state) => ({count:state.count+amount})),
    decreaseCount:() =>set((state) => ({count:state.count-1})),
})
    
)


export default useCounterStore;
