import Event from './Event';

/**
 * The Model. Model stores items and notifies
 * observers about changes.
 */

class ListModel {

    constructor(items) {
        this._items = items;
        this._selectedIndex = -1;

        this.itemAdded = new Event(this);
        this.itemRemoved = new Event(this);
        this.selectedIndexChanged = new Event(this);
    }

    getItems() {
        return [].concat(this._items);
    }

    addItem(item) {
        this._items.push(item);
        this.itemAdded.notify({ item });
    }

    removeItemAt(index) {
        const item = this._items[index];
        this._items.splice(index, 1);
        this.itemRemoved.notify({ item });
        if (index === this._selectedIndex) {
            this.setSelectedIndex(-1);
        }
    }

    getSelectedIndex() {
        return this._selectedIndex;
    }

    setSelectedIndex(index) {
        const previous = this._selectedIndex;
        this._selectedIndex = index;
        this.selectedIndexChanged.notify({ previous });
    }

}

export default ListModel;