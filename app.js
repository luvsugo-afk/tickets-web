// Catálogo de problemas: datos técnicos reales
const catalogoProblemas = {
    hardware: {
        problemas: {
            'pc-no-enciende': { titulo: 'PC no enciende', descripcion: 'Fallo en fuente de poder o placa madre. Revisar conexiones.', prioridad: 'Alta' },
            'pantalla-azul': { titulo: 'BSOD - Pantalla azul', descripcion: 'Error crítico de sistema. Posible driver o RAM defectuosa.', prioridad: 'Alta' },
            'monitor-negro': { titulo: 'Sin señal de video', descripcion: 'Cable HDMI/DP suelto o monitor dañado.', prioridad: 'Alta' },
            'sobrecalentamiento': { titulo: 'Overheating', descripcion: 'Temperatura >90°C. Limpiar coolers y cambiar pasta térmica.', prioridad: 'Media' },
            'teclado-danado': { titulo: 'Teclado no responde', descripcion: 'Teclas atascadas o desconexión USB.', prioridad: 'Baja' },
            'mouse-falla': { titulo: 'Mouse errático', descripcion: 'Sensor sucio o batería baja (si es wireless).', prioridad: 'Baja' }
        }
    },
    software: {
        problemas: {
            'office-crash': { titulo: 'Office se cierra', descripcion: 'Add-ins corruptos. Iniciar en modo seguro.', prioridad: 'Media' },
            'antivirus-vencido': { titulo: 'Licencia expirada', descripcion: 'Sistema desprotegido. Renovar licencia urgentemente.', prioridad: 'Alta' },
            'app-externa': { titulo: 'App corporativa falla', descripcion: 'Error específico de software de la empresa.', prioridad: 'Media' },
            'navegador-lento': { titulo: 'Browser lento', descripcion: 'Cache saturado o demasiadas extensiones.', prioridad: 'Baja' },
            'actualizacion-pendiente': { titulo: 'Updates pendientes', descripcion: 'Parches de seguridad sin instalar.', prioridad: 'Baja' }
        }
    },
    red: {
        problemas: {
            'sin-internet': { titulo: 'Sin conectividad', descripcion: 'Cable de red desconectado o fallo en switch.', prioridad: 'Critica' },
            'vpn-caida': { titulo: 'VPN caída', descripcion: 'No acceso a servidores corporativos. Revisar certificados.', prioridad: 'Alta' },
            'wifi-lento': { titulo: 'WiFi intermitente', descripcion: 'Señal débil o interferencia de 2.4GHz.', prioridad: 'Media' },
            'compartir-archivos': { titulo: 'Sin acceso a shares', descripcion: 'Permisos de red o SMB deshabilitado.', prioridad: 'Media' }
        }
    },
    email: {
        problemas: {
            'no-envia': { titulo: 'SMTP fallando', descripcion: 'Cola de envío bloqueada o autenticación errónea.', prioridad: 'Alta' },
            'no-recibe': { titulo: 'IMAP/POP3 error', descripcion: 'No sincroniza bandeja de entrada.', prioridad: 'Alta' },
            'outlook-no-abre': { titulo: 'Outlook corrupto', descripcion: 'Reparar perfil o recrear OST.', prioridad: 'Alta' },
            'configurar-firma': { titulo: 'Firma HTML', descripcion: 'Configuración de firma corporativa.', prioridad: 'Baja' },
            'recuperar-borrado': { titulo: 'Restore deleted item', descripcion: 'Recuperar de Deleted Items o backup.', prioridad: 'Media' }
        }
    },
    impresion: {
        problemas: {
            'impresora-oficina': { titulo: 'Printer offline', descripcion: 'Cola de impresión atascada o sin toner.', prioridad: 'Alta' },
            'escaner-falla': { titulo: 'Scanner error', descripcion: 'Calibración perdida o cristal sucio.', prioridad: 'Media' },
            'toner-agotado': { titulo: 'Out of toner', descripcion: 'Reemplazar cartucho.', prioridad: 'Media' },
            'instalar-impresora': { titulo: 'Setup printer', descripcion: 'Instalar driver y configurar puerto.', prioridad: 'Baja' }
        }
    },
    accesos: {
        problemas: {
            'password-bloqueada': { titulo: 'Account locked', descripcion: 'Múltiples intentos fallidos. Desbloquear desde AD.', prioridad: 'Critica' },
            'reset-password': { titulo: 'Password reset', descripcion: 'Usuario olvidó contraseña. Generar temporal.', prioridad: 'Media' },
            'acceso-carpeta': { titulo: 'Permisos NTFS', descripcion: 'Sin acceso a recurso compartido.', prioridad: 'Media' },
            'crear-usuario': { titulo: 'New user setup', descripcion: 'Onboarding: crear AD, email, VPN.', prioridad: 'Media' },
            'bloquear-exempleado': { titulo: 'Disable account', descripcion: 'Offboarding: desactivar y backup.', prioridad: 'Alta' }
        }
    },
    otros: {
        problemas: {
            'consulta-general': { titulo: 'Consulta técnica', descripcion: 'Duda general sobre procedimiento.', prioridad: 'Baja' },
            'compra-equipo': { titulo: 'Hardware request', descripcion: 'Solicitud de nuevo equipo.', prioridad: 'Baja' },
            'urgencia-desconocida': { titulo: 'Incidente no catalogado', descripcion: 'Requiere análisis manual.', prioridad: 'Media' }
        }
    }
};

// Referencias DOM
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

// Cambio de categoría
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
    selectProblema.innerHTML = '<option value="">-- seleccionar --</option>';
    
    Object.entries(problemas).forEach(([key, info]) => {
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = `[${info.prioridad.substring(0,1)}] ${info.titulo}`;
        selectProblema.appendChild(opt);
    });
    
    campoProblema.style.display = 'block';
    selectProblema.value = '';
    campoDetalles.style.display = 'none';
    vistaPrevia.style.display = 'none';
    btnEnviar.disabled = true;
});

// Cambio de problema
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
    
    tagPrioridad.textContent = info.prioridad.toUpperCase();
    tagPrioridad.className = 'priority-badge ' + info.prioridad.toLowerCase();
    vpProblemaTexto.textContent = info.titulo;
    
    vistaPrevia.style.display = 'block';
    campoDetalles.style.display = 'block';
    btnEnviar.disabled = false;
});

// Submit con validación
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const detalles = document.getElementById('detalles').value.trim();
    if (!detalles) {
        alert('> ERROR: El campo notas_adicionales es obligatorio');
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
    btnEnviar.textContent = '[ ENVIANDO... ]';
    
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
            document.getElementById('prioridad-confirmada').textContent = data.ticket.prioridad.toUpperCase();
        } else {
            throw new Error(data.error);
        }
    } catch (err) {
        alert('> ERROR: ' + err.message);
        btnEnviar.disabled = false;
        btnEnviar.textContent = '[ ENVIAR_TICKET ]';
    }
});

// Enter en cualquier campo envía
document.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            if (!btnEnviar.disabled) form.dispatchEvent(new Event('submit'));
        }
    });
});
