Ext.define('ContactsApp.store.PhoneStore', {
    extend: 'Ext.data.Store',
    model: 'ContactsApp.model.Phone',
    autoLoad: true,
    storeId: 'PhoneStore'
});