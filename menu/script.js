function c(categoryId) {
  document.getElementById('all-container').style.display = 'none';
  document.getElementById('breakfast-container').style.display = 'none';
  document.getElementById('lunch-container').style.display = 'none';
  document.getElementById('shakes-container').style.display = 'none';
  document.getElementById('dinner-container').style.display = 'none';

  if (categoryId === '0') {
      document.getElementById('all-container').style.display = 'flex';
  } else if (categoryId === '1') {
      document.getElementById('breakfast-container').style.display = 'flex';
  } else if (categoryId === '2') {
      document.getElementById('lunch-container').style.display = 'flex';
  }else if (categoryId === '3') {
      document.getElementById('shakes-container').style.display = 'flex';
  }else if (categoryId === '4') {
      document.getElementById('dinner-container').style.display = 'flex';
  }


}
c('0');