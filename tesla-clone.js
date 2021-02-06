var drawer = document.querySelector('.drawerBtn');
var drawerWrapper = document.querySelector('.drawerWrapper');
var drawerSection = document.querySelector('.drawerSection');
var dummyBtn = document.querySelector('.dummyDrawerBtnWrapper')
var bod = document.querySelector('.bodySection');
var xBtn =document.querySelector('.xBtn');
drawer.addEventListener('click',(e)=>{
    e.preventDefault()
    drawer.classList.toggle('active-one');
    drawerWrapper.classList.toggle('drawerWrapperdisplay');
    drawerSection.classList.toggle('drawerSectiondisplay');
    bod.classList.toggle('bodySectionOverflow');
    drawerIncident()

});
function drawerIncident(){
    bc1.classList.remove('bc1display');
    bc2.classList.add('bc2display');
    bc3.classList.add('bc3display');
    bc4.classList.add('bc4display');
    bc5.classList.add('bc5display');
    bc6.classList.add('bc6display');
    bc7.classList.add('bc7display');
}

    // dummyBtn.addEventListener('click',drawerClick);
var logo = document.querySelector('.logo');
var hov = document.querySelector('.hovtext');
 var bodyContent = document.querySelector('.bodyContent');
 var bodyContentAll= document.querySelectorAll('.bodyContent');
 var container = document.querySelector('.container');
var child1 = document.querySelector('.child1')
var child2 = document.querySelector('.child2');
var child3 = document.querySelector('.child3');
var child4 = document.querySelector('.child4');
var child5 = document.querySelector('.child5');
var child6 = document.querySelector('.child6');
var child7 = document.querySelector('.child7');
var bc1 = document.querySelector('.bc1')
var bc2 = document.querySelector('.bc2');
var bc3 = document.querySelector('.bc3');
var bc4 = document.querySelector('.bc4');
var bc5 = document.querySelector('.bc5');
var bc6 = document.querySelector('.bc6');
var bc7 = document.querySelector('.bc7');



 child1.addEventListener('mouseout',(e)=>{

    bc1.classList.add('bc1display');
     child1.addEventListener('mouseover',()=>{
        bc1.classList.remove('bc1display')
     })
 });

 child2.addEventListener('mouseover',(e)=>{


      bc2.classList.add('bc2display');
    child2.addEventListener('mouseout',()=>{
       bc2.classList.remove('bc2display')
   })

});

 child3.addEventListener('mouseover',()=>{
     
     bc3.classList.add('bc3display');
     child3.addEventListener('mouseout',()=>{
         
        bc3.classList.remove('bc3display')
     })
 });

 child4.addEventListener('mouseover',()=>{
     
     bc4.classList.add('bc4display');
     child4.addEventListener('mouseout',()=>{
        bc4.classList.remove('bc4display')
     })
 });
 child5.addEventListener('mouseover',()=>{
     
    bc5.classList.add('bc5display');
    child5.addEventListener('mouseout',()=>{
       bc5.classList.remove('bc5display')
    })
});
child6.addEventListener('mouseover',()=>{
     
    bc6.classList.add('bc6display');
    child6.addEventListener('mouseout',()=>{
       bc6.classList.remove('bc6display')
    })
});
child7.addEventListener('mouseover',()=>{
     
    bc7.classList.add('bc7display');
    child7.addEventListener('mouseout',()=>{
       bc7.classList.remove('bc7display')
    })
});


