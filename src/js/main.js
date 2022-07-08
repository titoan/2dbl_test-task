function startTabs() {
  let tab = document.querySelectorAll(".tab-item");
  tab = [...tab]

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

  function clearHeight(items){
    items.map(item => {
        item.classList.remove('active');
        let panel = item.querySelector(".tab__content");
        panel.style.maxHeight = null;
    })
  }
}



startTabs();