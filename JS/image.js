function imgClick (src) {
  console.log(src);
  window.open(src,'targetWindow', 'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1090px, height=550px, top=25px left=120px'); 
  return false;
}