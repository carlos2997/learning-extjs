var questionTpl = new Ext.XTemplate(
    '<tpl for=".">',
    '<div style="margin-bottom: 30px;" id = 3 class="thumb-wrap" border:"solid">',
    '<h2 id="title" > {title} </h2>',
    '<br/><span>{text}</span>',
    '</div>',
    '</tpl>'
);


Ext.define('QApp.view.question.QuestionPanel',{
    extend: 'Ext.panel.Panel',
    alias: 'app.container',
    xtype: 'questions',

    requires: [
        'QApp.view.question.QuestionController',
        'QApp.view.question.QuestionModel',
        'QApp.store.Questions'
    ],

    controller: 'question',

    viewModel: {
        type: 'question'
    },

    reference: 'form',

    items: [{
            fullscreen: true,
            xtype: 'container',
            layout: 'vbox',
            itemId:'formQ',
            padding: '50 px',
            items: [
                {
                    xtype:'container',
                    items: [{
                        xtype: 'dataview',
                        tpl: questionTpl,
                        itemSelector: 'div.thumb-wrap',
                        emptyText: 'No images available',
                        store: Ext.create('QApp.store.Questions'),
                        listeners: {
                            "itemclick": 'seeQuestion'
                        }
                    }]
                }
            ]
        }]
});
