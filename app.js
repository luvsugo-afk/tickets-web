const catalogoProblemas = {
    hardware: {
        problemas: {
            'pc-no-enciende': { titulo: 'Equipo no enciende', descripcion: 'Sin respuesta al presionar botón de encendido.', prioridad: 'Alta' },
            'pantalla-azul': { titulo: 'Pantalla azul (BSOD)', descripcion: 'Error crítico del sistema operativo.', prioridad: 'Alta' },
            'monitor-negro': { titulo: 'Sin señal de video', descripcion: 'Monitor no detecta entrada.', prioridad: 'Alta' },
            'sobrecalentamiento': { titulo: 'Temperatura elevada', descripcion: 'Equipo supera 90°C.', prioridad: 'Media' },
            'teclado-danado': { titulo: 'Teclado no responde', descripcion: 'Teclas atascadas o sin función.', prioridad: 'Baja' },
            'mouse-falla': { titulo: 'Mouse errático', descripcion: 'Movimientos imprecisos o saltos.', prioridad: 'Baja' }
        }
    },
    software: {
        problemas: {
            'office-crash': { titulo: 'Microsoft Office falla', descripcion: 'Cierres inesperados de Word, Excel, etc.', prioridad: 'Media' },
            'antivirus-vencido': { titulo: 'Licencia de seguridad expirada', descripcion: 'Sistema desprotegido.', prioridad: 'Alta' },
            'app-externa': { titulo: 'Aplicación corporativa falla', descripcion: 'Software de terceros no responde.', prioridad: 'Media' },
            'navegador-lento': { titulo: 'Navegador web lento', descripcion: 'Carga lenta de páginas.', prioridad: 'Baja' },
            'actualizacion-pendiente': { titulo: 'Actualizaciones pendientes', descripcion: 'Parches de seguridad sin instalar.', prioridad: 'Baja' }
        }
    },
    red: {
        problemas: {
            'sin-internet': { titulo: 'Sin conectividad', descripcion: 'No acceso a internet ni red corporativa.', prioridad: 'Critica' },
            'vpn-caida': { titulo: 'VPN desconectada', descripcion: 'Sin acceso remoto a servidores.', prioridad: 'Alta' },
            'wifi-lento': { titulo: 'WiFi intermitente', descripcion: 'Conexión inestable o lenta.', prioridad: 'Media' },
            'compartir-archivos': { titulo: 'Sin acceso a recursos compartidos', descripcion: 'No se ven carpetas de red.', prioridad: 'Media' }
        }
    },
    email: {
        problemas: {
            'no-envia': { titulo: 'No se pueden enviar correos', descripcion: 'Mensajes atascados en bandeja de salida.', prioridad: 'Alta' },
            'no-recibe': { titulo: 'No llegan correos nuevos', descripcion: 'Bandeja no sincroniza.', prioridad: 'Alta' },
            'outlook-no-abre': { titulo: 'Cliente de correo no inicia', descripcion: 'Outlook se cierra al abrir.', prioridad: 'Alta' },
            'configurar-firma': { titulo: 'Configuración de firma', descripcion: 'Firma HTML corporativa.', prioridad: 'Baja' },
            'recuperar-borrado': { titulo: 'Recuperación de ítem eliminado', descripcion: 'Restaurar desde papelera.', prioridad: 'Media' }
        }
    },
    impresion: {
        problemas: {
            'impresora-oficina': { titulo: 'Impresora compartida offline', descripcion: 'No responde en red.', prioridad: 'Alta' },
            'escaner-falla': { titulo: 'Escáner no funciona', descripcion: 'Error de digitalización.', prioridad: 'Media' },
            'toner-agotado': { titulo: 'Consumible agotado', descripcion: 'Sin tinta o tóner.', prioridad: 'Media' },
            'instalar-impresora': { titulo: 'Instalación de nueva impresora', descripcion: 'Configuración de dispositivo.', prioridad: 'Baja' }
        }
    },
    accesos: {
        problemas: {
            'password-bloqueada': { titulo: 'Cuenta bloqueada', descripcion: 'Múltiples intentos fallidos de login.', prioridad: 'Critica' },
            'reset-password': { titulo: 'Restablecimiento de contraseña', descripcion: 'Usuario olvidó credenciales.', prioridad: 'Media' },
            'acceso-carpeta': { titulo: 'Permisos de carpeta', descripcion: 'Sin acceso a directorio específico.', prioridad: 'Media' },
            'crear-usuario': { titulo: 'Alta de nuevo usuario', descripcion: 'Onboarding: creación de cuenta.', prioridad: 'Media' },
            'bloquear-exempleado': { titulo: 'Baja de usuario', descripcion: 'Desactivación de cuenta y backup.', prioridad: 'Alta' }
        }
    },
    otros: {
        problemas: {
            'consulta-general': { titulo: 'Consulta técnica', descripcion: 'Duda general sobre procedimiento.', prioridad: 'Baja' },
            'compra-equipo': { titulo: 'Solicitud de hardware', descripcion: 'Requerimiento de nuevo equipo.', prioridad: 'Baja' },
            'urgencia-desconocida': { titulo: 'Incidente no catalogado', descripcion: 'Requiere análisis manual.', prioridad: 'Media' }
        }
    }
};

