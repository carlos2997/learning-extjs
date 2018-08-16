Ext.define('QApp.store.Topics', {
    extend: 'Ext.data.Store',

    model: 'QApp.model.Topic',

    alias: 'store.topics',

    proxy: {
        type: 'ajax',
        url: 'app/files/Topicsfile',
        reader: {
            type: 'json',
            rootProperty: 'topics'
        }
    },
    autoLoad: true,
    autoSync: true
});
