/**
 * Receives a lead from the Andario Hospitality Next.js server and appends one row.
 * Configure SPREADSHEET_ID, optionally WEBHOOK_TOKEN, and NOTIFICATION_EMAIL in Script Properties.
 * Do not put those values in this file.
 */
var TYPE_LABELS_ = {
  hostel: 'Hostal',
  'small-hotel': 'Hotel pequeño',
  posada: 'Posada',
  apartment: 'Apartamento turístico',
  'apart-hotel': 'Apart-hotel',
  cabin: 'Cabaña',
  villa: 'Villa',
  rural: 'Alojamiento rural',
  other: 'Otro',
};

var NEED_LABELS_ = {
  bookings: 'Conseguir más reservas',
  web: 'Tener una mejor página web',
  google: 'Aparecer mejor en Google',
  otas: 'Depender menos de las OTAs',
  organize: 'Organizar mejor mis reservas',
  whatsapp: 'Mejorar WhatsApp y atención',
  unsure: 'No estoy seguro / necesito orientación',
};

function doPost(e) {
  try {
    var body = JSON.parse((e.postData && e.postData.contents) || '');
    var properties = PropertiesService.getScriptProperties();
    var expectedToken = properties.getProperty('WEBHOOK_TOKEN');
    if (expectedToken && body.token !== expectedToken) {
      return json_({ success: false, message: 'Invalid request' });
    }
    if (!body || !body.name || !body.establishment || !body.whatsapp) {
      return json_({ success: false, message: 'Invalid request' });
    }

    var spreadsheetId = properties.getProperty('SPREADSHEET_ID');
    if (!spreadsheetId) {
      return json_({ success: false, message: 'Invalid request' });
    }
    var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName('Leads');
    if (!sheet) {
      return json_({ success: false, message: 'Invalid request' });
    }

    var needs = Array.isArray(body.needs) ? body.needs.join(', ') : '';
    sheet.appendRow([
      body.submittedAt || new Date().toISOString(),
      body.name,
      body.establishment,
      body.location || '',
      body.accommodationType || '',
      body.email || '',
      body.whatsapp,
      needs,
      body.note || '',
      body.source || 'website',
      body.language || '',
      body.page || '',
      body.referrer || '',
      body.utmSource || '',
      body.utmMedium || '',
      body.utmCampaign || '',
      'NUEVO',
      body.consent === true ? 'sí' : '',
      body.submissionId || '',
    ]);

    notify_(properties, spreadsheetId, body, sheet.getLastRow());

    return json_({ success: true, message: 'Lead received' });
  } catch (error) {
    return json_({ success: false, message: 'Invalid request' });
  }
}

function notify_(properties, spreadsheetId, body, rowNumber) {
  var to = String(properties.getProperty('NOTIFICATION_EMAIL') || '').trim();
  if (to.indexOf('@') === -1) return;

  try {
    MailApp.sendEmail({
      to: to,
      subject: 'Nuevo lead: ' + body.establishment,
      name: 'Andario Hospitality',
      htmlBody: emailHtml_(spreadsheetId, body, rowNumber),
    });
  } catch (error) {
    // The row is already saved. A mail failure must not reject the lead.
  }
}

function emailHtml_(spreadsheetId, body, rowNumber) {
  var sheetUrl = 'https://docs.google.com/spreadsheets/d/' + encodeURIComponent(spreadsheetId) + '/edit';
  var whatsappDigits = String(body.whatsapp || '').replace(/\D/g, '');
  var whatsappHref = whatsappDigits ? 'https://wa.me/' + whatsappDigits : '';
  var email = String(body.email || '').trim();

  return (
    '<div style="margin:0;padding:24px;background:#f4f1ea;font-family:Arial,sans-serif;color:#10212b;">' +
    '<div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;">' +
    '<div style="background:#10212b;color:#ffffff;padding:24px 28px;">' +
    '<div style="font-size:22px;font-weight:700;">Nuevo lead</div>' +
    '<div style="margin-top:6px;font-size:14px;opacity:0.85;">Andario Hospitality</div>' +
    '</div>' +
    '<div style="padding:28px;">' +
    '<p style="margin:0 0 24px;line-height:1.5;">Ha llegado un nuevo contacto desde el sitio web de Andario Hospitality.</p>' +
    '<h2 style="margin:0 0 12px;font-size:16px;">Información del contacto</h2>' +
    '<table style="width:100%;border-collapse:collapse;font-size:14px;">' +
    row_('Nombre', text_(body.name)) +
    row_('Alojamiento', text_(body.establishment)) +
    row_('Ubicación', text_(body.location || '—')) +
    row_('Tipo', text_(label_(TYPE_LABELS_, body.accommodationType))) +
    row_('Email', email ? link_('mailto:' + email, email) : '—') +
    row_('WhatsApp', whatsappHref ? link_(whatsappHref, body.whatsapp) : text_(body.whatsapp)) +
    row_('Necesidades', text_(needLabels_(body.needs))) +
    row_('Mensaje', text_(body.note || '—')) +
    '</table>' +
    '<h2 style="margin:28px 0 12px;font-size:16px;">Información del envío</h2>' +
    '<p style="margin:0 0 8px;font-size:14px;">Idioma: ' + text_(body.language || '—') + '</p>' +
    '<p style="margin:0 0 8px;font-size:14px;">Fuente: ' + text_(body.source || 'website') + '</p>' +
    '<p style="margin:0 0 8px;font-size:14px;">Página: ' + text_(body.page || '—') + '</p>' +
    '<p style="margin:0 0 24px;font-size:14px;">Fila: ' + text_(String(rowNumber)) + '</p>' +
    '<a href="' +
    sheetUrl +
    '" style="display:inline-block;background:#0e7c78;color:#ffffff;text-decoration:none;padding:12px 18px;border-radius:8px;font-weight:700;">Ver leads en Google Sheets</a>' +
    '<p style="margin:28px 0 0;font-size:12px;color:#5c6b73;">Este mensaje fue generado automáticamente por el sistema de leads de Andario Hospitality.</p>' +
    '</div></div></div>'
  );
}

function needLabels_(needs) {
  if (!Array.isArray(needs) || !needs.length) return '—';
  return needs
    .map(function (id) {
      return label_(NEED_LABELS_, id);
    })
    .join(', ');
}

function label_(map, id) {
  var key = String(id || '');
  return map[key] || key || '—';
}

function row_(label, valueHtml) {
  return (
    '<tr>' +
    '<td style="padding:8px 16px 8px 0;vertical-align:top;font-weight:700;width:140px;">' +
    text_(label) +
    '</td>' +
    '<td style="padding:8px 0;vertical-align:top;">' +
    valueHtml +
    '</td></tr>'
  );
}

function link_(href, label) {
  return '<a href="' + text_(href) + '" style="color:#0e7c78;">' + text_(label) + '</a>';
}

function text_(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
