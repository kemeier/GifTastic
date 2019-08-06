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

$(document).on('click', '.picture', function(){
    var state = $(this).attr('data-state');
    if (state === 'still'){
        $(this).attr('src', $(this).data('animated'));
        $(this).attr('data-state', 'animated')
    } else {
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }

})

$(document).on('click', '.searchButton', function() {
    var type = $(this).data('type');
    var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' +type+ '&api_key=FzdV4kNv5F3aHAu3WL4md2RsYEiKOPk4&limit=10';
    $.ajax({url:queryURL, method:'GET'})
    .done(function(output)    {
        for(var i=0; i<output.data.length; i++)  {
            var search = $('<div class="new-animal">');
            var animated = output.data[i].images.fixed_height.url;
            var still = output.data[i].images.fixed_height_still.url;
            var rating = output.data[i].rating;
            var ratingDisplay = $('<p>').text('Rating: ' +rating);
            var picture = $("<img>");
            picture.addClass('picture');
            search.append(ratingDisplay);
            search.append(picture);
            picture.attr('data-animated', animated);
            picture.attr('data-state', 'still');
            picture.attr('src', still);
            picture.attr('data-still', still);
            $('#additions').append(search);

        }
    })
})