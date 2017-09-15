Ext.define('ContactsApp.model.Contact', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        type: 'string'
    }, {
        name: 'surname',
        type: 'string'
    }, {
        name: 'patronymic',
        type: 'string'
    }],
    hasMany:[
        {
            foreignKey: 'contact_id',
            associationKey: 'id',
            name: 'phones',
            model: 'ContactsApp.model.Phone',
            autoLoad: true,
        },
        {
            foreignKey: 'contact_id',
            associationKey: 'id',
            name: 'email',
            model: 'ContactsApp.model.Email',
            autoLoad: true,
        }
    ],
    proxy: {
        type: 'localstorage',
        id  : 'contact'
    }
});




