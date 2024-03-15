import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice ({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: [],
    },
    reducers: {
        searchFilterChane: (state, action) => {
            state.search = action.payload;
        },
        statusFilterChane: () => {

        },
        prioritiesFilterChane: () => {

        }
    }
});