const selectCategoria = document.getElementById('categoria');
const campoProblema = document.getElementById('campo-problema');
const selectProblema = document.getElementById('problema');
const campoDetalles = document.getElementById('campo-detalles');
const vistaPrevia = document.getElementById('vista-previa');
const tagPrioridad = document.getElementById('tag-prioridad');
const vpProblemaTexto = document.getElementById('vp-problema-texto');
const btnEnviar = document.getElementById('btn-enviar');
const form = document.getElementById('formTicket');

let seleccionActual = null;

selectCategoria.addEventListener('change', function() {
    const cat = this.value;
    
    if (!cat) {
        campoProblema.style.display = 'none';
        campoDetalles.style.display = 'none';
        vistaPrevia.style.display = 'none';
        btnEnviar.disabled = true;
        return;
    }
    
    const problemas = catalogoProblemas[cat].problemas;
    selectProblema.innerHTML = '<option value="">Seleccionar...</option>';
    
    Object.entries(problemas).forEach(([key, info]) => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = info.titulo;
        selectProblema.appendChild(opt);
    });
    
    campoProblema.style.display = 'block';
    selectProblema.value = '';
    campoDetalles.style.display = 'none';
    vistaPrevia.style.display = 'none';
    btnEnviar.disabled = true;
});

selectProblema.addEventListener('change', function() {
    const cat = selectCategoria.value;
    const prob = this.value;
    
    if (!prob) {
        campoDetalles.style.display = 'none';
        vistaPrevia.style.display = 'none';
        btnEnviar.disabled = true;
        return;
    }
    
    const info = catalogoProblemas[cat].problemas[prob];
    seleccionActual = {
        categoria: cat,
        problema: prob,
        titulo: info.titulo,
        descripcion: info.descripcion,
        prioridad: info.prioridad
    };
    
    tagPrioridad.textContent = info.prioridad;
    tagPrioridad.className = 'priority-badge ' + info.prioridad.toLowerCase();
    vpProblemaTexto.textContent = info.titulo;
    
    vistaPrevia.style.display = 'block';
    campoDetalles.style.display = 'block';
    btnEnviar.disabled = false;
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const detalles = document.getElementById('detalles').value.trim();
    if (!detalles) {
        alert('Completá el campo de detalles adicionales');
        document.getElementById('detalles').focus();
        return;
    }
    
    const datosEnvio = {
        titulo: seleccionActual.titulo,
        descripcion: seleccionActual.descripcion,
        solicitante: document.getElementById('solicitante').value,
        email: document.getElementById('email').value,
        prioridad: seleccionActual.prioridad,
        detalles_extra: detalles
    };
    
    btnEnviar.disabled = true;
    btnEnviar.innerHTML = '<span>Enviando...</span>';
    
    try {
        const res = await fetch(`${API_URL}/api/tickets`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosEnvio)
        });
        
        const data = await res.json();
        
        if (data.exito) {
            form.style.display = 'none';
            document.getElementById('mensaje-exito').style.display = 'block';
            document.getElementById('email-confirmado').textContent = datosEnvio.email;
            document.getElementById('numero-ticket').textContent = '#' + data.ticket.id;
            document.getElementById('prioridad-confirmada').textContent = data.ticket.prioridad;
        } else {
            throw new Error(data.error);
        }
    } catch (err) {
        alert('Error al enviar. Intentá de nuevo.');
        btnEnviar.disabled = false;
        btnEnviar.innerHTML = '<span>Crear ticket</span><span class="btn-arrow">→</span>';
    }
});

// Enter para enviar
document.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA' && !btnEnviar.disabled) {
            e.preventDefault();
            form.dispatchEvent(new Event('submit'));
        }
    });
});
