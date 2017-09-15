Ext.define('ContactsApp.model.Email', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    fields: [
        {
            name: 'contact_id',
            type: 'integer'
        },
        {
            name: 'email',
            type: 'string'
        }
    ],
    belongsTo: 'ContactsApp.model.Contact',
    proxy: {
        type: 'localstorage',
        id: 'email'
    }
});


