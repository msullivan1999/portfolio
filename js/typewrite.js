var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.lineDone = false;
};

TxtType.prototype.tick = function() {
    lineNo = 0
    var fullTxt = this.toRotate[0];

    if (this.lineDone) {
        lineNo++
        lineDone = false
    } 
    else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<h1>'+this.txt+'</h1>';

    var that = this;
    var delta = 200 - Math.random() * 200;

    if (!this.lineDone && this.txt === fullTxt) {
        this.lineDone = true;
        lineNo++;
        

    } 

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};