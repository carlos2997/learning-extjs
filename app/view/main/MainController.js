/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('QApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    requires:[

    ],

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    beforeRender: function(){
        var restq = new RESTQuestion();
        restq.getQuestions().then(function(result,request) {
            console.log(result);
            var object = Ext.decode(result.responseText);
            console.log(object);
        });

    }


});
