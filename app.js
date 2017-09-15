
Ext.application({
    requires: [
        'Ext.container.Viewport',
    ],
    name: 'ContactsApp',
    appFolder: 'app',
    controllers: ['Contact'],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'contactgrid'
            }
        });
    }
});


/*

Ext.onReady(function() {

    var settings = Ext.create('Classes.Contact', {
        id: 3,
        name: 'Eugene2333332',
        surname: 'hhhhh',
        patronymic:'patronymic111'

    });

    var phone = Ext.create('Classes.Phone', {
        id: 3,
        number: '646854848458',
    });
    settings.phones().add(phone);

    var phone = Ext.create('Classes.Phone', {
        id: 37,
        number: '646854848458',
    });
    //phone.setContact(settings);
    settings.phones().add(phone);

    settings.phones().each(function (phone){
       // alert(phone.get('number'));
    });
    settings.save();

    var store = Ext.create('Ext.data.Store', {
        model: 'Classes.Contact'
    });

    store.load(function() {
        store.each(function(record){
            record.phones().each(function (phone){
                alert(phone.get('number'));
            });
        });
    });



});*/


