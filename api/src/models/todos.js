"use strict";
exports.__esModule = true;
exports.Todos = void 0;
var mongoose_1 = require("mongoose");
var TodosSchema = new mongoose_1.Schema({
    todo: { type: String, required: [true, "Insira uma todo"] },
    belongTo: { type: String, required: [true, "Insira a qual lista esta todo pertence"] },
    completed: { type: Boolean, "default": false },
    details: { type: String, "default": "" }
});
var Todos = (0, mongoose_1.model)("Todos", TodosSchema);
exports.Todos = Todos;
