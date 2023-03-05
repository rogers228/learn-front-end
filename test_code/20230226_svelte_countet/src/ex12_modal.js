import { writable } from 'svelte/store';

export const modal = writable({
    status: 'closed', // opened | closed
    title: null,
    component: null,
    params:{},
});

export const open = (title, params={}, component)=>modal.set({
    status: 'opened', // opened | closed
    title,
    component,
    params,
});

export const close ()=>modal.set({
    status: 'closed', // opened | closed
    title: null,
    component: null,
    params: null,
})