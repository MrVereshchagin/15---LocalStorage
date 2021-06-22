const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

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
    //применяем функцию populateList в контексте данной функции
    populateList(items, itemsList);
    /*создаем локальное хранилище с ключем и значением преобразованным
    в строку JSON, для дальнейшего преобразования в JS*/
    localStorage.setItem('items', JSON.stringify(items));
    // очищаем поле input
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

function toggleDone(e) {
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);