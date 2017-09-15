Ext.define('ContactsApp.view.PhonesGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.phonegrid',
    requires: [
        'Ext.grid.plugin.CellEditing',
        'Ext.form.field.Text',
        'Ext.toolbar.TextItem'
    ],
    shrinkWrapDock: true,
    xtype: 'phonegrid',
    flex: 1,
    store:'PhoneStore',
    initComponent: function(){
        this.editing = Ext.create('Ext.grid.plugin.CellEditing');
        Ext.apply(this, {
            iconCls: 'icon-grid',
            frame: true,
            plugins: [this.editing],
            layout: 'fit',
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    iconCls: 'icon-add',
                    text: 'Добавить',
                    scope: this,
                    handler: this.onAddClick
                }, {
                    iconCls: 'icon-delete',
                    text: 'Удалить',
                    disabled: true,
                    itemId: 'delete',
                    scope: this,
                    handler: this.onDeleteClick
                }]
            }],
            columns: [{
                header: 'Number',
                flex: 1,
                width:300,
                sortable: true,
                dataIndex: 'number',
                field: {
                    type: 'textfield',
                    listeners: {
                        change: this.onSync
                    }
                }
            }]

        });
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },

    onSelectChange: function(selModel, selections){
        Ext.widget('phonegrid').getStore().sync();
    },

    onSync: function(){
        Ext.widget('phonegrid').getStore().sync();
    },

    onDeleteClick: function(){
        var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
            this.store.remove(selection);
        }
    },

    onAddClick: function(){
        var rec = new ContactsApp.model.Phone({
            number: '',
            contact_id: this.up('form').getRecord().get('id')
        });
        edit = this.editing;
        Ext.widget('phonegrid').getStore().sync();
        edit.cancelEdit();
        this.store.insert(0, rec);
    },
});