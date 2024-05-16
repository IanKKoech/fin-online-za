// // Assuming types are defined in AppTypes.ts
// import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";
// import { useDispatch } from "react-redux";
// import { useSelectorTyped } from "@/hooks/redux"; // We'll define this hook later
// import { AppState, BankConfiguration, OrganisationProduct } from "AppTypes"; // Import your types

// // Define initial state for app slice
// const initialAppState: AppState = {
//   bankDetails: null,
//   organisationProducts: null,
// };

// // Define initial state for products slice
// const initialProductsState: OrganisationProduct[] = [];

// // Create the app slice
// const bankConfigurationSlice = createSlice({
//   name: "app",
//   initialState: initialAppState,
//   reducers: {
//     setBankDetails: (state, action: PayloadAction<BankConfiguration>) => {
//       state.bankDetails = action.payload;
//     },
//   },
// });

// // Create the products slice
// const productsSlice = createSlice({
//   name: "products",
//   initialState: initialProductsState,
//   reducers: {
//     addProduct: (state, action: PayloadAction<OrganisationProduct>) => {
//       state.push(action.payload);
//     },
//   },
// });

// // Combine the reducers
// const rootReducer = combineReducers({
//   app: bankConfigurationSlice.reducer,
//   products: productsSlice.reducer,
// });

// // Create the store
// const store = configureStore({
//   reducer: rootReducer,
// });

// export type RootState = ReturnType<typeof rootReducer>;

// export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
// export const useAppSelector = useSelectorTyped; // Use your custom selector hook

// // Export actions from both slices
// export const { setBankDetails } = bankConfigurationSlice.actions;
// export const { addProduct } = productsSlice.actions;

// export default store;