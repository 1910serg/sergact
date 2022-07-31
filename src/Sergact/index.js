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

        console.log('Sergact.createElement записал объект:');
        console.log('Sergact.createElement результат записи:', element);
        // возвращаем объект
        return element; 
    },

    createClass(spec) {
        function Constructor(props) {
            this.props = props;
        };

        // тут мы создаём в прототипе конструктора метод рендер нашего передаваемого (spec) объекта
        Constructor.prototype.render = spec.render;

        console.log('Sergact.createClass вернулся конструктор');
        return Constructor;
    },

    render(element, container) {
        console.log(`Sergact.render( element:`, element, 'container:', container);
        const componentInstance = new SergactCompositeComponentWrapper(element);

        return componentInstance.mountComponent(container);
    },
};
