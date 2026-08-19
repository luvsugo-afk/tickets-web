const catalogoProblemas = {
    hardware: {
        problemas: {
            'pc-no-enciende': { titulo: 'Equipo no enciende', descripcion: 'Sin respuesta al presionar botón de encendido. Revisar conexiones eléctricas.', prioridad: 'Alta' },
            'pantalla-azul': { titulo: 'Pantalla azul (BSOD)', descripcion: 'Error crítico del sistema. Posible conflicto de drivers o hardware defectuoso.', prioridad: 'Alta' },
            'monitor-negro': { titulo: 'Sin señal de video', descripcion: 'Monitor no detecta entrada de video. Revisar cables y conexiones.', prioridad: 'Alta' },
            'sobrecalentamiento': { titulo: 'Sobrecalentamiento', descripcion: 'Temperatura superior a lo normal. Limpiar coolers y verificar ventilación.', prioridad: 'Media' },
            'teclado-danado': { titulo: 'Teclado no responde', descripcion: 'Teclas atascadas o sin función. Revisar conexión USB.', prioridad: 'Baja' },
            'mouse-falla': { titulo: 'Mouse defectuoso', descripcion: 'Movimientos erráticos o sin respuesta. Limpiar sensor o cambiar batería.', prioridad: 'Baja' }
        }
    },
    software: {
        problemas: {
            'office-crash': { titulo: 'Microsoft Office falla', descripcion: 'Aplicaciones se cierran inesperadamente. Revisar complementos.', prioridad: 'Media' },
            'antivirus-vencido': { titulo: 'Licencia de seguridad expirada', descripcion: 'Sistema desprotegido. Renovar licencia urgentemente.', prioridad: 'Alta' },
            'app-externa': { titulo: 'Aplicación corporativa falla', descripcion: 'Software interno no responde. Verificar conexión a servidores.', prioridad: 'Media' },
            'navegador-lento': { titulo: 'Navegador web lento', descripcion: 'Carga lenta de páginas. Limpiar caché y revisar extensiones.', prioridad: 'Baja' },
            'actualizacion-pendiente': { titulo: 'Actualizaciones pendientes', descripcion: 'Parches de seguridad sin instalar. Programar mantenimiento.', prioridad: 'Baja' }
        }
    },
    red: {
        problemas: {
            'sin-internet': { titulo: 'Sin conectividad', descripcion: 'No acceso a internet ni red corporativa. Verificar cableado y switches.', prioridad: 'Critica' },
            'vpn-caida': { titulo: 'VPN desconectada', descripcion: 'Sin acceso remoto a servidores. Revisar certificados y configuración.', prioridad: 'Alta' },
            'wifi-lento': { titulo: 'WiFi intermitente', descripcion: 'Conexión inestable o velocidad reducida. Revisar cobertura.', prioridad: 'Media' },
            'compartir-archivos': { titulo: 'Sin acceso a recursos compartidos', descripcion: 'No se ven carpetas de red. Verificar permisos y SMB.', prioridad: 'Media' }
        }
    },
    email: {
        problemas: {
            'no-envia': { titulo: 'No se pueden enviar correos', descripcion: 'Mensajes atascados en bandeja de salida. Revisar SMTP.', prioridad: 'Alta' },
            'no-recibe': { titulo: 'No llegan correos nuevos', descripcion: 'Bandeja no sincroniza. Revisar configuración IMAP/POP3.', prioridad: 'Alta' },
            'outlook-no-abre': { titulo: 'Cliente de correo no inicia', descripcion: 'Outlook se cierra al abrir. Reparar perfil o recrear OST.', prioridad: 'Alta' },
            'configurar-firma': { titulo: 'Configuración de firma', descripcion: 'Firma HTML corporativa. Configurar formato y datos.', prioridad: 'Baja' },
            'recuperar-borrado': { titulo: 'Recuperación de correo eliminado', descripcion: 'Restaurar desde papelera o backup.', prioridad: 'Media' }
        }
    },
    impresion: {
        problemas: {
            'impresora-oficina': { titulo: 'Impresora compartida offline', descripcion: 'No responde en red. Revisar cola de impresión y conectividad.', prioridad: 'Alta' },
            'escaner-falla': { titulo: 'Escáner no funciona', descripcion: 'Error de digitalización. Revisar calibración y cristal.', prioridad: 'Media' },
            'toner-agotado': { titulo: 'Consumible agotado', descripcion: 'Sin tinta o tóner. Reemplazar cartucho.', prioridad: 'Media' },
            'instalar-impresora': { titulo: 'Instalación de nueva impresora', descripcion: 'Configurar driver y puerto de red.', prioridad: 'Baja' }
        }
    },
    accesos: {
        problemas: {
            'password-bloqueada': { titulo: 'Cuenta bloqueada', descripcion: 'Múltiples intentos fallidos. Desbloquear desde Active Directory.', prioridad: 'Critica' },
            'reset-password': { titulo: 'Restablecimiento de contraseña', descripcion: 'Usuario olvidó credenciales. Generar contraseña temporal.', prioridad: 'Media' },
            'acceso-carpeta': { titulo: 'Permisos de carpeta', descripcion: 'Sin acceso a directorio específico. Revisar ACL y grupos.', prioridad: 'Media' },
            'crear-usuario': { titulo: 'Alta de nuevo usuario', descripcion: 'Onboarding: crear cuenta AD, email, VPN.', prioridad: 'Media' },
            'bloquear-exempleado': { titulo: 'Baja de usuario', descripcion: 'Offboarding: desactivar cuenta y respaldar datos.', prioridad: 'Alta' }
        }
    },
    otros: {
        problemas: {
            'consulta-general': { titulo: 'Consulta técnica', descripcion: 'Duda general sobre procedimiento o configuración.', prioridad: 'Baja' },
            'compra-equipo': { titulo: 'Solicitud de hardware', descripcion: 'Requerimiento de nuevo equipo. Especificar necesidades.', prioridad: 'Baja' },
            'urgencia-desconocida': { titulo: 'Incidente no catalogado', descripcion: 'Requiere análisis manual y diagnóstico.', prioridad: 'Media' }
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
    selectProblema.innerHTML = '<option value="">Seleccione el problema</option>';
    
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
    tagPrioridad.className = 'badge ' + info.prioridad.toLowerCase();
    vpProblemaTexto.textContent = info.titulo;
    
    vistaPrevia.style.display = 'block';
    campoDetalles.style.display = 'block';
    btnEnviar.disabled = false;
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const detalles = document.getElementById('detalles').value.trim();
    if (!detalles) {
        alert('Por favor complete la descripción detallada del incidente.');
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
    btnEnviar.textContent = 'Enviando...';
    
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
            document.getElementById('numero-ticket').textContent = data.ticket.id;
            document.getElementById('prioridad-confirmada').textContent = data.ticket.prioridad;
        } else {
            throw new Error(data.error);
        }
    } catch (err) {
        alert('Error al enviar la solicitud. Por favor intente nuevamente.');
        btnEnviar.disabled = false;
        btnEnviar.textContent = 'Enviar Solicitud';
    }
});
