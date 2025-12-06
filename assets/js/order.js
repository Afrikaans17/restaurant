document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('order-form');
  if (!form) return;

  const msg = document.getElementById('order-message');
  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = form.querySelector('#name').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    const address = form.querySelector('#address').value.trim();
    const items = Array.from(form.querySelectorAll('select[name="items"] option:checked')).map(o => o.value);
    const notes = form.querySelector('#notes').value.trim();

    if (!name || !phone || !address) {
      showMessage('Por favor completa nombre, teléfono y dirección.', 'error');
      return;
    }

    if (items.length === 0) {
      showMessage('Selecciona al menos un plato.', 'error');
      return;
    }

    const order = {
      id: Date.now(),
      name,
      phone,
      address,
      items,
      notes,
      createdAt: new Date().toISOString()
    };

    // Simula envío
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    setTimeout(() => {
      // Guardar en localStorage (simulación)
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders.push(order);
      localStorage.setItem('orders', JSON.stringify(orders));

      showMessage('Pedido recibido correctamente. Te contactaremos para confirmar.', 'success');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar pedido';
      console.log('Pedido simulado:', order);
    }, 800);
  });

  function showMessage(text, type) {
    if (!msg) return;
    msg.textContent = text;
    msg.className = type === 'success' ? 'text-green-400' : 'text-red-400';
    msg.classList.add('font-medium');
  }
});
