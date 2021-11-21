/**
 * @jest-environment jsdom
 */
import { createElement, render } from '../index';

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
});
