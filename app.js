
Ext.application({
    requires: [
        'Ext.container.Viewport',
    ],
    name: 'ContactsApp',
    appFolder: 'app',
    controllers: ['Contact'],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'contactgrid'
            }
        });
    }
});


