// Base de conocimiento de problemas y sus prioridades
const baseConocimiento = {
    hardware: {
        label: 'Hardware / Equipos',
        problemas: {
            'pc-no-enciende': {
                titulo: 'Equipo no enciende',
                descripcion: 'El computador no muestra señal de vida al presionar el botón de encendido. Posible falla en fuente de poder, placa madre o conexiones eléctricas.',
                prioridad: 'Alta'
            },
            'pantalla-azul': {
                titulo: 'Pantalla azul (BSOD)',
                descripcion: 'El sistema presenta pantallazos azules aleatorios durante el uso. Posible conflicto de drivers, memoria RAM defectuosa o problema de disco duro.',
                prioridad: 'Alta'
            },
            'sobrecalentamiento': {
                titulo: 'Equipo se sobrecalienta',
                descripcion: 'El dispositivo alcanza temperaturas elevadas durante operación normal. Riesgo de daño permanente en componentes. Requiere limpieza o revisión de ventiladores.',
                prioridad: 'Media'
            },
            'teclado-danado': {
                titulo: 'Teclado dañado o sucio',
                descripcion: 'Teclas no responden, se traban o presentan suciedad acumulada. Afecta la productividad del usuario.',
                prioridad: 'Baja'
            },
            'mouse-falla': {
                titulo: 'Mouse no funciona correctamente',
                descripcion: 'El puntero no responde, se mueve erráticamente o los clicks no registran. Puede ser cable, sensor o batería.',
                prioridad: 'Baja'
            },
            'monitor-negro': {
                titulo: 'Monitor no muestra imagen',
                descripcion: 'La pantalla permanece negra aunque el equipo esté encendido. Posible problema de cable, conexión o panel.',
                prioridad: 'Alta'
            }
        }
    },
    software: {
        label: 'Software / Aplicaciones',
        problemas: {
            'office-crash': {
                titulo: 'Microsoft Office no responde',
                descripcion: 'Las aplicaciones de Office (Word, Excel, Outlook) se cierran inesperadamente o no abren. Posible archivo corrupto o conflicto de complementos.',
                prioridad: 'Media'
            },
            'antivirus-vencido': {
                titulo: 'Licencia de antivirus vencida',
                descripcion: 'El software de seguridad muestra alerta de licencia expirada. El equipo está desprotegido contra amenazas.',
                prioridad: 'Alta'
            },
            'actualizacion-pendiente': {
                titulo: 'Actualizaciones del sistema pendientes',
                descripcion: 'El sistema operativo requiere instalación de actualizaciones de seguridad y mejoras de rendimiento.',
                prioridad: 'Baja'
            },
            'app-externa': {
                titulo: 'Aplicación de terceros falla',
                descripcion: 'Software específico del departamento presenta errores o no ejecuta correctamente.',
                prioridad: 'Media'
            },
            'navegador-lento': {
                titulo: 'Navegador web lento',
                descripcion: 'Chrome/Edge/Firefox tarda en cargar páginas o se congela. Posible exceso de extensiones o caché saturado.',
                prioridad: 'Baja'
            }
        }
    },
    red: {
        label: 'Red / Internet',
        problemas: {
            'sin-internet': {
                titulo: 'Sin conexión a Internet',
                descripcion: 'El equipo no puede acceder a recursos web ni servicios en la nube. Afecta todas las operaciones que dependen de conectividad.',
                prioridad: 'Critica'
            },
            'vpn-caida': {
                titulo: 'VPN corporativa desconectada',
                descripcion: 'No se puede establecer conexión segura con la red corporativa. Imposible acceder a servidores internos remotos.',
                prioridad: 'Alta'
            },
            'wifi-lento': {
                titulo: 'WiFi lento o intermitente',
                descripcion: 'La conexión inalámbrica presenta velocidades reducidas o desconexiones frecuentes.',
                prioridad: 'Media'
            },
            'compartir-archivos': {
                titulo: 'No se pueden compartir archivos en red',
                descripcion: 'Imposible acceder a carpetas compartidas del servidor o de otros equipos.',
                prioridad: 'Media'
            }
        }
    },
    email: {
        label: 'Correo / Email',
        problemas: {
            'no-envia': {
                titulo: 'No se pueden enviar correos',
                descripcion: 'Los mensajes quedan atascados en bandeja de salida. Posible problema de configuración SMTP o límite de almacenamiento.',
                prioridad: 'Alta'
            },
            'no-recibe': {
                titulo: 'No llegan correos nuevos',
                descripcion: 'La bandeja de entrada no muestra mensajes recientes aunque se confirmó envío. Posible problema de sincronización.',
                prioridad: 'Alta'
            },
            ' outlook-no-abre': {
                titulo: 'Outlook no abre',
                descripcion: 'La aplicación de correo no inicia o se cierra al momento de abrir. Posible perfil corrupto.',
                prioridad: 'Alta'
            },
            'configurar-firma': {
                titulo: 'Configurar firma de correo',
                descripcion: 'El usuario requiere asistencia para crear o modificar su firma electrónica corporativa.',
                prioridad: 'Baja'
            },
            'recuperar-borrado': {
                titulo: 'Recuperar correo borrado',
                descripcion: 'Se eliminó accidentalmente un mensaje importante y se requiere recuperación desde copia de seguridad.',
                prioridad: 'Media'
            }
        }
    },
    impresion: {
        label: 'Impresión / Escaneo',
        problemas: {
            'impresora-oficina': {
                titulo: 'Impresora de oficina no responde',
                descripcion: 'La impresora compartida no procesa trabajos de impresión. Posible atasco, sin toner o desconexión de red.',
                prioridad: 'Alta'
            },
            'escaner-falla': {
                titulo: 'Escáner no funciona',
                descripcion: 'El equipo no escanea documentos o la calidad es deficiente. Requiere limpieza o recalibración.',
                prioridad: 'Media'
            },
            'instalar-impresora': {
                titulo: 'Instalar nueva impresora',
                descripcion: 'Se requiere configurar impresora de red o USB en el equipo del usuario.',
                prioridad: 'Baja'
            },
            'toner-agotado': {
                titulo: 'Tóner o tinta agotada',
                descripcion: 'La impresora muestra alerta de consumible vacío. Necesita reposición.',
                prioridad: 'Media'
            }
        }
    },
    accesos: {
        label: 'Accesos / Cuentas',
        problemas: {
            'password-bloqueada': {
                titulo: 'Cuenta bloqueada por intentos fallidos',
                descripcion: 'El usuario ingresó mal su contraseña varias veces y la cuenta fue bloqueada por seguridad. Requiere desbloqueo administrativo.',
                prioridad: 'Alta'
            },
            'reset-password': {
                titulo: 'Restablecer contraseña',
                descripcion: 'El usuario olvidó su contraseña y no puede acceder al sistema. Requiere reseteo y comunicación de nueva clave temporal.',
                prioridad: 'Media'
            },
            'acceso-carpeta': {
                titulo: 'Sin acceso a carpeta compartida',
                descripcion: 'El usuario necesita permisos para acceder a directorio específico del servidor.',
                prioridad: 'Media'
            },
            'crear-usuario': {
                titulo: 'Crear nuevo usuario',
                descripcion: 'Ingreso de personal nuevo que requiere cuenta de dominio, correo y accesos básicos.',
                prioridad: 'Media'
            },
            'bloquear-exempleado': {
                titulo: 'Deshabilitar cuenta de exempleado',
                descripcion: 'Baja de personal. Se requiere desactivar accesos y respaldar información.',
                prioridad: 'Alta'
            }
        }
    },
    otros: {
        label: 'Otros',
        problemas: {
            'consulta-general': {
                titulo: 'Consulta general de IT',
                descripcion: 'El usuario tiene dudas sobre algún procedimiento, necesita orientación o capacitación básica.',
                prioridad: 'Baja'
            },
            'compra-equipo': {
                titulo: 'Solicitud de compra de equipo',
                descripcion: 'Requerimiento de nuevo hardware, periféricos o accesorios para el área.',
                prioridad: 'Baja'
            },
            'urgencia-desconocida': {
                titulo: 'Problema no catalogado',
                descripcion: 'Incidencia que no entra en categorías estándar. Requiere evaluación del técnico.',
                prioridad: 'Media'
            }
        }
    }
};

