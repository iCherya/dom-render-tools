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
