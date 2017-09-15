Ext.define('ContactsApp.view.ContactsGrid' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.contactgrid',
    title: 'Контакты',
    store:'ContactStore',
    margin:'30 650',
    initComponent: function() {
        this.columns=[
            {
                text     : 'Имя',
                dataIndex: 'name',
                width: 200
            },
            {
                text     : 'Фамилия',
                dataIndex: 'surname',
                width: 200
            },
            {
                text     : 'Отчество',
                dataIndex: 'patronymic',
                width: 200
            },
            {
                xtype: 'actioncolumn',
                width: 100,
                sortable: false,
                menuDisabled: true,
                items: [{
                    icon: '/resources/delete.gif',
                    tooltip: 'Delete',
                    scope: this,
                    handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().removeAt(rowIndex);
                        grid.getStore().save();
                    }
                }
                ]
            }
        ];
        this.dockedItems=[
        {
            xtype:'toolbar',
            docked: 'top',
            items: [{
                xtype: 'textfield',
                emptyText:'Поиск',
                action: 'search',
                cls: 'search',
                enableKeyEvents:true,
            },
            {
                text:'Добавить',
                iconCls:'new-icon',
                action: 'new'
            }]
        }];
        this.callParent(arguments);
    }
});