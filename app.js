const catalogoProblemas = {
    hardware: {
        icono: '💻',
        nombre: 'Computador o laptop',
        problemas: {
            'pc-no-enciende': {
                titulo: 'Mi equipo no enciende',
                descripcion: 'El computador no muestra señal de vida al presionar el botón de encendido. Posible falla en fuente de poder, placa madre o conexiones eléctricas.',
                prioridad: 'Alta'
            },
            'pantalla-azul': {
                titulo: 'Aparece pantalla azul (BSOD)',
                descripcion: 'El sistema presenta pantallazos azules aleatorios durante el uso. Posible conflicto de drivers, memoria RAM defectuosa o problema de disco duro.',
                prioridad: 'Alta'
            },
            'monitor-negro': {
                titulo: 'Monitor negro, no muestra imagen',
                descripcion: 'La pantalla permanece negra aunque el equipo esté encendido. Posible problema de cable, conexión o panel dañado.',
                prioridad: 'Alta'
            },
            'sobrecalentamiento': {
                titulo: 'Se sobrecalienta mucho',
                descripcion: 'El dispositivo alcanza temperaturas elevadas durante operación normal. Riesgo de daño permanente en componentes.',
                prioridad: 'Media'
            },
            'teclado-danado': {
                titulo: 'Teclado sucio o teclas no funcionan',
                descripcion: 'Teclas no responden, se traban o presentan suciedad acumulada. Afecta la productividad del usuario.',
                prioridad: 'Baja'
            },
            'mouse-falla': {
                titulo: 'Mouse no responde bien',
                descripcion: 'El puntero no responde, se mueve erráticamente o los clicks no registran. Puede ser cable, sensor o batería.',
                prioridad: 'Baja'
            }
        }
    },
    software: {
        icono: '⚙️',
        nombre: 'Programas y aplicaciones',
        problemas: {
            'office-crash': {
                titulo: 'Microsoft Office se cierra solo',
                descripcion: 'Word, Excel o Outlook se cierran inesperadamente o no abren. Posible archivo corrupto o conflicto de complementos.',
                prioridad: 'Media'
            },
            'antivirus-vencido': {
                titulo: 'Antivirus muestra alerta de vencimiento',
                descripcion: 'El software de seguridad muestra licencia expirada. El equipo está desprotegido contra amenazas.',
                prioridad: 'Alta'
            },
            'app-externa': {
                titulo: 'Aplicación del trabajo no funciona',
                descripcion: 'Software específico del departamento presenta errores o no ejecuta correctamente.',
                prioridad: 'Media'
            },
            'navegador-lento': {
                titulo: 'Internet va muy lento en el navegador',
                descripcion: 'Chrome/Edge tarda en cargar páginas o se congela. Posible exceso de extensiones o caché saturado.',
                prioridad: 'Baja'
            },
            'actualizacion-pendiente': {
                titulo: 'Windows pide actualizarse constantemente',
                descripcion: 'El sistema operativo requiere instalación de actualizaciones de seguridad y mejoras.',
                prioridad: 'Baja'
            }
        }
    },
    red: {
        icono: '🌐',
        nombre: 'Internet y red',
        problemas: {
            'sin-internet': {
                titulo: 'No tengo internet',
                descripcion: 'El equipo no puede acceder a recursos web ni servicios en la nube. Afecta todas las operaciones.',
                prioridad: 'Critica'
            },
            'vpn-caida': {
                titulo: 'No puedo conectarme por VPN',
                descripcion: 'No se puede establecer conexión segura con la red corporativa. Imposible acceder a servidores internos.',
                prioridad: 'Alta'
            },
            'wifi-lento': {
                titulo: 'WiFi muy lento o se corta',
                descripcion: 'La conexión inalámbrica presenta velocidades reducidas o desconexiones frecuentes.',
                prioridad: 'Media'
            },
            'compartir-archivos': {
                titulo: 'No veo carpetas compartidas',
                descripcion: 'Imposible acceder a carpetas compartidas del servidor o de otros equipos.',
                prioridad: 'Media'
            }
        }
    },
    email: {
        icono: '📧',
        nombre: 'Correo electrónico',
        problemas: {
            'no-envia': {
                titulo: 'No puedo enviar correos',
                descripcion: 'Los mensajes quedan atascados en bandeja de salida. Posible problema de configuración SMTP o límite de almacenamiento.',
                prioridad: 'Alta'
            },
            'no-recibe': {
                titulo: 'No me llegan correos nuevos',
                descripcion: 'La bandeja de entrada no muestra mensajes recientes aunque se confirmó envío.',
                prioridad: 'Alta'
            },
            'outlook-no-abre': {
                titulo: 'Outlook no abre',
                descripcion: 'La aplicación de correo no inicia o se cierra al momento de abrir. Posible perfil corrupto.',
                prioridad: 'Alta'
            },
            'configurar-firma': {
                titulo: 'Necesito configurar mi firma',
                descripcion: 'El usuario requiere asistencia para crear o modificar firma electrónica corporativa.',
                prioridad: 'Baja'
            },
            'recuperar-borrado': {
                titulo: 'Borré un correo importante',
                descripcion: 'Se eliminó accidentalmente un mensaje y se requiere recuperación desde copia de seguridad.',
                prioridad: 'Media'
            }
        }
    },
    impresion: {
        icono: '🖨️',
        nombre: 'Impresión',
        problemas: {
            'impresora-oficina': {
                titulo: 'Impresora de la oficina no responde',
                descripcion: 'La impresora compartida no procesa trabajos de impresión. Posible atasco, sin toner o desconexión.',
                prioridad: 'Alta'
            },
            'escaner-falla': {
                titulo: 'Escáner no funciona',
                descripcion: 'El equipo no escanea documentos o la calidad es deficiente. Requiere limpieza o recalibración.',
                prioridad: 'Media'
            },
            'toner-agotado': {
                titulo: 'Se acabó la tinta o tóner',
                descripcion: 'La impresora muestra alerta de consumible vacío. Necesita reposición.',
                prioridad: 'Media'
            },
            'instalar-impresora': {
                titulo: 'Necesito instalar una impresora nueva',
                descripcion: 'Configurar impresora de red o USB en el equipo del usuario.',
                prioridad: 'Baja'
            }
        }
    },
    accesos: {
        icono: '🔐',
        nombre: 'Accesos y contraseñas',
        problemas: {
            'password-bloqueada': {
                titulo: 'Mi cuenta está bloqueada',
                descripcion: 'El usuario ingresó mal su contraseña varias veces y la cuenta fue bloqueada por seguridad.',
                prioridad: 'Critica'
            },
            'reset-password': {
                titulo: 'Olvidé mi contraseña',
                descripcion: 'El usuario olvidó su contraseña y no puede acceder al sistema.',
                prioridad: 'Media'
            },
            'acceso-carpeta': {
                titulo: 'No tengo permiso para una carpeta',
                descripcion: 'El usuario necesita acceso a directorio específico del servidor.',
                prioridad: 'Media'
            },
            'crear-usuario': {
                titulo: 'Nuevo empleado necesita cuenta',
                descripcion: 'Ingreso de personal nuevo que requiere cuenta de dominio, correo y accesos.',
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
        icono: '🌸',
        nombre: 'Otras consultas',
        problemas: {
            'consulta-general': {
                titulo: 'Tengo una duda sobre IT',
                descripcion: 'El usuario tiene dudas sobre algún procedimiento o necesita orientación general.',
                prioridad: 'Baja'
            },
            'compra-equipo': {
                titulo: 'Solicitud de equipo nuevo',
                descripcion: 'Requerimiento de nuevo hardware, periféricos o accesorios para el área.',
                prioridad: 'Baja'
            },
            'urgencia-desconocida': {
                titulo: 'Problema no listado aquí',
                descripcion: 'Incidencia que no entra en categorías estándar. Requiere evaluación del técnico.',
                prioridad: 'Media'
            }
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
        categoria: catalogoProblemas[cat].nombre,
        problema: prob,
        titulo_problema: info.titulo,
        descripcion_problema: info.descripcion,
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
    titulo: seleccionActual.titulo_problema,
    descripcion: seleccionActual.descripcion_problema,
    solicitante: document.getElementById('solicitante').value,
    email: document.getElementById('email').value,
    prioridad: seleccionActual.prioridad
};
    
    btnEnviar.disabled = true;
    btnEnviar.innerHTML = '<span class="btn-texto">Enviando...</span><span class="btn-icono">✨</span>';
    
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
