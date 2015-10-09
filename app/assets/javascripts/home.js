/**
 * Created by laia on 25/9/15.
 */
var ready = function (){
    $index = 0,
        $items = $('.slideshow-item'),
        $lenght = $items.length;
    $('#rightButton').click( function(){ slideRight()});
    $('#leftButton').click( function(){ slideLeft()});
    console.log('document ready');
};

//We have to this fix because of turbolink gem that makes the application works as a single application page
$(document).on('page:load', ready);
$(document).ready(ready);

function slideRight(){

    if ($index < $lenght - 1) {
        var item = $items.eq($index);
        item.css('display', 'none');
        $index += 1;
        item = $items.eq($index);
        item.css('display', 'inline-block');
    }

}

function slideLeft(){
    if ($index > 0){
        var item = $items.eq($index);
        item.css('display','none');
        $index -= 1;
        item = $items.eq($index);
        item.css('display','inline-block');
    }
}

function autoslide(){

}