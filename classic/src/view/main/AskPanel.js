Ext.define('QApp.view.main.AskPanel',  {

    extend: 'Ext.panel.Panel',
    layout : 'column',

    xtype: 'main-ask',

    items: [{
        xtype: 'textfield',
        name: 'question',
        emptyText: 'Search...',
        allowBlank: true
    }, {
        xtype: 'button',
        text: 'Ask',
        iconAlign: 'right',
        iconCls: 'x-fa fa-search'
    }],

    renderTo: Ext.getBody()
});




