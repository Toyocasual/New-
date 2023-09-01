(function() {

    function clickHandler(message) {
        console.log('hi ... ' + message);
    }
        //get a reference to mybutton
        let mybutton = document.getElementById('mybutton');
        mybutton.addEventListener('click', function() {clickHandler('hi from iife')});

})();