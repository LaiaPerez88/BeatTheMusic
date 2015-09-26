/**
 * Created by laia on 25/9/15.
 */
$(document).ready( function(){
    //set all functions and variables need
    $index = 0;

    $('#rightButton').click( function(){ slideRight($index,2)});
    $('#leftButton').click( function(){ slideLeft($index,2)});
});


function slideRight(i,max){

    if (i < max) {
        var current = $('#item-'+i);
        $index = i + 1;
        var next = $('#item-' + $index);

        //current.css('opacity', 0);
        current.css('top', '0px');
        current.css('left',-540);
        next.css('position', 'absolute');
        next.css('top', '0px');
        next.css('left', '0px');

    }
    else{
        $index = 0;
    }

}

function slideLeft(i){


}