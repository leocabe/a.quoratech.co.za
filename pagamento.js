'use strict';
// O envio escolhido na página 2 determina o destino do pagamento.
const PAYMENT_URLS = Object.freeze({
  '14,99 €': 'https://pay.trywalled.com/afee527d-ca88-4c73-912a-d899f104c49b',
  '17,99 €': 'https://pay.trywalled.com/332b282c-858b-4005-a5ae-7c34c08d3b9a',
  '22,99 €': 'https://pay.trywalled.com/70d1651a-9b16-40e5-b949-54ab5456ff6f'
});
const LEGAL_URLS = {terms: '', privacy: ''};
let order = null;
try { order = JSON.parse(sessionStorage.getItem('novaCardOrder') || 'null'); } catch (_) {}
const setText = (id, value) => { if (typeof value === 'string' && value.trim()) document.getElementById(id).textContent = value; };
if (order && typeof order === 'object') {
  setText('holder-name', order.name);
  setText('card-name', typeof order.name === 'string' ? order.name.toLocaleUpperCase('pt-PT') : '');
  setText('address', order.address);
  setText('delivery-date', order.deliveryDate);
  setText('shipping-name', order.shipping);
  setText('shipping-days', order.shippingDays);
  setText('shipping-price', order.shippingPrice);
  setText('button-price', order.shippingPrice);
  setText('credit', order.credit);
}
const paymentUrl = PAYMENT_URLS[order?.shippingPrice || '17,99 €'];
const dialog = document.getElementById('info-dialog');
function showInfo(title, message) {
  document.getElementById('dialog-title').textContent = title;
  document.getElementById('dialog-message').textContent = message;
  dialog.showModal();
}
document.getElementById('pay-button').addEventListener('click', () => {
  if (paymentUrl) window.location.assign(paymentUrl);
  else showInfo('Pagamento com MB WAY', 'O pagamento ainda não está configurado. Não foi efectuado qualquer débito.');
});
document.querySelectorAll('[data-legal]').forEach(button => button.addEventListener('click', () => {
  const url = LEGAL_URLS[button.dataset.legal];
  if (url) window.location.assign(url);
  else showInfo(button.textContent, 'Este documento ainda não foi disponibilizado.');
}));
