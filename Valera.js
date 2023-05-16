//nav burgur menu start//
var menubar = document.querySelector('.header .icon #menu-bars');
var navbar = document.querySelector('.header .navbar');

menubar.onclick=()=>{
    menubar.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

//nav burgur menu end//




//頂部頁簽-section對應 start//
var section=document.querySelectorAll("section");
var navlinks=document.querySelectorAll(".header .navbar a");

window.onscroll = () => {
    menubar.classList.remove('fa-xmark');
    navbar.classList.remove('active');

    section.forEach(sec=>{

        var top = window.scrollY;
        var height = sec.offsetHeight;
        var offset = sec.offsetTop - 550;
        var id = sec.getAttribute('id');

        if(top >= offset && top < height+offset){

            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('.header .navbar a[href*='+id+']').classList.add('active');
            });
    };
});

}
//頂部頁簽-section對應 end//





//works label
var workpages = document.querySelectorAll('#works .workpage')
var labelcontain = document.querySelector('#works .label')
var labelitem = document.querySelectorAll('#works .label .content');
var labelitemli = document.querySelectorAll('#works .label .content ul li');

labelitem.forEach(lbitem=>{

    lbitem.onclick=()=>{

        labelitem.forEach(lbitemclose=>{
            lbitemclose.classList.remove('active');
        });
        
        // labelitemli.forEach(lbliclose=> {
        //     lbliclose.classList.remove('active');
        // });

        labelcontain.style.scale='1';
        // labelitem.classList.remove('active');
        lbitem.classList.toggle('active');
        // labelcontain.style.opacity='0.7';
        labelcontain.style.scale='0.9';
    };
});


labelitemli.forEach(lbli=>{
    var id=lbli.getAttribute('target');



    lbli.onclick=()=>{

        labelitemli.forEach(lbliclose=> {
            lbliclose.classList.remove('active');
        });

        labelitem.forEach(lbitemclose=>{
            lbitemclose.classList.remove('active');
        });

        workpages.forEach(wpclose=>{
            wpclose.classList.remove('active');
        })

        lbli.classList.add('active');


        var workslidepage = document.querySelector('#'+id+'');
        var workslideloca = document.querySelector('#works .label').offsetTop + document.querySelector('#works .label').offsetHeight + window.outerHeight-200;

        console.log(workslideloca);

        workslidepage.classList.add('active');
        document.documentElement.scrollTop = workslideloca;



        // workpages.forEach(sliconloca=>{
        //     var scloca = sliconloca.offsetTop + sliconloca.offsetHeight;

        //     document.documentElement.scrollTop = scloca;
        // })


    };
});



//work slide
var swiper = new Swiper(".workslide ", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
//


function workslide(id,bt,lb1,lb2,lb3){
    var workslidebt = document.querySelectorAll('#works .workpage button');
    var worksslideall = document.querySelectorAll('.swiper');
    var breadcrumbs = document.querySelectorAll('#works .workpage .breadcrumbs');

    workslidebt.forEach(wsbt=>{
        wsbt.classList.remove('active');
    });

    worksslideall.forEach(wsall=>{
        wsall.classList.remove('active');
    });

    bt.classList.add('active');
    id.classList.add('active');

    // breadcrumbs.forEach(bc=>{
    //     bc.innerHTML= lb1 + '  > ' + lb2 + '  >  ' + lb3;

    // })


}; 



