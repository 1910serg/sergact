import SergactDOMComponent from "./SergactDOMComponent.js";

export default class SergactCompositeComponentWrapper {
    constructor(element) {
        this._currentElement = element;
    }

    mountComponent(container) {
        const Component = this._currentElement.type;
        console.log(`mountComponent const Component = this._currentElement.type:`, Component);

        const componentInstance = new Component(this._currentElement.props);
        console.log(`mountComponent const componentInstance = new Component(this._currentElement.props):`, componentInstance);

        const element = componentInstance.render();
        console.log(`mountComponent const element = componentInstance.render():`, element);

        const domComponentInstance = new SergactDOMComponent(element);
        
        return domComponentInstance.mountComponent(container);
    }
}