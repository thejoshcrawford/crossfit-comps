var redux_1 = require('redux');
exports.createStore = redux_1.createStore;
if (__DEV__) {
    exports.createStore = redux_1.compose(require('redux-devtools').devTools(), require('redux-devtools').persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)), exports.createStore);
}
function renderDevTools(store) {
    if (__DEV__) {
        var _a = require('redux-devtools/lib/react'), DevTools = _a.DevTools, DebugPanel = _a.DebugPanel, LogMonitor = _a.LogMonitor;
        return ("<DebugPanel top right bottom>\n        <DevTools store={store} monitor={LogMonitor} />\n      </DebugPanel>");
    }
    return null;
}
exports.renderDevTools = renderDevTools;
//# sourceMappingURL=devTools.js.map