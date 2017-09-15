Ext.define('ContactsApp.store.EmailStore', {
    extend: 'Ext.data.Store',
    model: 'ContactsApp.model.Email',
    autoLoad: true,
    storeId: 'EmailStore'
});