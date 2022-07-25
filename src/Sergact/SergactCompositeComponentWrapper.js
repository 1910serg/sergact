import SergactDOMComponent from "./SergactDOMComponent.js";

export default class SergactCompositeComponentWrapper {
    constructor(element) {
        this._currentElement = element;
    }

    mountComponent(container) {
        const Component = this._currentElement.type;
        const componentInstance = new Component(this._currentElement.props);
        const element = componentInstance.render();

        const domComponentInstance = new SergactDOMComponent(element);
        return domComponentInstance.mountComponent(container);
    }
}