Ext.define('ContactsApp.controller.Contact', {
    extend: 'Ext.app.Controller',
    stores: ['ContactStore','PhoneStore','EmailStore'],
    models: ['Contact','Phone','Email'],
    views: ['ContactsGrid','ContactWindow','PhonesGrid'],
    lastTriggerSearch: '',
    init: function() {
        this.control({
            'viewport > contactgrid': {
                itemdblclick: this.editContact
            },
            'contactwindow button[action=save]': {
                click: this.updateContact
            },
            'contactwindow button[action=cancel]':{
                click: this.cancel
            },
            'contactgrid button[action=new]': {
                click: this.newContact
            },
            'contactgrid [action=search]': {
                keyup : this.search
            },
        });
    },
    // open window with contact
    editContact: function(grid, record){
        var view = Ext.widget('contactwindow');
        view.setTitle('Редактирование контакта');
        this.filterPhoneGrid(record);
        this.filterEmailGrid(record);
        view.show();
        view.down('form').loadRecord(record);
    },
    // open window with new contact
    newContact: function(grid){
        var view = Ext.widget('contactwindow');
        record = new ContactsApp.model.Contact({
            name: '',
        });
        record.save();
        view.down('form').loadRecord(record);
        this.filterPhoneGrid(record);
        this.filterEmailGrid(record);
        view.show();
    },
    cancel: function(button) {
        var win = button.up('window');
        win.close();
    },
    // save contact
    updateContact: function(button) {
        var win = button.up('window');
        form   = win.down('form');
        record = form.getRecord();
        values = form.getValues();
        record.set(values);
        Ext.widget('emailgrid').getStore().sync();
        Ext.widget('phonegrid').getStore().sync();
        Ext.widget('contactgrid').getStore().sync();
        Ext.widget('contactgrid').getStore().load();
        win.close();
    },
    // search by grid with contact
    search: function(field) {
        var value = field.getValue().toString();
        var length = field.getValue().toString().length;
        //if enter more then 2 symbols
        if (0 === length || 2 <= length) {
            if (!this.lastTriggerSearch || this.lastTriggerSearch != value)
                this.filterContactGrid(field,value);
        }
    },
    // filter by storeContact for search
    filterContactGrid: function(field,val){
        var store = Ext.widget('contactgrid').getStore();
        store.clearFilter(true);
        var filters = [
            new Ext.util.Filter({
                filterFn: function (item) {
                    return item.get('name').toLowerCase().indexOf(val) > -1
                        || item.get('patronymic').toLowerCase().indexOf(val) > -1
                        || item.get('surname').toLowerCase().indexOf(val) > -1;
                }
            })

        ];
        store.filter(filters);
        this.lastTriggerSearch = val
    },
     // filter by storePhone for window with contact
    filterPhoneGrid: function(record){
            var store = Ext.widget('phonegrid').getStore();
                    store.clearFilter(true);
                    var filters = [
                        new Ext.util.Filter({
                            filterFn: function (item) {
                               flag =false;
                               if (record.get('id') == item.get('contact_id')){
                                   flag =true;
                               }

                               return flag;
                            }
                        })

                    ];
            store.filter(filters);
    },
     // filter by storeEmail for window with contact
    filterEmailGrid: function(record){
               var store = Ext.widget('emailgrid').getStore();
                        store.clearFilter(true);
                        var filters = [
                            new Ext.util.Filter({
                                filterFn: function (item) {
                                    flag =false;
                                    if (record.get('id') == item.get('contact_id')){
                                        flag =true;
                                    }
                                    return flag;
                                }
                            })

                        ];
                store.filter(filters);
    }




});