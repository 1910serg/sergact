export default class SergactDOMComponent {
    constructor(element) {
        this._currentElement = element;
    }

    mountComponent(container) {
        // создаем константы элемента, содержимого внутри этого элемента и узел, который присвоим в дальнейшем элементу
        const domElement = document.createElement(this._currentElement.type);
        console.log('SergactDOMComponent.mountComponent this._currentElement.type:', this._currentElement.type);
        const text = this._currentElement.props.children;
        const textNode = document.createTextNode(text);
        // присваиваем элементу наш узел
        domElement.appendChild(textNode);
        // засовываем в наш рут получившийся дом элемент
        container.appendChild(domElement);

        this._hostNode = domElement;
        // возвращаем созданный дом элемнет
        return domElement;
    }
}
