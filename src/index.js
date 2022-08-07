import { Sergact } from "./Sergact/index.js";

// TEST
// тут у нас в этой переменной хранится конструктор, способный отрендерить дом элемент
const MyTitle = Sergact.createClass({
// когда мы вызовем рендер, то вернётся объект, который записал в себя свойства
    render() {
        return Sergact.createElement('h1', null, this.props.message);
    }
});

Sergact.render(
    Sergact.createElement(MyTitle, { message: 'hey there Sergact' }),
    document.getElementById('root')
);
