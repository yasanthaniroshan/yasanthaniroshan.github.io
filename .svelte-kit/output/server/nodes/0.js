import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.B09EMNbq.js","_app/immutable/chunks/scheduler.DfKjgcBM.js","_app/immutable/chunks/index.BUmm9ZEF.js","_app/immutable/chunks/paths.DpsA2CSx.js"];
export const stylesheets = ["_app/immutable/assets/0.GeXRuPWo.css"];
export const fonts = [];
