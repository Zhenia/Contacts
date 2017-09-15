Ext.define('ContactsApp.model.Phone', {
    extend: 'Ext.data.Model',
    idProperty: 'id',
    storeId: 'phone',
    fields: [{
            name: 'contact_id',
            type: 'integer'
        },
        {
        name: 'number',
        type: 'string'
        }
    ],
    belongsTo: 'ContactsApp.model.Contact',
    proxy: {
        type: 'localstorage',
        id: 'phones'
    }
});


