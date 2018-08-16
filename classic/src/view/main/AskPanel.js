Ext.define('QApp.view.main.AskPanel',  {

    extend: 'Ext.panel.Panel',
    layout : 'column',

    controller: 'AskPanel',

    xtype: 'main-ask',

    requires: [
        'QApp.view.main.AskPanelController'
    ],

    items: [{
        xtype: 'combobox',
        itemId : 'question',
        queryMode: 'local',
        displayField: 'question',
        valueField: 'question',
        store: Ext.create('QApp.store.Questions')
    },{
        xtype: 'button',
        iconAlign: 'right',
        iconCls: 'x-fa fa-search',
        text: 'Ask',
        handler: 'onOpenWindow'
    }],

    renderTo: Ext.getBody()
});




