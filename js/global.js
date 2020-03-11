
$(document).ready(function() {
    progressBar();
    showWelcomeMessage();
});

/**
 *  Aplica o efeito "fade in" na mensagem de bem-vindo
 *  na secção "hello"
 */
function showWelcomeMessage() {
    $("#hello h1.intro").addClass("fadeIn delay-1s animated");
    $("#hello h1.intro span").addClass("fadeIn delay-2s animated");
    $("#hello h1.first-name").addClass("fadeIn delay-3s animated");
    $("#hello h1.middle-name").addClass("fadeIn delay-3s animated");
    $("#hello h1.last-name").addClass("fadeIn delay-3s animated");
    $("#hello button").addClass("fadeIn delay-4s animated");
}

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