// Elementos del DOM
const selectCategoria = document.getElementById('categoria');
const grupoProblema = document.getElementById('grupo-problema');
const selectProblema = document.getElementById('tipo-problema');
const vistaPrevia = document.getElementById('vista-previa');
const vpTitulo = document.getElementById('vp-titulo');
const vpDesc = document.getElementById('vp-desc');
const badgePrioridad = document.getElementById('badge-prioridad');
const btnCrear = document.getElementById('btn-crear');
const form = document.getElementById('formTicket');

let ticketActual = null;

// Cuando cambia la categoría
selectCategoria.addEventListener('change', function() {
    const categoria = this.value;
    
    if (!categoria) {
        grupoProblema.style.display = 'none';
        vistaPrevia.style.display = 'none';
        btnCrear.disabled = true;
        return;
    }
    
    // Llenar select de problemas
    const problemas = baseConocimiento[categoria].problemas;
    selectProblema.innerHTML = '<option value="">Selecciona el problema específico...</option>';
    
    Object.entries(problemas).forEach(([key, info]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = info.titulo;
        selectProblema.appendChild(option);
    });
    
    grupoProblema.style.display = 'block';
    selectProblema.value = '';
    vistaPrevia.style.display = 'none';
    btnCrear.disabled = true;
});

// Cuando selecciona un problema específico
selectProblema.addEventListener('change', function() {
    const categoria = selectCategoria.value;
    const problemaKey = this.value;
    
    if (!problemaKey) {
        vistaPrevia.style.display = 'none';
        btnCrear.disabled = true;
        return;
    }
    
    const info = baseConocimiento[categoria].problemas[problemaKey];
    
    // Guardar datos del ticket
    ticketActual = {
        titulo: info.titulo,
        descripcion: info.descripcion,
        prioridad: info.prioridad
    };
    
    // Mostrar vista previa
    vpTitulo.textContent = info.titulo;
    vpDesc.textContent = info.descripcion;
    badgePrioridad.textContent = info.prioridad;
    badgePrioridad.className = 'prioridad-badge ' + info.prioridad.toLowerCase();
    
    vistaPrevia.style.display = 'block';
    btnCrear.disabled = false;
});

