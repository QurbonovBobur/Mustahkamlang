

const asosiy = document.querySelector(".asosiy");
const test = document.querySelector(".test");
const asosiy_savol = document.querySelector('.asosiy_savol');
const savol_matni = document.querySelector(".savol_matni");
const variantlar = document.querySelector(".variantlar");
const tug_keyingi = document.querySelector(".tug_keyingi");
const tug_tugat = document.querySelector(".tug_tugat");
// Natijalar
const natija_asosiy = document.querySelector(".natija_asosiy")
const natija = document.querySelector(".natija")
const ortga_qaytish = document.querySelector(".ortga_qaytish")

//asosiy.style.display="none";
asosiy_savol.style.display="none";
natija_asosiy.style.display="none";
//asosiy.style.display="none";
let savol_raqami = 1;
let variant = biotest001[savol_raqami-1].variant
var natija_foy = 0;

function savol_u() {
  savol_matni.innerHTML = String(savol_raqami) + "." + biotest001[savol_raqami-1].savol;
  
  variantlar.innerHTML = "<div class='variant_tan'>" + biotest001[savol_raqami-1].variant[0] + "</div>" + "<div class='variant_tan'>" + biotest001[savol_raqami-1].variant[1] + "</div>" + "<div class='variant_tan'>" + biotest001[savol_raqami-1].variant[2] + "</div>";
  
  //Natija joyi
  variant_tan_bar = document.querySelectorAll(".variant_tan");
  //variant_tan = document.querySelector(".variant_tan");
  
    
  //for (i=0; i<variant_tan_bar.length; i++){
    variant_tan_bar.forEach(variant_tanl => {
      variant_tanl.addEventListener("click", () => {
        if (variant_tanl.textContent == biotest001[savol_raqami-1].javob){
          natija_foy ++;
        };
          
        tanlangan(variant_tanl);
        
      });
    });
  //};
  
};

function tanlangan(javob){
  let javob_foy = javob.textContent;
  let javob_togri = biotest001[savol_raqami-1].javob;
  let variant_soni = variant_tan_bar.length;
  
  if (javob_foy == javob_togri){
    
    javob.classList.add("togri");
    javob.classList.add("disabled");
    
  }else{
    javob.classList.add("notogri");
    
    for(i=0; i<variant_tan_bar.length; i++){
      if(variant_tan_bar[i].textContent == javob_togri){
      variant_tan_bar[i].setAttribute("class", "variant_tan togri");
      variant_tan_bar[i].classList.add("disabled");
      }else{
        variant_tan_bar[i].setAttribute("class", "variant_tan notogri");
      };
    };
  };
};

test.addEventListener("click", () => {
  asosiy.style.display="none";
  asosiy_savol.style.display="block";
  savol_raqami = 1;
  savol_u();
  
});

function boshlash(){
  natija_asosiy.style.display="none";
  asosiy_savol.style.display="none";
  asosiy.style.display='block';
  
};
function tugatish(){
  asosiy_savol.style.display="none";
  asosiy.style.display='none';
  natija_asosiy.style.display="block";
  
  natija.innerHTML = natija_foy;
}
tug_tugat.addEventListener("click", ()=> {
  tugatish();
  natija_foy = 0;
});
ortga_qaytish.addEventListener("click", ()=> {
  boshlash();
})

tug_keyingi.addEventListener("click", ()=> {
  savol_raqami += 1;
  if (savol_raqami < 16){
    savol_u();
  }else{
    tugatish();
  };
});




