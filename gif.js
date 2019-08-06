var buttonsArr = ["Fish","Crab","Eel"];

$(function(){
    addButtons(buttonsArr, 'searchButton', '#buttons-display')
})

function addButtons(buttonsArr, addClass, addToPage){
    $(addToPage).empty();
    for(var i=0; i<buttonsArr.length; i++)   {
        var j=$('<button>');
        j.text(buttonsArr[i]);
        j.attr('data-type',buttonsArr[i]);
        j.addClass(addClass);
        $(addToPage).append(j);
    }
}