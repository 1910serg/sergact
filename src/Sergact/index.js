import SergactCompositeComponentWrapper from "./SergactCompositeComponentWrapper.js";

export const Sergact = {
    createElement(type, props, children) {
        const element = {
            type,
            props: props || {},
        };

        if (children) {
            element.props.children = children;
        };

        // возвращаем объект
        return element; 
    },

    createClass(spec) {
        function Constructor(props) {
            this.props = props;
        };

        // в этой части мы добавляем к объекту прототип конструктора Constructor (в котором содержится единственное свойство - constructor) метод рендер, который возвращает желаемую строку
        Constructor.prototype.render = spec.render;

        return Constructor;
    },
    
    render(element, container) {
        const componentInstance = new SergactCompositeComponentWrapper(element);

        return componentInstance.mountComponent(container);
    },
};
