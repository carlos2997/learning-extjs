/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'QApp.Application',

    name: 'QApp',

    requires: [
        // This will automatically load all classes in the QApp namespace
        // so that application classes do not need to require each other.
        'QApp.*'
    ]
});
