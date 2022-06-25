/**
 *
 * @param renderItems - Element(s) to render
 * @param targetElement - Container inside which elements should be rendered
 */
export const render = (
  renderItems: HTMLElement | HTMLElement[],
  targetElement: HTMLElement,
): void => {
  if (!renderItems || !targetElement) return;

  while (targetElement.firstChild) {
    targetElement.removeChild(targetElement.firstChild);
  }

  if (Array.isArray(renderItems)) {
    targetElement.append(...renderItems);
  } else {
    targetElement.append(renderItems);
  }
};

type CreateElementProps = {
  tagName: string;
  children?: CreateElementProps[];
  [key: string]: any;
};

/**
 *
 * @param param0 - Object data: tagName, children and otherProps
 * @returns HTML element
 */
export const createElement = ({
  tagName,
  children,
  ...otherProps
}: CreateElementProps): HTMLElement => {
  const newElement = document.createElement(tagName);

  Object.keys(otherProps).forEach((prop) => {
    (newElement as any)[prop] = otherProps[prop];
  });

  if (children) {
    children.forEach((child) => {
      newElement.appendChild(createElement(child));
    });
  }

  return newElement;
};

/**
 *
 * @param selector - CSS selector
 * @param parent - Parent element
 * @returns Element or null
 */
export const qs = (selector: string, parent = document as Element | Document) =>
  parent.querySelector(selector);

/**
 *
 * @param selector - CSS selector
 * @param parent - Parent element
 * @returns Array of elements or empty array
 */
export const qsa = (
  selector: string,
  parent = document as Element | Document,
) => [...parent.querySelectorAll(selector)];
