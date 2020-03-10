
$(document).ready(function() {
    progressBar();
});

$(window).scroll(function () {
    
    console.log('teste');

});

/**
 *  Atribui a largura desejada nas barras de progresso
 *  de acordo com o valor no atributo "percentage"
 */
function progressBar() {

    $(".progress-bar").map(function() {
        var percentage = $(this).attr("percentage") + "%";
        $(this).find("div").css("width", percentage);
    }); 

}
