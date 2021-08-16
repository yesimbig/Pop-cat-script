function performClick() {
    var e = new KeyboardEvent('keydown',{'keyCode':32,'which':32});
    setTimeout(function() {
        for(var i = 0; i< 200; i++) {
            document.dispatchEvent(e);
        }
        performClick();
    }, 0);
}

performClick();
