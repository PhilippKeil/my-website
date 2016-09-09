var config = {};
config.window = $(window);
config.wWidth = config.window.width();
config.wHeight = config.window.height();

config.fac = 1.5;
config.t_lft_rght = 0.55*config.fac;
config.t_top_btm = 0.55*config.fac;
config.t_start_top_btm = 0.275*config.fac;
config.t_wait_left_rght = 0.275*config.fac;
config.rotation = 10; // 0 - 32 makes sense
config.offset = 150; // moves left and right element further to their side. needed because rotation causes the elements to be not moved far enough.

config.pageTrans = new TimelineMax({repeat:-1, repeatDelay: 1, yoyo:false});

config.pageTrans
// panel CLOSE
.fromTo('.btm-left',config.t_lft_rght, { x: -config.wWidth/2 }, { x: 0, ease: Power2.easeOut}, "f")
.fromTo('.top-right',config.t_lft_rght, { x: config.wWidth/2 }, { x: 0, ease: Power2.easeOut}, "f")
.fromTo('.top-left',config.t_lft_rght, { y: -config.wHeight }, { y: 0, ease: Power2.easeOut}, "f")
.fromTo('.btm-right',config.t_lft_rght, { y: config.wHeight }, { y: 0, ease: Power2.easeOut}, "f")

// panel DIVERGE
.fromTo('.btm-left', config.t_top_btm, { y: 0 }, { y: -config.wHeight/2, ease: Power2.easeIn}, "f+=" + config.t_start_top_btm)
.fromTo('.top-right', config.t_top_btm, { y: 0 }, { y: config.wHeight/2, ease: Power2.easeIn}, "f+=" + config.t_start_top_btm)

// ROTATION
.fromTo('#pagetransition', (config.t_start_top_btm + config.t_top_btm), { rotation: 0 }, { rotation: config.rotation, ease: Power2.easeOut}, "f")

// panel OPEN
.fromTo('.btm-left',config.t_lft_rght, { x: 0 }, { x: -config.wWidth/2 - config.offset, ease: Power2.easeIn}, "f+=" + (config.t_start_top_btm + config.t_top_btm + config.t_wait_left_rght))
.fromTo('.top-right',config.t_lft_rght, { x: 0 }, { x: config.wWidth/2 + config.offset, ease: Power2.easeIn}, "f+="+ (config.t_start_top_btm + config.t_top_btm + config.t_wait_left_rght))

// panel VANISH
.to('.top-left', 0, {opacity: 0}, 'f+=' + (config.t_start_top_btm + config.t_top_btm))
.to('.btm-right', 0, {opacity: 0}, 'f+=' + (config.t_start_top_btm + config.t_top_btm))

// logo POP
.fromTo('.brand-logo', config.t_lft_rght, { rotation: 0, scale: 0 }, { rotation: -config.rotation, scale: 1, ease: Back.easeOut}, "f")
.fromTo('.brand-logo', config.t_lft_rght, { rotation: -config.rotation, scale: 1 }, { rotation: 0, scale: 0, ease: Back.easeIn}, "f+=" + (config.t_start_top_btm + config.t_top_btm))
