var config = {};
config.window = $(window);
config.wWidth = config.window.width();
config.wHeight = config.window.height();

config.t = 1;
config.t2 = 3;
config.e = Power2.easeOut;
config.e2 = Power2.easeIn;

config.pageTrans = new TimelineMax({repeat:-1, repeatDelay: 0, yoyo:true});

config.pageTrans
.fromTo('.top-right',config.t, { x: config.wWidth/2 }, { x: 0, ease: config.e}, "f")
.fromTo('.btm-left',config.t, { x: -config.wWidth/2 }, { x: 0, ease: config.e}, "f")
.fromTo('.top-left',config.t, { y: -config.wHeight }, { y: 0, ease: config.e}, "f")
.fromTo('.btm-right',config.t, { y: config.wHeight }, { y: 0, ease: config.e}, "f")
.fromTo('.btm-left', config.t2, { y: 0 }, { y: -config.wHeight/2, ease: config.e2}, "f+=.8")
.fromTo('.top-right', config.t2, { y: 0 }, { y: config.wHeight/2, ease: config.e2}, "f+=.8")
.fromTo('#pagetransition', 2.5, { rotation: 0 }, { rotation: 10, ease: config.e}, "f")
.fromTo('.vic-gb', .8, { rotation: 0, scale: 0 }, { rotation: -10, scale: 1, ease: Back.easeOut}, "f+=.6")
