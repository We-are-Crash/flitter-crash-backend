//!modelo
'use strict';

const mongoose = require ('mongoose');

const anuncioSchema = mongoose.Schema({
    name: { type: String, index: true, required: true, unique: true},
    onSell: { type: Boolean, index: true, required: true},
    price:{ type: Number, index: true, required: true},
    photo:{ type: String, index: true, required: true},
    tags: { type: [String], required: true}
});

anuncioSchema.statics.array = function (filter, skip, limit) {
    const query = Anuncio.find (filter);
    query.skip(skip);
    query.limit(limit);
    return query.exec();
}


anuncioSchema.statics.tagsArray = function(cb) {
    return new Promise(function (resolve, reject){
    const query = Anuncio.find().distinct('tags',function(err, results){
        if(err){
            if(cb){
                cb(err);
                return;
            }
            reject(err);
        }
        if(cb){
            cb(null, results);
            return;
        }
        resolve(results);

    });
});

};


const Anuncio = mongoose.model ('Anuncio', anuncioSchema)

module.exports = Anuncio;
