import {renderContainer, renderItem} from "./renderHTML";

import("./style.scss");
import {items} from "./items";


const root = document.querySelector('#root');
const content = renderContainer(items.map(item => renderItem(item)).join(''));

root.innerHTML = content;