$(document).ready(function(){

	$('#en').hide()

	$("#lang_en").click(function () {
		$('#fr').hide(1000)
		$('#en').show("slow")
	})

	$("#lang_fr").click(function () {
		$('#en').hide(1000)
		$('#fr').show(1000)
	})

	var p1 = $('.page1').offset().top;
	var p2 = $('.page2').offset().top;
	var p3 = $('.page3').offset().top;
	var p4 = $('.page4').offset().top;
	var up = $('#haut').offset().top;

	$("#item1").click(function(){
		$("html,body").animate({scrollTop:p1},1000);
		return false;
	});

	$("#item2").click(function(){
		$("html,body").animate({scrollTop:p2},1000);
		return false;
	});

	$("#item3").click(function(){
		$("html,body").animate({scrollTop:p3},1000);
		return false;
	});

	$("#item4").click(function(){
		$("html,body").animate({scrollTop:p4},1000);
		return false;
	});

	$("#cRetour").click(function(){
		$("html,body").animate({scrollTop:up},1000);
		return false;
	});

});

$(function(){
    $(document).on('scroll',function(){ // Détection du scroll

        // Calcul de la hauteur "utile"
        var hauteur = $(document).height()-$(window).height()
        
        // Récupération de la position verticale
        var position = $(document).scrollTop()

        // Récupération de la largeur de la fenêtre
        var largeur = $(window).width()

        // Calcul de la largeur de la barre     
        var barre = position / hauteur * largeur
        
        // Modification du CSS pour élargir ou réduire la barre     
        $("#progress").css("width",barre)
    });
});

jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},10000);
	});
});