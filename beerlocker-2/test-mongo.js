var dbURI = 'mongodb://localhost:27017/beerlocker',
    Beer = require('./models/beer'),
    expect = require('chai').expect,
    mongoose = require('mongoose'),
    clearDB = require('mocha-mongoose')(dbURI, {noClear:true}),
    interval = 20000;
 
 
// https://github.com/elliotf/mocha-mongoose
 
describe('Example spec a for model', function(){ 
    before(function(done){
        if(mongoose.connection.db) return done();
        mongoose.connect(dbURI, done);
    });
 
    before(function(done){
        clearDB(done)
    });
 
    it("can be saved", function(done){
        this.timeout(3000);
        Beer({
            _id : "5421c22feCff600d527c9bd8F",
            name:'amstel',
            type:'holanda',
            quantity:2
        }).save(done);
    });
 
 
    it('can be saved other', function(done){
        this.timeout(3000);
        Beer({
            _id : "5421c92fSeff600d527c9bz82F",
            name:'heineken',
            type:'holanda',
            quantity:5
        }).save(done);
    });
 
    it('probando guardar algo de manera incorrecta', function(done){
        this.timeout(3000);
        Beer({
            _id : "5421c92fSeff600d527c9bf2F",
            name:'imperial',
            type:'otro tipo',
            asd:'none'
        }).save(done);
    });
 
    it("can be listed tres elementos creados", function(done){
        this.timeout(3000);
        Beer.find({}, function(err, models){
            expect(err).to.not.exist;
            expect(models).to.have.length(3);
            console.log(models);
            done();
        })
    }); 
 
    it('voy a borrar todo en la tabla', function(done){
     Beer.count(function(err, count){
         expect(err).to.not.exist;
         expect(count).to.equal(3);
         clearDB(function(err){
             expect(err).to.not.exist;
             Beer.find({}, function(err, docs){
                 expect(err).to.not.exist;
                 expect(docs.length).to.equal(0);
                 console.log(docs);
                 done();
             });
         });
     });
    });

    it("sumamos un elemento de prueba", function(done){
        this.timeout(3000);
        Beer({
            _id : "5421ca2feff600d527c9bd8F",
            name: "amstel",
            type:"holanda",
            quantity: 2
        }).save(done)
    });
 
});