const form = document.querySelector('form');
const fields = form.elements;
fields.protocolo.value = crypto.randomUUID();

const experiences = Array.from(form.querySelectorAll('[name="vivencia"]'));
const none = experiences.find(field => field.value === 'nenhuma');
function validateResearch() {
  const selected = experiences.filter(field => field.checked);
  fields.pesquisa.required = selected.length > 0;
  none.setCustomValidity(none.checked && selected.length > 1
    ? 'Selecione “Nenhuma dessas situações” sozinha ou desmarque essa opção.' : '');
}
form.addEventListener('change', validateResearch);
form.addEventListener('invalid', event => {
  const section = event.target.closest('details');
  if (section) section.open = true;
}, true);
window.addEventListener('pageshow', validateResearch);
