function startTabs() {
  let tab = document.querySelectorAll(".tab-item");
  tab = [...tab];

  tab.forEach((item) => {
    item.addEventListener("click", function () {
      clearHeight(tab);
      this.classList.toggle("active");
      let panel = this.querySelector(".tab__content");
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  function clearHeight(items) {
    items.map((item) => {
      item.classList.remove("active");
      let panel = item.querySelector(".tab__content");
      panel.style.maxHeight = null;
    });
  }
}

startTabs();

function startSlider(){
    let nav = document.querySelector('.slider-nav');
    let a = nav.previousElementSibling.childElementCount;    
    let sliderCount = 0;
    nav.addEventListener('click', function(e){

        if(e.target.classList.contains('slider-nav__prew')){
            if(sliderCount == 0 &&  sliderCount != a - 1 || sliderCount > 0 && sliderCount != a - 1){
                nav.previousElementSibling.style.transform +='translate(-695px,0)';
                sliderCount++;                
            }
        }         
        else if(e.target.classList.contains('slider-nav__next')){
            if(sliderCount > 0){
                nav.previousElementSibling.style.transform +='translate(695px,0)';
                sliderCount--;                
            }
        }
    })
}

startSlider()

function startMobMenu(){
  let gamburger = document.querySelector('.gamburger-menu');
  let navMob = document.querySelector('.nav__mobile');
  gamburger.addEventListener('click', function(){
    navMob.classList.toggle('active');
    

    if (navMob.style.maxHeight) {
      navMob.style.maxHeight = null;
    }else{
      navMob.style.maxHeight = navMob.scrollHeight + "px";
    }
    
  })
}

startMobMenu()