    import React from 'react';

    const Ticket = ({ ticket, onDelete }) => {
      return (
        <div>
          <h1 className='ticketh1'>Actual Ticket</h1>
        <div className="ticket">
          <h3 className='tickettitulo'>{ticket.Titulo}</h3>
          <p className='ticketdescripcion'> {ticket.Descripcion}</p>
          <p className='ticketprioridad'>{ticket.Prioridad}</p>
          <p className='ticketterminos'>Aceptó términos y condiciones: {ticket.Terminos ? 'Sí' : 'No'}</p>
          <button className='ticketboton' onClick={() => onDelete(ticket)}>Eliminar</button>
        </div>
        </div>
      );
    };

    export default Ticket;

/* function checkIsFormValid(){
    let isValid = true;
    const newErrors = {
        Titulo: "",
        Prioridad: "",
        Descripcion: "",
        Terminos: ""
    }
}

if (!formState.title){

    isValid = false;
    newErrors.Titulo = "Titulo es requerido";
}

if (!formState.priority){
    isValid = false;
    newErrors.Prioridad = "Prioridad es requerido";
}

if (!formState.description){
    isValid = false;
    newErrors.Descripcion = "Descripcion es requerido";
}

if (!formState.terms){
    isValid = false;
    newErrors.Terminos = "Terminos es requerido";

    if (!isValid) setErrors (newErrors);
    return isValid;
}  */