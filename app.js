const catalogoProblemas = {
    hardware: {
        problemas: {
            'pc-no-enciende': { titulo: 'Mi equipo no enciende', descripcion: 'El computador no muestra señal de vida al presionar el botón de encendido.', prioridad: 'Alta' },
            'pantalla-azul': { titulo: 'Aparece pantalla azul (BSOD)', descripcion: 'El sistema presenta pantallazos azules aleatorios.', prioridad: 'Alta' },
            'monitor-negro': { titulo: 'Monitor negro, no muestra imagen', descripcion: 'La pantalla permanece negra.', prioridad: 'Alta' },
            'sobrecalentamiento': { titulo: 'Se sobrecalienta mucho', descripcion: 'El dispositivo alcanza temperaturas elevadas.', prioridad: 'Media' },
            'teclado-danado': { titulo: 'Teclado sucio o teclas no funcionan', descripcion: 'Teclas no responden.', prioridad: 'Baja' },
            'mouse-falla': { titulo: 'Mouse no responde bien', descripcion: 'El puntero no responde correctamente.', prioridad: 'Baja' }
        }
    },
    software: {
        problemas: {
            'office-crash': { titulo: 'Microsoft Office se cierra solo', descripcion: 'Word, Excel o Outlook se cierran inesperadamente.', prioridad: 'Media' },
            'antivirus-vencido': { titulo: 'Antivirus muestra alerta de vencimiento', descripcion: 'El software de seguridad muestra licencia expirada.', prioridad: 'Alta' },
            'app-externa': { titulo: 'Aplicación del trabajo no funciona', descripcion: 'Software específico del departamento presenta errores.', prioridad: 'Media' },
            'navegador-lento': { titulo: 'Internet va muy lento en el navegador', descripcion: 'Chrome/Edge tarda en cargar páginas.', prioridad: 'Baja' },
            'actualizacion-pendiente': { titulo: 'Windows pide actualizarse', descripcion: 'El sistema operativo requiere actualizaciones.', prioridad: 'Baja' }
        }
    },
    red: {
        problemas: {
            'sin-internet': { titulo: 'No tengo internet', descripcion: 'El equipo no puede acceder a recursos web.', prioridad: 'Critica' },
            'vpn-caida': { titulo: 'No puedo conectarme por VPN', descripcion: 'No se puede establecer conexión segura.', prioridad: 'Alta' },
            'wifi-lento': { titulo: 'WiFi muy lento o se corta', descripcion: 'La conexión inalámbrica presenta problemas.', prioridad: 'Media' },
            'compartir-archivos': { titulo: 'No veo carpetas compartidas', descripcion: 'Imposible acceder a carpetas compartidas.', prioridad: 'Media' }
        }
    },
    email: {
        problemas: {
            'no-envia': { titulo: 'No puedo enviar correos', descripcion: 'Los mensajes quedan atascados.', prioridad: 'Alta' },
            'no-recibe': { titulo: 'No me llegan correos nuevos', descripcion: 'La bandeja no muestra mensajes recientes.', prioridad: 'Alta' },
            'outlook-no-abre': { titulo: 'Outlook no abre', descripcion: 'La aplicación no inicia.', prioridad: 'Alta' },
            'configurar-firma': { titulo: 'Necesito configurar mi firma', descripcion: 'Ayuda con firma electrónica.', prioridad: 'Baja' },
            'recuperar-borrado': { titulo: 'Borré un correo importante', descripcion: 'Recuperación de mensaje eliminado.', prioridad: 'Media' }
        }
    },
    impresion: {
        problemas: {
            'impresora-oficina': { titulo: 'Impresora de la oficina no responde', descripcion: 'La impresora compartida no funciona.', prioridad: 'Alta' },
            'escaner-falla': { titulo: 'Escáner no funciona', descripcion: 'El equipo no escanea documentos.', prioridad: 'Media' },
            'toner-agotado': { titulo: 'Se acabó la tinta o tóner', descripcion: 'La impresora muestra alerta.', prioridad: 'Media' },
            'instalar-impresora': { titulo: 'Necesito instalar una impresora nueva', descripcion: 'Configurar impresora nueva.', prioridad: 'Baja' }
        }
    },
    accesos: {
        problemas: {
            'password-bloqueada': { titulo: 'Mi cuenta está bloqueada', descripcion: 'Cuenta bloqueada por intentos fallidos.', prioridad: 'Critica' },
            'reset-password': { titulo: 'Olvidé mi contraseña', descripcion: 'No puedo acceder al sistema.', prioridad: 'Media' },
            'acceso-carpeta': { titulo: 'No tengo permiso para una carpeta', descripcion: 'Necesito acceso a directorio específico.', prioridad: 'Media' },
            'crear-usuario': { titulo: 'Nuevo empleado necesita cuenta', descripcion: 'Ingreso de personal nuevo.', prioridad: 'Media' },
            'bloquear-exempleado': { titulo: 'Deshabilitar cuenta de exempleado', descripcion: 'Baja de personal.', prioridad: 'Alta' }
        }
    },
    otros: {
        problemas: {
            'consulta-general': { titulo: 'Tengo una duda sobre IT', descripcion: 'Consulta general.', prioridad: 'Baja' },
            'compra-equipo': { titulo: 'Solicitud de equipo nuevo', descripcion: 'Requerimiento de hardware.', prioridad: 'Baja' },
            'urgencia-desconocida': { titulo: 'Problema no listado aquí', descripcion: 'Incidencia no catalogada.', prioridad: 'Media' }
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
    selectProblema.innerHTML = '<option value="">Selecciona el problema específico...</option>';
    
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
    tagPrioridad.className = 'prioridad-tag ' + info.prioridad.toLowerCase();
    vpProblemaTexto.textContent = info.titulo;
    
    vistaPrevia.style.display = 'block';
    campoDetalles.style.display = 'block';
    btnEnviar.disabled = false;
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const datosEnvio = {
        titulo: seleccionActual.titulo,
        descripcion: seleccionActual.descripcion,
        solicitante: document.getElementById('solicitante').value,
        email: document.getElementById('email').value,
        prioridad: seleccionActual.prioridad,
        detalles_extra: document.getElementById('detalles').value
    };
    
    btnEnviar.disabled = true;
    btnEnviar.innerHTML = '<span class="btn-texto">Enviando...</span><span class="btn-icono">⏳</span>';
    
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            throw new Error(data.error);
        }
    } catch (err) {
        alert('Ups, algo salió mal. Intenta de nuevo.');
        btnEnviar.disabled = false;
        btnEnviar.innerHTML = '<span class="btn-texto">Enviar mi solicitud</span><span class="btn-icono">→</span>';
    }
});
