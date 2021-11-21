# DOM render tools

`dom-render-tools` is a library for easier manipulation of DOM elements.

## Installation

```shell
npm install dom-render-tools
```

## Usage

### render(renderItems, targetElement);

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

### createElement({ tagName, children, ...otherProps });

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

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
