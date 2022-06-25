/**
 * @jest-environment jsdom
 */
import { createElement, render, qs, qsa } from '../index';

describe('DOM render tools', () => {
  describe('render function', () => {
    const target = document.createElement('div');
    target.classList.add('root');

    const child = document.createElement('div');
    child.textContent = 'Initial child';

    target.append(child);

    it('should do nothing if provided params are not defined', () => {
      // @ts-ignore
      render();

      expect(target.innerHTML).toBe('<div>Initial child</div>');
      expect(target).toMatchSnapshot();
    });

    it('should clean up target container and render provided single element', () => {
      const newChild = document.createElement('div');
      newChild.textContent = 'New child';

      render(newChild, target);

      expect(target.innerHTML).toBe('<div>New child</div>');
      expect(target).toMatchSnapshot();
    });

    it('should clean up target container and render provided array of elements', () => {
      const arrayOfElements = new Array(3).fill(null).map((_, index) => {
        const element = document.createElement('span');
        element.textContent = String(index);

        return element;
      });

      render(arrayOfElements, target);

      expect(target.innerHTML).toBe(
        '<span>0</span><span>1</span><span>2</span>',
      );
      expect(target).toMatchSnapshot();
    });
  });

  describe('createElement function', () => {
    const { body } = document;

    beforeEach(() => {
      body.innerHTML = '';
    });

    it('should create new HTML element', () => {
      const element = createElement({ tagName: 'div', className: 'root' });
      body.append(element);

      expect(body.innerHTML).toBe('<div class="root"></div>');
      expect(body).toMatchSnapshot();
    });

    it('should create new HTML element with child elements', () => {
      const element = createElement({
        tagName: 'div',
        className: 'root',
        children: [
          { tagName: 'span', innerHTML: '1' },
          { tagName: 'span', innerHTML: '2' },
          { tagName: 'span', innerHTML: '3' },
        ],
      });
      body.append(element);

      expect(body.innerHTML).toBe(
        '<div class="root"><span>1</span><span>2</span><span>3</span></div>',
      );
      expect(body).toMatchSnapshot();
    });
  });

  describe('qs function', () => {
    const SELECTOR = 'el';

    beforeEach(() => {
      document.body.innerHTML = '';
    });

    it('should return element by CSS selector', () => {
      const parent = document.createElement('div');
      document.body.append(parent);

      const element = document.createElement('div');
      element.classList.add(SELECTOR);
      parent.append(element);

      expect(qs(`.${SELECTOR}`, parent)).toEqual(element);
    });

    it('should return null if element is not found', () => {
      const parent = document.createElement('div');
      document.body.append(parent);

      expect(qs(`.${SELECTOR}`, parent)).toBe(null);
    });

    it('should assign document to parent if parent is not provided', () => {
      const element = document.createElement('div');
      element.classList.add(SELECTOR);
      document.body.append(element);

      expect(qs(`.${SELECTOR}`)).toEqual(element);
    });
  });

  describe('qsa function', () => {
    const SELECTOR = 'el';

    beforeEach(() => {
      document.body.innerHTML = '';
    });

    it('should return array of elements by CSS selector', () => {
      const parent = document.createElement('div');
      document.body.append(parent);

      const elements = new Array(3).fill(null).map(() => {
        const element = document.createElement('span');
        element.classList.add(SELECTOR);

        return element;
      });

      elements.forEach((element) => parent.append(element));

      expect(qsa(`.${SELECTOR}`, parent)).toEqual(elements);
    });

    it('should return empty array if no elements are found', () => {
      const parent = document.createElement('div');
      document.body.append(parent);

      expect(qsa(`.${SELECTOR}`, parent)).toEqual([]);
    });

    it('should assign document to parent if parent is not provided', () => {
      const elements = new Array(3).fill(null).map(() => {
        const element = document.createElement('span');
        element.classList.add(SELECTOR);

        return element;
      });

      elements.forEach((element) => document.body.append(element));

      expect(qsa(`.${SELECTOR}`)).toEqual(elements);
    });
  });
});
