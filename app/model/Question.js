Ext.define('QApp.model.Question', {
    extend: 'Ext.data.Model',

    fields: ['id', 'title', 'text', 'contributorName',
        'contributorId', 'totalAnswers', 'isAnswered',
        'topics']
});
