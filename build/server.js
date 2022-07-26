"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
//   import products_routes from './handlers/store';
//   import orders_routes from './handlers/orders';
//   import users_routes from './handlers/users';
const app = (0, express_1.default)();
const address = '0.0.0.0:3000';
const corsConfig = {
    optionsSuccessStatus: 200,
};
app.use((0, cors_1.default)(corsConfig));
app.use(body_parser_1.default.json());
//   products_routes(app);
//   orders_routes(app);
//   users_routes(app);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(3000, () => {
    console.log(`starting app on: ${address}`);
});
exports.default = app;
