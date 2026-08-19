:root {
    /* Paleta exacta de la imagen generada */
    --bg: #F5F3F8;              /* Fondo lavanda visible #F5F3F8 */
    --surface: #FFFFFF;          /* Tarjetas blancas */
    --sidebar: #7C6B8A;          /* Violeta apagado #7C6B8A */
    --sidebar-text: #FFFFFF;     /* Texto blanco en sidebar */
    --text: #000000;             /* Texto NEGRO #000000 */
    --text-muted: #4A4A4A;       /* Gris oscuro #4A4A4A */
    --accent: #9B8AA5;           /* Violeta medio suave #9B8AA5 */
    --accent-hover: #7C6B8A;     /* Hover violeta oscuro #7C6B8A */
    --accent-soft: #D4C8DA;      /* Violeta muy claro #D4C8DA */
    --border: #D4C8DA;           /* Bordes #D4C8DA */
    --shadow: rgba(124, 107, 138, 0.1);
    --font-serif: 'DM Serif Display', serif;
    --font-sans: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-sans);
    background: var(--bg);        /* #F5F3F8 fondo lavanda */
    color: var(--text);           /* #000000 NEGRO */
    line-height: 1.6;
    font-size: 15px;
}

.page {
    display: flex;
    min-height: 100vh;
}

/* Sidebar */
.sidebar {
    width: 260px;
    background: #7C6B8A;        /* Violeta apagado exacto */
    color: #FFFFFF;
    padding: 40px 30px;
    position: fixed;
    height: 100vh;
}

.brand {
    font-family: var(--font-serif);
    font-size: 28px;
    margin-bottom: 60px;
    letter-spacing: -0.5px;
    color: #FFFFFF;
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.nav-item {
    color: #FFFFFF;
    text-decoration: none;
    padding: 12px 16px;
    border-radius: 6px;
    opacity: 0.85;
    transition: all 0.2s;
}

.nav-item:hover,
.nav-item.active {
    opacity: 1;
    background: rgba(255, 255, 255, 0.15);
    color: #FFFFFF;
}

/* Main Content */
.main {
    flex: 1;
    margin-left: 260px;
    padding: 60px;
    max-width: 800px;
}

.header {
    margin-bottom: 48px;
    padding-bottom: 24px;
    border-bottom: 1px solid #D4C8DA;  /* Borde violeta claro */
}

.header h1 {
    font-family: var(--font-serif);
    font-size: 42px;
    font-weight: 400;
    margin-bottom: 8px;
    letter-spacing: -0.5px;
    color: #000000;              /* NEGRO */
}

.subtitle {
    color: #4A4A4A;              /* Gris oscuro */
    font-size: 16px;
}

/* Form */
.form-section {
    margin-bottom: 48px;
}

.form-section h2 {
    font-family: var(--font-serif);
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 24px;
    color: #000000;              /* NEGRO */
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
}

.field {
    margin-bottom: 24px;
}

label {
    display: block;
    font-weight: 600;
    margin-bottom: 8px;
    font-size: 14px;
    color: #000000;              /* NEGRO */
}

.required {
    color: #C62828;
}

input, select, textarea {
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #D4C8DA;   /* Borde violeta claro */
    border-radius: 4px;
    font-family: var(--font-sans);
    font-size: 15px;
    background: #FFFFFF;
    color: #000000;              /* NEGRO */
    transition: all 0.2s;
}

input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: #9B8AA5;       /* Violeta medio */
    box-shadow: 0 0 0 3px rgba(155, 138, 165, 0.15);
}

textarea {
    resize: vertical;
    min-height: 120px;
}

select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%237C6B8A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;
}

/* Summary Card */
.summary-card {
    background: #FFFFFF;
    border-left: 4px solid #9B8AA5;  /* Violeta medio */
    padding: 28px;
    margin: 40px 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.summary-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.summary-title {
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #4A4A4A;
}

.badge {
    padding: 6px 14px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 4px;
    background: #E8E0EC;
    color: #000000;              /* NEGRO */
}

.badge.critica { background: #E57373; color: #000000; }
.badge.alta { background: #FFB74D; color: #000000; }
.badge.media { background: #9B8AA5; color: #000000; }
.badge.baja { background: #B8A8C0; color: #000000; }

.summary-problem {
    font-size: 18px;
    margin-bottom: 12px;
    color: #000000;              /* NEGRO */
}

.summary-note {
    font-size: 14px;
    color: #4A4A4A;
}

/* Buttons */
.actions {
    margin-top: 40px;
}

.btn-primary {
    background: #9B8AA5;         /* Violeta medio */
    color: #000000;              /* NEGRO */
    border: none;
    padding: 16px 40px;
    font-family: var(--font-sans);
    font-size: 15px;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-primary:hover:not(:disabled) {
    background: #7C6B8A;         /* Violeta oscuro */
    color: #FFFFFF;
    transform: translateY(-1px);
}

.btn-primary:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-secondary {
    background: transparent;
    color: #000000;              /* NEGRO */
    border: 2px solid #D4C8DA;
    padding: 12px 32px;
    font-family: var(--font-sans);
    font-size: 14px;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
}

.btn-secondary:hover {
    background: #D4C8DA;
    border-color: #9B8AA5;
}

/* Success Message */
.success-message {
    text-align: center;
    padding: 60px 40px;
    background: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
}

.success-icon {
    width: 80px;
    height: 80px;
    background: #9B8AA5;       /* Violeta medio */
    color: #000000;              /* NEGRO */
    font-size: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    font-weight: bold;
}

.success-message h2 {
    font-family: var(--font-serif);
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 12px;
    color: #000000;              /* NEGRO */
}

.success-message > p {
    color: #4A4A4A;
    margin-bottom: 32px;
}

.ticket-details {
    background: #F5F3F8;         /* Fondo lavanda */
    padding: 24px;
    border-radius: 8px;
    margin-bottom: 32px;
    text-align: left;
}

.ticket-details p {
    margin-bottom: 12px;
    color: #000000;              /* NEGRO */
}

.ticket-details strong {
    display: inline-block;
    width: 100px;
    color: #4A4A4A;
}

/* Responsive */
@media (max-width: 768px) {
    .sidebar {
        width: 100%;
        position: relative;
        height: auto;
        padding: 20px;
    }
    
    .main {
        margin-left: 0;
        padding: 30px;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
}
