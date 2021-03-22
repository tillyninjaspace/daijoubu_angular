import {Point} from './point';

let point = new Point(1,2);
point.draw();

//inline annotation

import {LikeComponent} from './like.component';

let component = new LikeComponent(10, true);
component.onClick();
console.log(`likesCount: ${component.likesCount}, isSelected: ${component.isSelected}`)