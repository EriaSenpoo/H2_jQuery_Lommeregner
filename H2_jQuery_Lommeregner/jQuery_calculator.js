function number(num) {
    $('.history').val($('history').val() + num);
}

function operator(symbol) {
    $(".history").val($(".history").val() + symbol);
}

function equals() {
    $('.history').val(eval($('.history').val())); 
}

function clear_everything() {
    $('.history').val('')
}
