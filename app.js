const form = document.getElementById('formTicket');
const lista = document.getElementById('listaTickets');

cargarTickets();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const datos = {
        titulo: document.getElementById('titulo').value,
        solicitante: document.getElementById('solicitante').value,
        prioridad: document.getElementById('prioridad').value,
        descripcion: document.getElementById('descripcion').value
    };
    
    try {
        const res = await fetch(`${API_URL}/tickets`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });
        
        if (res.ok) {
            alert('Ticket creado correctamente');
            form.reset();
            cargarTickets();
        } else {
            alert('Error al crear ticket');
        }
    } catch (err) {
        alert('No se pudo conectar al servidor');
    }
});

async function cargarTickets() {
    try {
        const res = await fetch(`${API_URL}/tickets`);
        const tickets = await res.json();
        
        if (tickets.length === 0) {
            lista.innerHTML = '<div class="vacio">No hay tickets aún</div>';
            return;
        }
        
        lista.innerHTML = tickets.map(t => `
            <div class="ticket ${t.prioridad.toLowerCase()} ${t.estado === 'Cerrado' ? 'cerrado' : ''}">
                <div class="ticket-header">
                    <span class="ticket-titulo">#${t.id}: ${escapar(t.titulo)}</span>
                    <span class="prioridad-badge ${t.prioridad.toLowerCase()}">${t.prioridad}</span>
                </div>
                <div class="ticket-meta">
                    Por: ${escapar(t.solicitante)} | 
                    Fecha: ${new Date(t.fecha_creacion).toLocaleString()} |
                    Estado: ${t.estado}
                </div>
                <div class="ticket-desc">${escapar(t.descripcion)}</div>
                <div class="ticket-actions">
                    ${t.estado === 'Abierto' 
                        ? `<button class="btn-cerrar" onclick="cambiarEstado(${t.id}, 'Cerrado')">Cerrar</button>`
                        : `<button class="btn-cerrar" onclick="cambiarEstado(${t.id}, 'Abierto')">Reabrir</button>`
                    }
                    <button class="btn-borrar" onclick="borrar(${t.id})">Eliminar</button>
                </div>
            </div>
        `).join('');
        
    } catch (err) {
        lista.innerHTML = '<div class="vacio">Error al cargar tickets. Verifica la conexión.</div>';
    }
}

async function cambiarEstado(id, estado) {
    try {
        await fetch(`${API_URL}/tickets/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ estado })
        });
        cargarTickets();
    } catch (err) {
        alert('Error al actualizar');
    }
}

async function borrar(id) {
    if (!confirm('¿Seguro que quieres eliminar este ticket?')) return;
    
    try {
        await fetch(`${API_URL}/tickets/${id}`, { method: 'DELETE' });
        cargarTickets();
    } catch (err) {
        alert('Error al borrar');
    }
}

function escapar(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

setInterval(cargarTickets, 30000);