// window.addEventListener('scroll', iscrol );



//某段時間執行一次
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  window.addEventListener('scroll', debounce(slideCheck, 30));


const C = document.querySelectorAll('.slide-in');

function slideCheck() {
    C.forEach((image) => {
        //圖片一半高的位置
        const slideInAt = image.offsetTop + image.height / 2;
        const isShown = window.scrollY + window.innerHeight >= slideInAt;
        if (isShown) {
            image.classList.add('active');
        }
    });
}