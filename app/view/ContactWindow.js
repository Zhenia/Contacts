Ext.define('ContactsApp.view.ContactWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.contactwindow',
    autoShow: true,
    title:'Добавить контакт',
    requires: [
        'ContactsApp.view.PhonesGrid',
        'ContactsApp.view.EmailGrid',
        'ContactsApp.model.Phone',
        'ContactsApp.store.PhoneStore',
        'ContactsApp.model.Email',
        'ContactsApp.store.EmailStore'
    ],
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                defaultType: 'textfield',
                margin: '0 0 5 0',

                items: [
                    {
                        fieldLabel: 'Имя',
                        name: 'name',
                        anchor: '100%',
                        margin: '10',
                    },
                    {
                        fieldLabel: 'Фамилия',
                        name: 'surname',
                        anchor: '100%',
                        margin: '10',
                    },
                    {
                        fieldLabel: 'Отчество',
                        name: 'patronymic',
                        anchor: '100%',
                        margin: '10',
                    },
                    {
                        xtype: 'phonegrid',
                        title: 'Телефоны',
                        shrinkWrapDock: true,
                        flex: 1,
                    },
                    {
                        xtype: 'emailgrid',
                        title: 'Email',
                        shrinkWrapDock: true,
                        flex: 1,
                    },

                ]
            }
        ];
        this.buttons = [{
            text: 'Сохранить',
            action: 'save'
        }, {
            text: 'Отменить',
            action: 'cancel'
        }];

        this.callParent(arguments);
    }
});