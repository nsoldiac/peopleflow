/**
 * Created by brynamo on 10/19/14.
 */
//dropdown
/*
function DropDown(el) {
    this.dd = el;
    this.initEvents();
    }
DropDown.prototype = {
    initEvents : function() {
    var obj = this;

    obj.dd.on('click', function(event){
    $(this).toggleClass('active');
    event.stopPropagation();
    });
    }
    }

$(function() {

    var dd = new DropDown( $('#dd') );

    $(document).click(function() {
    // all dropdowns
    $('.wrapper-dropdown-2').removeClass('active');
    });

    });
*/
//end of dropdown

//jquery slider
$(function() {
    $('#va-accordion').vaccordion({
        expandedHeight	: 350,
        animSpeed		: 500,
        animEasing		: 'easeInOutBack',
        animOpacity		: 0.4
    });
});

$(function() {
    $('#va-accordion2').vaccordion({
        expandedHeight	: 350,
        animSpeed		: 500,
        animEasing		: 'easeInOutBack',
        animOpacity		: 0.4
    });
});
//end of slider

//start of menu

var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    showLeftPush = document.getElementById( 'showLeftPush' ),
    body = document.body;

showLeftPush.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( body, 'cbp-spmenu-push-toright' );
    classie.toggle( menuLeft, 'cbp-spmenu-open' );
    disableOther( 'showLeftPush' );
};

function disableOther( button ) {
    if( button !== 'showLeftPush' ) {
        classie.toggle( showLeftPush, 'disabled' );
    }
}