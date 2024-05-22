export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.BKgXYHYz.js","app":"_app/immutable/entry/app.CvcCV5NZ.js","imports":["_app/immutable/entry/start.BKgXYHYz.js","_app/immutable/chunks/entry.sqrqo81K.js","_app/immutable/chunks/scheduler.DfKjgcBM.js","_app/immutable/chunks/paths.DpsA2CSx.js","_app/immutable/entry/app.CvcCV5NZ.js","_app/immutable/chunks/scheduler.DfKjgcBM.js","_app/immutable/chunks/index.BUmm9ZEF.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
