"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3333;
app.use((0, cors_1.default)({ /* origin:'page adress' */}));
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(PORT, () => console.log('server online'));
