const { Schema, model } = require('mongoose');

const EventoSchema = Schema({
    title: { type:String, required: true },
    notes: { type:String, required: false },

    start: { type:Date, required: true },
    end: { type:Date, required: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario', 
        required: true
    }
});

EventoSchema.method('toJSON', function() {
    var obj = this.toObject();

    //Rename fields
    obj.id = obj._id;
    delete obj._id;
    delete obj.__v;

    return obj;
});

module.exports = model('Evento', EventoSchema, 'eventos');