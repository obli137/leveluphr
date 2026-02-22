import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_INBOX = 'info@hrlevel-up.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'LevelUp Web <onboarding@resend.dev>';

function buildNotificationBody(body: Record<string, string | undefined>): string {
  const lines: string[] = [];
  if (body.name) lines.push(`Nombre: ${body.name}`);
  if (body.email) lines.push(`Email: ${body.email}`);
  if (body.company) lines.push(`Empresa: ${body.company}`);
  if (body.role) lines.push(`Rol: ${body.role}`);
  if (body.interest) lines.push(`Interés: ${body.interest}`);
  if (body.subject) lines.push(`Asunto: ${body.subject}`);
  if (body.message) lines.push(`\nMensaje:\n${body.message}`);
  if (body.source) lines.push(`\n(Enviado desde: ${body.source === 'home' ? 'Formulario Home' : 'Página Contacto'})`);
  return lines.join('\n');
}

function buildNotificationHtml(body: Record<string, string | undefined>): string {
  const rows = [
    body.name && `<tr><td><strong>Nombre</strong></td><td>${escapeHtml(body.name)}</td></tr>`,
    body.email && `<tr><td><strong>Email</strong></td><td>${escapeHtml(body.email)}</td></tr>`,
    body.company && `<tr><td><strong>Empresa</strong></td><td>${escapeHtml(body.company)}</td></tr>`,
    body.role && `<tr><td><strong>Rol</strong></td><td>${escapeHtml(body.role)}</td></tr>`,
    body.interest && `<tr><td><strong>Interés</strong></td><td>${escapeHtml(body.interest)}</td></tr>`,
    body.subject && `<tr><td><strong>Asunto</strong></td><td>${escapeHtml(body.subject)}</td></tr>`,
  ].filter(Boolean);
  const message = body.message ? `<p><strong>Mensaje:</strong></p><p>${escapeHtml(body.message).replace(/\n/g, '<br>')}</p>` : '';
  const source = body.source ? `<p style="color:#666;font-size:12px;">Enviado desde: ${body.source === 'home' ? 'Formulario Home' : 'Página Contacto'}</p>` : '';
  return `
    <h2>Nueva solicitud de contacto</h2>
    <table style="border-collapse:collapse;">${rows.join('')}</table>
    ${message}
    ${source}
  `;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const CONFIRMATION_SUBJECT = 'Recibimos tu solicitud - LevelUp';
const CONFIRMATION_HTML = `
  <p>Hola,</p>
  <p>Recibimos tu solicitud correctamente. En breve nos pondremos en contacto.</p>
  <p>Saludos,<br>El equipo de LevelUp</p>
`;

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set');
    return new Response(
      JSON.stringify({ error: 'Server configuration error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }

  let body: Record<string, string | undefined>;
  try {
    body = await req.json();
  } catch {
    return new Response(
      JSON.stringify({ error: 'Invalid JSON' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  if (!name || !email) {
    return new Response(
      JSON.stringify({ error: 'Nombre y email son obligatorios' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const payload = {
    name,
    email,
    company: body.company?.trim(),
    role: body.role?.trim(),
    interest: body.interest?.trim(),
    subject: body.subject?.trim(),
    message: body.message?.trim(),
    source: body.source === 'home' ? 'home' : 'contact',
  };

  try {
    // 1. Email a info@hrlevel-up.com con los datos del formulario
    const { error: err1 } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_INBOX],
      subject: `[Web] Nueva solicitud de ${payload.name}`,
      text: buildNotificationBody(payload),
      html: buildNotificationHtml(payload),
    });

    if (err1) {
      console.error('Resend error (to inbox):', err1);
      return new Response(
        JSON.stringify({ error: 'No se pudo enviar el mensaje' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2. Email de confirmación al usuario
    const { error: err2 } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [payload.email],
      subject: CONFIRMATION_SUBJECT,
      html: CONFIRMATION_HTML,
    });

    if (err2) {
      console.error('Resend error (confirmation):', err2);
      // No fallamos la request: el mensaje ya llegó a info@
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    console.error(e);
    return new Response(
      JSON.stringify({ error: 'Error al enviar' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
