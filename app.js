// Catálogo de problemas - versión "che, qué te pasa?"
const catalogoProblemas = {
    hardware: {
        problemas: {
            'pc-no-enciende': { titulo: 'La compu no enciende 😭', descripcion: 'Apretás el botón y no pasa nada. Revisamos cables y fuente.', prioridad: 'Alta' },
            'pantalla-azul': { titulo: 'Pantallazo azul de la muerte', descripcion: 'Windows se puso rebelde. Drivers o RAM.', prioridad: 'Alta' },
            'monitor-negro': { titulo: 'El monitor está negro', descripcion: 'Cable suelto o se quemó algo.', prioridad: 'Alta' },
            'sobrecalentamiento': { titulo: 'Se está por prender fuego 🔥', descripcion: 'Temperatura alta. Limpiamos coolers.', prioridad: 'Media' },
            'teclado-danado': { titulo: 'El teclado no responde', descripcion: 'Teclas atascadas o desconectado.', prioridad: 'Baja' },
            'mouse-falla': { titulo: 'El mouse se mueve solo', descripcion: 'Sensor sucio o batería baja.', prioridad: 'Baja' }
        }
    },
    software: {
        problemas: {
            'office-crash': { titulo: 'Office se cierra solo', descripcion: 'Word o Excel se cuelgan.', prioridad: 'Media' },
            'antivirus-vencido': { titulo: 'El antivirus venció', descripcion: 'Estás desprotegido. Hay que renovar YA.', prioridad: 'Alta' },
            'app-externa': { titulo: 'App del laburo no anda', descripcion: 'El sistema interno falla.', prioridad: 'Media' },
            'navegador-lento': { titulo: 'Chrome va lento', descripcion: 'Muchas pestañas o cache lleno.', prioridad: 'Baja' },
            'actualizacion-pendiente': { titulo: 'Windows quiere actualizar', descripcion: 'Hay parches de seguridad pendientes.', prioridad: 'Baja' }
        }
    },
    red: {
        problemas: {
            'sin-internet': { titulo: '¡No hay internet! 🚨', descripcion: 'Cable desconectado o falla general.', prioridad: 'Critica' },
            'vpn-caida': { titulo: 'No puedo entrar por VPN', descripcion: 'No accedés a servidores de afuera.', prioridad: 'Alta' },
            'wifi-lento': { titulo: 'El WiFi va a las chapas', descripcion: 'Se corta o va lento.', prioridad: 'Media' },
            'compartir-archivos': { titulo: 'No veo las carpetas compartidas', descripcion: 'Problema de permisos.', prioridad: 'Media' }
        }
    },
    email: {
        problemas: {
            'no-envia': { titulo: 'Los mails no salen', descripcion: 'Se quedan en la bandeja de salida.', prioridad: 'Alta' },
            'no-recibe': { titulo: 'No me llegan mails', descripcion: 'Bandeja vacía pero debería tener mails.', prioridad: 'Alta' },
            'outlook-no-abre': { titulo: 'Outlook no quiere abrir', descripcion: 'Se cierra al iniciar.', prioridad: 'Alta' },
            'configurar-firma': { titulo: 'Quiero poner firma bonita', descripcion: 'Configuración de firma HTML.', prioridad: 'Baja' },
            'recuperar-borrado': { titulo: 'Borré un mail importante', descripcion: 'Recuperación desde papelera.', prioridad: 'Media' }
        }
    },
    impresion: {
        problemas: {
            'impresora-oficina': { titulo: 'La impresora no imprime', descripcion: 'Cola atascada o sin tinta.', prioridad: 'Alta' },
            'escaner-falla': { titulo: 'El escáner no escanea', descripcion: 'Error de calibración.', prioridad: 'Media' },
            'toner-agotado': { titulo: 'Se acabó la tinta', descripcion: 'Hay que cambiar el cartucho.', prioridad: 'Media' },
            'instalar-impresora': { titulo: 'Necesito instalar impresora nueva', descripcion: 'Setup de nueva impresora.', prioridad: 'Baja' }
        }
    },
    accesos: {
        problemas: {
            'password-bloqueada': { titulo: 'Me bloquearon la cuenta', descripcion: 'Muchos intentos fallidos.', prioridad: 'Critica' },
            'reset-password': { titulo: 'Me olvidé la contraseña', descripcion: 'No puedo entrar al sistema.', prioridad: 'Media' },
            'acceso-carpeta': { titulo: 'No puedo entrar a una carpeta', descripcion: 'Sin permisos.', prioridad: 'Media' },
            'crear-usuario': { titulo: 'Nuevo compañero necesita cuenta', descripcion: 'Onboarding.', prioridad: 'Media' },
            'bloquear-exempleado': { titulo: 'Se fue alguien, bloquear cuenta', descripcion: 'Offboarding.', prioridad: 'Alta' }
        }
    },
    otros: {
        problemas: {
            'consulta-general': { titulo: 'Tengo una duda de IT', descripcion: 'Consulta general.', prioridad: 'Baja' },
            'compra-equipo': { titulo: 'Necesito pedir equipo nuevo', descripcion: 'Compra de hardware.', prioridad: 'Baja' },
            'urgencia-desconocida': { titulo: 'Algo raro pasa', descripcion: 'No sé qué es, pero algo falla.', prioridad: 'Media' }
        }
    }
};

// Referencias
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
    selectProblema.innerHTML = '<option value="">Elegí el problema...</option>';
    
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
    
    tagPrioridad.textContent = info.prioridad;
    tagPrioridad.className = 'prioridad-tag-cute ' + info.prioridad.toLowerCase();
    vpProblemaTexto.textContent = info.titulo;
    
    vistaPrevia.style.display = 'block';
    campoDetalles.style.display = 'block';
    btnEnviar.disabled = false;
});

// Submit
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const detalles = document.getElementById('detalles').value.trim();
    if (!detalles) {
        alert('¡Ups! Contame un poco más de qué te pasó 😊');
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
    btnEnviar.innerHTML = '<span>Enviando...</span><span>💫</span>';
    
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
        alert('Algo salió mal 😅 Probá de nuevo');
        btnEnviar.disabled = false;
        btnEnviar.innerHTML = '<span>Enviar consulta</span><span>✨</span>';
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
