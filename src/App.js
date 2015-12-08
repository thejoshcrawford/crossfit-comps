var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var redux_1 = require('redux');
var devTools_1 = require('../utils/devTools');
var reducers = require('../reducers');
var reducer = redux_1.combineReducers(reducers);
var store = devTools_1.createStore(reducer);
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return ("<div>\n        <Provider store={store}>\n          {() => <FriendListApp /> }\n        </Provider>\n\n        {renderDevTools(store)}\n      </div>");
    };
    return App;
})(Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//# sourceMappingURL=App.js.map