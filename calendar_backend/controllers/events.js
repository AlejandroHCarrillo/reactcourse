const { response } = require('express');
const Evento = require('../models/EventoModel');

const getEvents = async(req, res = response ) => {

    try{
        const eventos = await Evento.find()
                                    .populate('user', 'name');

        // console.log("Eventos: ", eventos);

        res.status(200).json({ 
            ok: true,
            eventos
        });
        
    } catch ( error ){
        console.log(error);
        return res.status(500).json({ 
            ok: false,
            msg: `[Evento get] Hubo un error, contacte al administrador`,
        });
    }
}

const createEvent = async(req, res = response ) => {
    // Varificar que el evento exista
    // console.log( req.body );
    try{

        evento = new Evento(req.body);

        evento.user = req.uid;

        await evento.save();
        
        return res.status(200).json({ 
            ok: true,
            evento
        });
    } catch ( error ){
        console.log(error);
        return res.status(500).json({ 
            ok: false,
            msg: `[Evento Create] Hubo un error, contacte al administrador`,
        });

    }
}

const updateEvent = async(req, res = response ) => {
    const eventoId = req.params.id;
    const uid = req.uid;

    try{
        const evento = await Evento.findById( eventoId );

        if (!evento){
            return res.status(404).json({
                ok:false,
                msg: '[Evento Update] El evento no se pudo actualizar, por que no existe'
            })            
        }

        const eventoUserId = evento.user._id.toString();

        // TODO: habilitar rol de administrador para que pueda borrar eventos 
        // if ( eventoUserId.toString() !== uid.toString() ){
        if ( eventoUserId !== uid ){
            return res.status(401).json({
                ok:false,
                msg: '[Evento Update] El evento solo puede ser actualizado por el propietario o el administrador'                
            })            
        }

        // Agregamos el usuario firmado al evento 
        const nuevoEvento = {
            ...req.body,
            user: uid
        }
        
        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId, nuevoEvento, { new: true } );
        
        console.log( eventoActualizado );
        return res.status(200).json({ 
            ok: true,
            evento: eventoActualizado
        });

    } catch ( error ){
        console.log(error);
        return res.status(500).json({ 
            ok: false,
            msg: `[Evento Update] Hubo un error, contacte al administrador`,
        });

    }

}

const deleteEvent = async(req, res = response ) => {
    const eventoId = req.params.id;
    const uid = req.uid;

    try{
        const evento = await Evento.findById( eventoId );

        if (!evento){
            return res.status(404).json({
                ok:false,
                msg: '[Evento Delete] El evento no se pudo eliminar, por que no existe'
            })            
        }

        // TODO: habilitar rol de administrador para que pueda borrar eventos 
        // if ( eventoUserId.toString() !== uid.toString() ){
        if ( evento.user.toString() !== uid ){
            return res.status(401).json({
                ok:false,
                msg: '[Evento Delete] El evento solo puede ser eliminado por el propietario o el administrador'                
            })            
        }
        
        const eventoEliminado = await Evento.findByIdAndDelete( eventoId  );
        
        console.log( eventoEliminado );
        return res.status(200).json({ 
            ok: true,
            evento: eventoEliminado
        });

    } catch ( error ){
        console.log(error);
        return res.status(500).json({ 
            ok: false,
            msg: `[Evento Delete] Hubo un error, contacte al administrador`,
        });

    }
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
};