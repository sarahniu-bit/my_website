function convertKgToLb() {
  const kg = document.getElementById('kgInput').value;
  const resultElement = document.getElementById('result');
  if (kg === '') {
    resultElement.textContent = 'Please enter a value.';
    return;
  }
  const lb = (kg * 2.20462).toFixed(2);
  resultElement.textContent = `${kg} kg = ${lb} lb`;
}
