Ext.define('QApp.view.main.AskPanelController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.AskPanel',

    onOpenWindow: function (){
        titleQ = ( Ext.ComponentQuery.query("#AskingPanel > #question")[0]).getValue();
        win=Ext.create('Ext.window.Window', {
            controller: 'question',
            xtype: 'formpanel',
            reference: 'form',
            name: 'formWin',
            itemId: 'formWin',
            title: 'Tu pregunta',
            cls: 'auth-footer',
            height: 600,
            width: 500,
            padding:'60px',
            closable:'true',
            resizable: 'true',
            defaultType: 'textfield',
            items:[
                {
                    fieldLabel:'Título ',
                    value: titleQ,
                    name: 'titulo',
                    required: true
                },{
                    fieldLabel:'Descripción ',
                    xtype: 'textareafield',
                    itemId: 'descripcion',
                    required: true
                },{
                    fieldLabel:'Topic ',
                    xtype: 'tagfield',
                    queryMode: 'local',
                    displayField: 'topic',
                    defaultType: 'checkboxfield',
                    valueField: 'topic',
                    store: Ext.create('QApp.store.Topics'),
                    width: 200,
                    name: 'descripcion',
                    required: true
                },{
                    xtype:'button',
                    text: 'Ask',
                    aling :'center',
                    iconCls: 'x-fa fa-plus-square',
                    handler: 'onCloseWindow'
                }
            ]
        });
        win.show();
    }

});