var config = {};
config.window = $(window);
config.wWidth = config.window.width();
config.wHeight = config.window.height();

config.t_lft_rght = 0.55;
config.t_top_btm = 0.55;
config.t_start_top_btm = 0.275;
config.t_wait_left_rght = 0.275;
config.rotation = 20;

config.pageTrans = new TimelineMax({repeat:-1, repeatDelay: 1, yoyo:false});

config.pageTrans
// panel CLOSE
.fromTo('.btm-left',config.t_lft_rght, { x: -config.wWidth/2 }, { x: 0, ease: Power2.easeOut}, "f")
.fromTo('.top-right',config.t_lft_rght, { x: config.wWidth/2 }, { x: 0, ease: Power2.easeOut}, "f")
.fromTo('.top-left',config.t_lft_rght, { y: -config.wHeight }, { y: 0, ease: Power2.easeOut}, "f")
.fromTo('.btm-right',config.t_lft_rght, { y: config.wHeight }, { y: 0, ease: Power2.easeOut}, "f")

// panel diverge top, bottom
.fromTo('.btm-left', config.t_top_btm, { y: 0 }, { y: -config.wHeight/2, ease: Power2.easeIn}, "f+=" + config.t_start_top_btm)
.fromTo('.top-right', config.t_top_btm, { y: 0 }, { y: config.wHeight/2, ease: Power2.easeIn}, "f+=" + config.t_start_top_btm)

// rotation
.fromTo('#pagetransition', (config.t_start_top_btm + config.t_top_btm), { rotation: 0 }, { rotation: config.rotation, ease: Power2.easeOut}, "f")

// panel OPEN
.fromTo('.btm-left',config.t_lft_rght, { x: 0 }, { x: -config.wWidth/2, ease: Power2.easeIn}, "f+=" + (config.t_start_top_btm + config.t_top_btm + config.t_wait_left_rght))
.fromTo('.top-right',config.t_lft_rght, { x: 0 }, { x: config.wWidth/2, ease: Power2.easeIn}, "f+="+ (config.t_start_top_btm + config.t_top_btm + config.t_wait_left_rght))
.fromTo('.top-left',config.t_lft_rght, { y: 0 }, { y: -config.wHeight, ease: Power2.easeIn}, "f+="+ (config.t_start_top_btm + config.t_top_btm + config.t_wait_left_rght))
.fromTo('.btm-right',config.t_lft_rght, { y: 0 }, { y: config.wHeight, ease: Power2.easeIn}, "f+="+ (config.t_start_top_btm + config.t_top_btm + config.t_wait_left_rght))
// logo
.fromTo('.brand-logo', config.t_lft_rght, { rotation: 0, scale: 0 }, { rotation: -config.rotation, scale: 1, ease: Back.easeOut}, "f")
.fromTo('.brand-logo', config.t_lft_rght, { rotation: -config.rotation, scale: 1 }, { rotation: 0, scale: 0, ease: Back.easeIn}, "f+=" + (config.t_start_top_btm + config.t_top_btm))

// 110 BPM ---> 0.55sec
// 0.55 / 1.1 / 1.65
