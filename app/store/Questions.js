Ext.define('QApp.store.Questions', {
    extend: 'Ext.data.Store',

    model: 'QApp.model.Question',

    alias: 'store.questions',

    proxy: {
        type: 'ajax',
        url: 'app/files/Questionfile',
        reader: {
            type: 'json',
            rootProperty: 'questions'
        },
        writer: {
            type: 'json',
            rootProperty: 'questions'
        },
        success: function(){
            console.log("entro correcto");
        },
        failure: function(){
            console.log("entro fallando");
        },
    },
    autoLoad: true,
    autoSync: true
});
