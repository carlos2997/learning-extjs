var win;
Ext.define('QApp.view.question.QuestionController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.question',

    requires: [
        'QApp.view.question.QuestionModel',
        'QApp.store.Questions',
        'QApp.model.Question'
    ],

    routes : {
        'ask' : 'onAsk',
        'quest' : 'onQuest'
    },

    seeQuestion: function(){
        this.redirectTo('quest');
    },

    onQuest: function(){

    },

    onAsk : function() {

    },

    onCloseWindow: function(){
        var desc =( Ext.ComponentQuery.query(" #formWin > #descripcion")[0]).getValue();  //Ext.getCmp("descripcion").getValue();
        var question = Ext.create('QApp.model.Question', {id: 4 , question: 'Ed Spencer', description: 'ed@sencha.com'});
        question.save({
            success: function() {
                //    console.log('The Question was created'+ question);
            }
        });
        this.redirectTo('ask');
        win.destroy();
    }

});
