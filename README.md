# DOM render tools

`dom-render-tools` is a library for easier manipulation of DOM elements.

## Installation

```shell
npm install dom-render-tools
```

## Utils

### render(renderItems, targetElement)

```js
import { render } from 'dom-render-tools';

// Container inside which elements should be rendered: HTMLElement
const target = document.createElement('div');

// Element(s) to render: HTMLElement | HTMLElement[],
const firstChild = document.createElement('span');
const secondChild = document.createElement('span');
const renderItems = [firstChild, secondChild];

// Function call
render(renderItems, target);
```

### createElement({ tagName, children, ...otherProps })

```js
import { createElement } from 'dom-render-tools';

// Create root container with className "root" and three child div's
const root = createElement({
  tagName: 'div',
  className: 'root',
  children: [
    { tagName: 'div', innerHTML: '1', className: 'child' },
    { tagName: 'div', innerHTML: '2', className: 'child' },
    { tagName: 'div', innerHTML: '3', className: 'child' },
  ],
});

// Append created element to body
document.body.append(root);

// Rendered HTML Result
<div class="root">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>;
```

### qs(selector[, parent])

Just an alias for a native `document.querySelector()`. Uses `document` as default parent element if it's not provided.

```js
import { qs } from 'dom-render-tools';

qs('.el', parentElement);
qs('.el');
```

### qsa(selector[, parent])

Native `document.querySelectorAll()` that returns `Array.prototype` of elements that match the specified selectors. Uses `document` as default parent element if it's not provided.

```js
import { qsa } from 'dom-render-tools';

qsa('.el', parentElement);
qsa('.el');
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
