"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
point.draw();
//inline annotation
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
