import SergactDOMComponent from "./SergactDOMComponent.js";

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
    
    render(element, container) {
        // инициализируем элемент
        const componentInstance = new SergactDOMComponent(element);
        // получаем дом элемент 
        return componentInstance.mountComponent(container);
    },
};
