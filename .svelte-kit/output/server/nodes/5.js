import * as universal from '../entries/pages/projects/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/projects/+page.js";
export const imports = ["_app/immutable/nodes/5.DOJ4P0dL.js","_app/immutable/chunks/scheduler.DfKjgcBM.js","_app/immutable/chunks/index.BUmm9ZEF.js","_app/immutable/chunks/each.CZ1pnjD_.js","_app/immutable/chunks/index.uWCAg5mb.js"];
export const stylesheets = ["_app/immutable/assets/5.Crnxdhiw.css"];
export const fonts = [];
