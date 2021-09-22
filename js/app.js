$(function() {


    /* MODAL
    ===========================================*/

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function(event){
        event.preventDefault();
    
        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function() {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

    })

    modalClose.on("click", function(event){
        event.preventDefault();
    
        let $this = $(this);
        let modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });
        
        setTimeout(function() {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    })

    $(".modal").on("click", function(event){
        let $this = $(this);
        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
        
    })

    $(".modal__dialog").on("click", function(event){
        event.stopPropagation();
    })


    /* Mobile nav
    ===========================================*/

    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });

    /* СЛОМАНО
    $("body").on("touchstart", function(event){
        event.preventDefault();

        nav.removeClass("show");
        
    })

    $("#nav,.nav show").on("click", function(event){
        event.stopPropagation();
    })
    */

    /* Navigation
    ===========================================*/

    $(document).ready(function(){
        $("#nav").on("click","a", function (event) {
          event.preventDefault();
          
          var id  = $(this).attr('href'),
          
          top = $(id).offset().top;
          
          $('body,html').animate({scrollTop: top}, 1500);

          nav.removeClass("show");
        });
      });

    
      $(document).ready(function(){
        $("#navi").on("click","a", function (event) {
          event.preventDefault();
          
          var id  = $(this).attr('href'),
          
          top = $(id).offset().top;
          
          $('body,html').animate({scrollTop: top}, 1500);

          nav.removeClass("show");
        });
      });
      


    
        
})