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

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
