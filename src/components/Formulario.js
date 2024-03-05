        import React from 'react';
        import { useState } from 'react';
        import Ticket from './Ticket';


        export default function Formulario() {
            const [formulario, setFormulario] = useState({
                Titulo: '',
                Prioridad: 2,
                Descripcion: '',
                Terminos: false
            });


            const [tickets, setTickets] = useState([]);
            const handleInputChange = (event) => {
                const {name, value, type, checked} = event.target;
                const newValue = type === 'checkbox' ? checked : value;
                setFormulario({
                    ...formulario,
                    [name]: newValue,
                });
            };

            const enviarFormulario = (event) => {
                event.preventDefault();

                if (formulario.Titulo === '' || formulario.Descripcion === ''){
                    alert('Ingresa todos los campos');
                    return;
                }

                fetch('http://localhost:4000/tickets', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formulario),
})
.then(response => {
    if (!response.ok) {
        throw new Error('Error al enviar formulario');
    }
    return response.json();
})
.then(data => {
    console.log('Ticket creado:', data);
    // Actualizar la lista de tickets con el nuevo ticket creado
    setTickets([...tickets, data]);
    // Reiniciar el formulario
    setFormulario({
        Titulo: '',
        Prioridad: 2,
        Descripcion: '',
        Terminos: false
    });
})
.catch(error => {
    console.error('Error al enviar formulario:', error);
    alert('Error al enviar formulario');
});


                setTickets([...tickets, formulario]);
                setFormulario({
                    Titulo: '',
                    Prioridad: 2,
                    Descripcion: '',
                    Terminos: false
                });
            }

        const handleDelete = (ticketToDelete) => {
            setTickets(tickets.filter(ticket => ticket !== ticketToDelete));
        };


            return ( 
                <div className='formularioc'>
                    <h1>Agregar Ticket</h1>
                    <form onSubmit={enviarFormulario}>
                        <div>
                            <div className='titulo5'>
                                <h5>Titulo</h5>
                            </div>
                            <label >
                            <input type="text"  name='Titulo' className='Titulo' placeholder='Titulo' title='Ingresa Titulo' onChange={handleInputChange} value={formulario.Titulo}/>
                            </label>
                        </div>

                        <div>
                            <div className='prioridad5'>
                                <h5>Prioridad</h5>
                            </div>
                            <label>
                            <select id='prioridad' name='Prioridad' className='prioridad' value={formulario.Prioridad} title='Ingresa Prioridad'  onChange={handleInputChange}>
                            <option value={3}>Low</option>
                            <option value={2}>Medium</option>
                            <option value={1}>High</option>
                            </select>
                            </label>
                        </div>

                        <div>
                            <div className='descripcion5'>
                                <h5>Descripcion</h5>
                            </div>
                            <label>
                            <textarea id="Descripcion" name="Descripcion" className='descripcion' placeholder="Descripcion" rows="2" cols="3"  title='Ingresa Descripcion'onChange={handleInputChange} value={formulario.Descripcion}/>
                            </label>
                        </div>

                        <div>
                            <div className='terminos5'>
                                <h5>Terminos y Condiciones</h5>
                            </div>
                            <label>
                                <input type="checkbox" name="Terminos" className='terminos' id="Terminos" title='Terminos y Condiciones' onChange={handleInputChange} checked={formulario.Terminos}/>
                            </label>
                        </div>
                        
                        <div>
                            <button type="submit" className='enviar'>Enviar</button>
                        </div>
                    </form>

                    <div className="ticket-container">
                {tickets.map((ticket, index) => (
                    
                <Ticket key={index} ticket={ticket} onDelete={handleDelete}/>
                ))}

            </div>
                </div>

            
            );
        }
            



