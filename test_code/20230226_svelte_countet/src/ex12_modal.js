import { writable } from 'svelte/store';

export const modal = writable({
    status: 'closed', // opened | closed
    title: null,
    component: null,
    params:{},
    firstFocusElement: null,
});

export const open = (title, params={}, component) => modal.set({
    status: 'opened', // opened | closed
    title,
    component,
    params,
    firstFocusElement: document.activeElement,
});

export const close = () => modal.set({
    status: 'closed', // opened | closed
    title: null,
    component: null,
    params: null,
    firstFocusElement: null,
})