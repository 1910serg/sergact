import { Sergact } from "./Sergact/index.js";

// тут у нас в этой переменной хранится конструктор, который содержит метод рендер, находящийся на 6й строке, который возвращает объект
const MyTitle = Sergact.createClass({
    render() {
        return Sergact.createElement('h1', null, this.props.message);
    }
});

Sergact.render(
    Sergact.createElement(MyTitle, { message: 'hey there Sergact' }),
    document.getElementById('root')
);
