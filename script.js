const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
    // отменяем действие браузера по умолчанию, т.е. отправку формы
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };

    items.push(item);
    this.reset();
    console.log(item);
}

addItems.addEventListener('submit', addItem);