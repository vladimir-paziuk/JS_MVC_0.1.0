import $              from 'jquery';

import ListModel      from './partials/Model';
import ListView       from './partials/View';
import ListController from './partials/Controller';


$(function () {

    const model = new ListModel(['PHP', 'JavaScript']);

    const view = new ListView(model, {
            'list': $('#list'),
            'addButton': $('#plusBtn'),
            'delButton': $('#minusBtn')
        });

    new ListController(model, view);

    view.show();

});