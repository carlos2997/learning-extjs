Ext.define('QApp.model.AllQuestion', {
    extend: 'Ext.data.Model',

    fields: ['content', 'pageable', 'totalElements', 'totalPages',
        'last', 'size', 'number',
        'sort', 'first', 'numberOfElements']
});