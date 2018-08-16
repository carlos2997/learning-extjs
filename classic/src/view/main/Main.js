/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('QApp.view.main.Main', {
    extend: 'Ext.container.Viewport',

    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'QApp.view.main.MainController',
        'QApp.view.main.MainModel',
        'QApp.view.main.List',
        'QApp.view.main.AskPanel',

        'QApp.view.question.QuestionPanel',
        'QApp.view.question.QuestionController',
        'QApp.view.question.QuestionModel'

    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    layout: 'anchor',

    items: [{
        id : 'ask',
        itemId: 'AskingPanel',
        xtype: 'main-ask',
        anchor: '100% 10%'
    }, {
        xtype: 'questions',
        itemId: 'contentPanel'
    }, {
        id: 'Home',
        xtype: 'mainlist',
    }]
});
