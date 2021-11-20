/* eslint-disable import/prefer-default-export */

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
