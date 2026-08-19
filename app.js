const catalogoProblemas = {
    hardware: {
        problemas: {
            'equipo-roto': { 
                titulo: 'Equipo roto', 
                descripcion: 'El equipo presenta daño físico o no enciende.', 
                prioridad: 'Alta' 
            },
            'sesion-point': { 
                titulo: 'Sesión cerrada en Point', 
                descripcion: 'Se cerró la sesión del sistema Point y no se puede acceder.', 
                prioridad: 'Alta' 
            },
            'falla-carga': { 
                titulo: 'Falla de carga', 
                descripcion: 'El equipo no carga la batería o presenta problemas de energía.', 
                prioridad: 'Alta' 
            },
            'equipo-descarte': { 
                titulo: 'Equipo de descarte', 
                descripcion: 'Solicitud de baja y retiro de equipo obsoleto o dañado.', 
                prioridad: 'Baja' 
            }
        }
    },
    software: {
        problemas: {
            'instalar-programa': { 
                titulo: 'Instalar un programa', 
                descripcion: 'Instalación de software requerido para el puesto de trabajo.', 
                prioridad: 'Media' 
            },
            'pc-lenta': { 
                titulo: 'PC lenta o no responde', 
                descripcion: 'El equipo presenta lentitud excesiva o se congela.', 
                prioridad: 'Alta' 
            },
            'problemas-sincronizacion': { 
                titulo: 'Problemas de sincronización', 
                descripcion: 'Los datos no se sincronizan correctamente entre dispositivos o la nube.', 
                prioridad: 'Media' 
            },
            'problemas-licencia': { 
                titulo: 'Problemas de licencia', 
                descripcion: 'Software con licencia vencida, expirada o no válida.', 
                prioridad: 'Alta' 
            }
        }
    },
    red: {
        problemas: {
            'sin-internet': { 
                titulo: 'Sin conexión a internet', 
                descripcion: 'No hay acceso a internet ni a la red corporativa.', 
                prioridad: 'Critica' 
            },
            'vpn-caida': { 
                titulo: 'VPN caída', 
                descripcion: 'No se puede establecer conexión VPN con la empresa.', 
                prioridad: 'Alta' 
            },
            'wifi-lento': { 
                titulo: 'WiFi lento o intermitente', 
                descripcion: 'La conexión inalámbrica es inestable o lenta.', 
                prioridad: 'Media' 
            },
            'compartir-archivos': { 
                titulo: 'No se ven carpetas compartidas', 
                descripcion: 'Imposible acceder a recursos compartidos en red.', 
                prioridad: 'Media' 
            }
        }
    },
    impresion: {
        problemas: {
            'impresora-no-funciona': { 
                titulo: 'Impresora no funciona', 
                descripcion: 'La impresora no responde o presenta error general.', 
                prioridad: 'Alta' 
            },
            'falla-toner': { 
                titulo: 'Falla de toner', 
                descripcion: 'Problemas con el toner, cartucho o tinta.', 
                prioridad: 'Media' 
            },
            'falla-imprimir': { 
                titulo: 'Falla al imprimir', 
                descripcion: 'La impresora no imprime o las impresiones salen mal.', 
                prioridad: 'Alta' 
            },
            'instalar-impresora': { 
                titulo: 'Instalar impresora nueva', 
                descripcion: 'Configuración de nueva impresora en el equipo.', 
                prioridad: 'Baja' 
            }
        }
    },
    accesos: {
        problemas: {
            'password-bloqueada': { 
                titulo: 'Cuenta bloqueada', 
                descripcion: 'La cuenta fue bloqueada por intentos fallidos.', 
                prioridad: 'Critica' 
            },
            'reset-password': { 
                titulo: 'Restablecer contraseña', 
                descripcion: 'Olvidó la contraseña y necesita resetearla.', 
                prioridad: 'Media' 
            },
            'acceso-carpeta': { 
                titulo: 'Sin acceso a carpeta', 
                descripcion: 'No tiene permisos para acceder a directorio específico.', 
                prioridad: 'Media' 
            },
            'crear-usuario': { 
                titulo: 'Crear nuevo usuario', 
                descripcion: 'Alta de nuevo empleado en el sistema.', 
                prioridad: 'Media' 
            },
            'bloquear-exempleado': { 
                titulo: 'Bloquear cuenta de ex-empleado', 
                descripcion: 'Desactivar accesos de personal que se va.', 
                prioridad: 'Alta' 
            },
            'panel-alarma': { 
                titulo: 'Sobre panel de alarma', 
                descripcion: 'Consulta o problema con el panel de alarma.', 
                prioridad: 'Media' 
            },
            'sensores-alarma': { 
                titulo: 'Sensores de alarma', 
                descripcion: 'Problemas con sensores del sistema de alarma.', 
                prioridad: 'Media' 
            },
            'camaras-seguridad': { 
                titulo: 'Cámaras de seguridad', 
                descripcion: 'Consulta o falla en cámaras de vigilancia.', 
                prioridad: 'Alta' 
            }
        }
    },
    otros: {
        problemas: {
            'consulta-general': { 
                titulo: 'Consulta general', 
                descripcion: 'Duda o consulta no especificada.', 
                prioridad: 'Baja' 
            },
            'compra-equipo': { 
                titulo: 'Solicitud de compra de equipo', 
                descripcion: 'Requerimiento de adquisición de nuevo hardware.', 
                prioridad: 'Baja' 
            },
            'solicitud-presupuesto': { 
                titulo: 'Solicitud de presupuesto', 
                descripcion: 'Pedido de cotización para proyecto o compra.', 
                prioridad: 'Media' 
            },
            'urgencia-desconocida': { 
                titulo: 'Otro problema no listado', 
                descripcion: 'Incidencia que no entra en las categorías anteriores.', 
                prioridad: 'Media' 
            }
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
    selectProblema.innerHTML = '<option value="">Seleccione el problema...</option>';
    
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

// Cambio de problema específico
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

// Submit
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const detalles = document.getElementById('detalles').value.trim();
    if (!detalles) {
        alert('Por favor complete la descripción detallada');
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
        alert('Error al enviar: ' + err.message);
        btnEnviar.disabled = false;
        btnEnviar.textContent = 'Enviar Solicitud';
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
