const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
    // отменяем действие браузера по умолчанию, т.е. отправку формы
    e.preventDefault();
    // создаем объект со значением введенным в поле input
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };

    // пушим такие объекты в новый массив
    items.push(item);
    // очищаем поле input
    populateList(items, itemsList);
    this.reset();
}

// пишем функцию заполненного списка, аргументы - новый пустой массив и ul с названиями 
function populateList(plates = [], plateList) {
    plateList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type='checkbox' data-index=${i} id='item${i}' ${plate.done ? 'checked' : ''} />
                <label for='item${i}'>${plate.text}</label>
            </li>
        `;

    }).join('');
}

addItems.addEventListener('submit', addItem);