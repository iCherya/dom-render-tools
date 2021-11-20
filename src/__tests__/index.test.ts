/**
 * @jest-environment jsdom
 */
import { render } from '../index';

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
});
