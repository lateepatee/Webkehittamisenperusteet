// index.js
// Author: Lauri Tuikka
// Date: 2025-11-07


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const tableBody = document.getElementById("timetable").querySelector("tbody");
  const errorsContainer = document.getElementById("formErrors");
  const hiddenTs = document.getElementById("timestamp");

  
  function formatTimestamp(date) {
    return new Date(date).toLocaleString();
  }

 
  function validateName(value) {
    const v = value.trim();
    if (!v) return 'Koko nimi vaaditaan.';
    const parts = v.split(/\s+/).filter(Boolean);
    if (parts.length < 2) return 'Syötä koko nimesi (etunimi sukunimi).';
    for (const p of parts) {
      if (p.length < 2) return 'Etunimi sekä sukunimi molempiin vähintään kaksi kirjainta';
    }
    return null;
  }

  function validateEmail(value) {
    const v = value.trim();
    if (!v) return 'Sähköposti vaaditaan.';
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(v)) return 'Anna toimiva sähköpostiosoite.';
    return null;
  }

  function validatePhone(value) {
    const v = value.trim();
    if (!v) return 'Puhelinnumero vaaditaan.';
    const digits = v.replace(/[^0-9]/g, '');
    if (digits.length < 7) return 'Puhelinnumerossa täytyy olla vähintään 7 numeroa.';
    return null;
  }

  function validateBirthdate(value) {
    if (!value) return 'Syntymäaika vaaditaan.';
    const bd = new Date(value + 'T00:00:00');
    if (Number.isNaN(bd.getTime())) return 'Syntymäaika ei kelpaa.';
    const today = new Date();
    if (bd > today) return 'Syntymäaika ei voi olla tulevaisuudessa.';
   
    const age = today.getFullYear() - bd.getFullYear() - (today < new Date(today.getFullYear(), bd.getMonth(), bd.getDate()) ? 1 : 0);
    if (age < 18) return 'Täytyy olla vähintään 18-vuotias.';
    return null;
  }

  function validateTerms(checked) {
    if (!checked) return 'Hyväksy ehdot jatkaaksesi.';
    return null;
  }

  function showErrors(messages) {
    errorsContainer.innerHTML = '';
    if (!messages || messages.length === 0) return;
    const ul = document.createElement('ul');
    ul.style.margin = '0';
    ul.style.paddingLeft = '1.2rem';
    messages.forEach(msg => {
      const li = document.createElement('li');
      li.textContent = msg;
      ul.appendChild(li);
    });
    errorsContainer.appendChild(ul);
  }

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    errorsContainer.textContent = '';

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const birthdate = document.getElementById('birthdate').value;
    const termsChecked = document.getElementById('terms').checked;

    
    const messages = [];
    const nameErr = validateName(fullName);
    if (nameErr) messages.push(nameErr);
    const emailErr = validateEmail(email);
    if (emailErr) messages.push(emailErr);
    const phoneErr = validatePhone(phone);
    if (phoneErr) messages.push(phoneErr);
    const birthErr = validateBirthdate(birthdate);
    if (birthErr) messages.push(birthErr);
    const termsErr = validateTerms(termsChecked);
    if (termsErr) messages.push(termsErr);

    if (messages.length > 0) {
      showErrors(messages);
     
      if (nameErr) document.getElementById('fullName').focus();
      else if (emailErr) document.getElementById('email').focus();
      else if (phoneErr) document.getElementById('phone').focus();
      else if (birthErr) document.getElementById('birthdate').focus();
      return;
    }

   
    const now = new Date();
    hiddenTs.value = now.toISOString();

    const row = document.createElement('tr');

    const tsCell = document.createElement('td');
    tsCell.textContent = formatTimestamp(hiddenTs.value);
    row.appendChild(tsCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = fullName.trim();
    row.appendChild(nameCell);

    const emailCell = document.createElement('td');
    emailCell.textContent = email.trim();
    row.appendChild(emailCell);

    const phoneCell = document.createElement('td');
    phoneCell.textContent = phone.trim();
    row.appendChild(phoneCell);

    const birthCell = document.createElement('td');
    birthCell.textContent = birthdate;
    row.appendChild(birthCell);

    const acceptedCell = document.createElement('td');
    acceptedCell.textContent = termsChecked ? 'Yes' : 'No';
    row.appendChild(acceptedCell);

    tableBody.appendChild(row);

   
    form.reset();
    hiddenTs.value = '';
    errorsContainer.textContent = '';
    document.getElementById('fullName').focus();
  });

  
  form.addEventListener('input', () => {
    if (errorsContainer.textContent) errorsContainer.textContent = '';
  });
});