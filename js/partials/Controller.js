/**
 * The Controller. Controller responds to user actions and
 * invokes changes on the model.
 */

class ListController {

    constructor(model, view) {
        this._model = model;
        this._view = view;

        this._view.listModified.attach((sender, args) => {
            this.updateSelected(args.index);
        });

        this._view.addButtonClicked.attach(() => {
            this.addItem();
        });

        this._view.delButtonClicked.attach(() => {
            this.delItem();
        });
    }

    addItem() {
        const item = window.prompt('Add item:');
        if (item) {
            this._model.addItem(item);
        }
    }

    delItem() {
        const index = this._model.getSelectedIndex();
        if (index !== -1) {
            this._model.removeItemAt(this._model.getSelectedIndex());
        }
    }

    updateSelected(index) {
        this._model.setSelectedIndex(index);
    }

}

export default ListController;