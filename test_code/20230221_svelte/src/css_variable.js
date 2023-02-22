import { writable } from 'svelte/store';

export const css_variable = writable({
    color_test: 'yellow',
    color_test2: 'green',
});