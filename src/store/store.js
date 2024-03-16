import {create} from "zustand";

export const useStoreMenu = create((set) => ({
    menu: false,
    changeMenuStatus: (state) => set(() => ({menu: state})),
}))

export const useStoreFavourite = create((set) => ({
    favorite: [],
    setFavorite: (state) => set(() => ({favourite: state}))
}))