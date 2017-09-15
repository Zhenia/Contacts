Ext.define('ContactsApp.view.EmailGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.emailgrid',
    requires: [
        'Ext.grid.plugin.CellEditing',
        'Ext.form.field.Text',
        'Ext.toolbar.TextItem'
    ],
    shrinkWrapDock: true,
    xtype: 'emailgrid',
    flex: 1,
    store:'EmailStore',
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
                header: 'Email',
                flex: 1,
                width:300,
                sortable: true,
                dataIndex: 'email',
                field: {
                    type: 'textfield',
                    listeners: {
                        blur: this.onSync
                    }
                },

            }]
        });
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },

    onSelectChange: function(selModel, selections){
        this.down('#delete').setDisabled(selections.length === 0);
        Ext.widget('emailgrid').getStore().sync();
    },

    onSync: function(){
        Ext.widget('emailgrid').getStore().sync();
    },

    onDeleteClick: function(){
        var selection = this.getView().getSelectionModel().getSelection()[0];
        if (selection) {
            this.store.remove(selection);
        }
    },
    onAddClick: function(){
        var rec = new ContactsApp.model.Email({
            email: '',
            contact_id: this.up('form').getRecord().get('id')
        });
        edit = this.editing;
        Ext.widget('emailgrid').getStore().sync();
        edit.cancelEdit();
        this.store.insert(0, rec);
    }
});