// Enviar ticket
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!ticketActual) return;
    
    const solicitante = document.getElementById('solicitante').value;
    const detallesExtra = document.getElementById('detalles-extra').value;
    
    if (!solicitante) {
        mostrarToast('Por favor ingresa tu nombre', 'error');
        return;
    }
    
    // Construir descripción final
    let descripcionFinal = ticketActual.descripcion;
    if (detallesExtra) {
        descripcionFinal += '\n\nDetalles adicionales: ' + detallesExtra;
    }
    
    const btnOriginal = btnCrear.innerHTML;
    btnCrear.disabled = true;
    btnCrear.innerHTML = '<span class="btn-icon">⏳</span><span class="btn-texto">Creando...</span>';
    
    try {
        const res = await fetch(`${API_URL}/tickets`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                titulo: ticketActual.titulo,
                descripcion: descripcionFinal,
                solicitante: solicitante,
                prioridad: ticketActual.prioridad
            })
        });
        
        if (res.ok) {
            mostrarToast('✅ Ticket creado correctamente', 'success');
            form.reset();
            grupoProblema.style.display = 'none';
            vistaPrevia.style.display = 'none';
            btnCrear.disabled = true;
            ticketActual = null;
            cargarTickets();
        } else {
            mostrarToast('❌ Error al crear ticket', 'error');
        }
    } catch (err) {
        mostrarToast('❌ No se pudo conectar al servidor', 'error');
    } finally {
        btnCrear.innerHTML = btnOriginal;
    }
});

// Cargar tickets existentes
async function cargarTickets() {
    const container = document.getElementById('lista-tickets');
    
    try {
        const res = await fetch(`${API_URL}/tickets`);
        const tickets = await res.json();
        
        document.getElementById('contador-abiertos').textContent = 
            tickets.filter(t => t.estado === 'Abierto').length;
        
        if (tickets.length === 0) {
            container.innerHTML = `
                <div class="estado-vacio">
                    <div class="ev-icon">📭</div>
                    <p class="ev-texto">No hay incidencias registradas</p>
                    <p class="ev-sub">Selecciona un problema en el panel izquierdo para comenzar</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = tickets.map(t => `
            <div class="ticket ${t.estado === 'Cerrado' ? 'cerrado' : ''}" data-prioridad="${t.prioridad}">
                <div class="ticket-header">
                    <span class="ticket-titulo">#${t.id}: ${escapar(t.titulo)}</span>
                    <span class="prioridad-badge ${t.prioridad.toLowerCase()}">${t.prioridad}</span>
                </div>
                <div class="ticket-meta">
                    <span class="meta-item">👤 ${escapar(t.solicitante)}</span>
                    <span class="meta-item">📅 ${new Date(t.fecha_creacion).toLocaleDateString()}</span>
                    <span class="meta-item">🏷️ ${t.estado}</span>
                </div>
                <div class="ticket-desc">${escapar(t.descripcion).replace(/\n/g, '<br>')}</div>
                <div class="ticket-actions">
                    ${t.estado === 'Abierto' 
                        ? `<button class="btn-accion btn-cerrar" onclick="cambiarEstado(${t.id}, 'Cerrado')">✓ Marcar resuelto</button>`
                        : `<button class="btn-accion btn-reabrir" onclick="cambiarEstado(${t.id}, 'Abierto')">↻ Reabrir</button>`
                    }
                    <button class="btn-accion btn-borrar" onclick="borrarTicket(${t.id})">🗑 Eliminar</button>
                </div>
            </div>
        `).join('');
        
    } catch (err) {
        container.innerHTML = '<div class="estado-vacio"><p>Error al cargar datos</p></div>';
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
        mostrarToast('Error al actualizar', 'error');
    }
}

async function borrarTicket(id) {
    if (!confirm('¿Eliminar permanentemente este ticket?')) return;
    
    try {
        await fetch(`${API_URL}/tickets/${id}`, { method: 'DELETE' });
        cargarTickets();
    } catch (err) {
        mostrarToast('Error al eliminar', 'error');
    }
}

function escapar(texto) {
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

function mostrarToast(mensaje, tipo) {
    const toast = document.getElementById('toast');
    toast.textContent = mensaje;
    toast.className = 'toast ' + tipo;
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Filtros
document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // Aquí iría la lógica de filtrado visual
    });
});

// Iniciar
cargarTickets();
setInterval(cargarTickets, 30000);
