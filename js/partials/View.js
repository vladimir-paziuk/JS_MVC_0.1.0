import $ from 'jquery';
import Event from './Event';

/**
 * The View. View presents the model and provides
 * the UI events. The controller is attached to these
 * events to handle the user interraction.
 */

class ListView {

    constructor(model, elements){
        this._model = model;
        this._elements = elements;

        this.listModified = new Event(this);
        this.addButtonClicked = new Event(this);
        this.delButtonClicked = new Event(this);


        // attach model listeners
        this._model.itemAdded.attach(() => {
            this.rebuildList();
        });
        this._model.itemRemoved.attach(() => {
            this.rebuildList();
        });

        // attach listeners to HTML controls
        this._elements.list.on('change', event => {
            this.listModified.notify({
                index: event.target.selectedIndex
            });
        });
        this._elements.addButton.on('click', () => {
            this.addButtonClicked.notify();
        });
        this._elements.delButton.on('click', () => {
            this.delButtonClicked.notify();
        });
    }

    show() {
        this.rebuildList();
    }

    rebuildList() {
        const list = this._elements.list;
        list.html('');

        const items = this._model.getItems();
        for (let key in items) {
            if (items.hasOwnProperty(key)) {
                list.append($('<option>' + items[key] + '</option>'));
            }
        }
        this._model.setSelectedIndex(-1);
    }

}

export default ListView;