// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        motion:cc.MotionStreak,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function () {
        cc.find('Canvas').on('touchmove',this.onTouchMove,this);

    },

    onTouchMove:function(){
        this.node.position = this.node.parent.coverToNodeSpaceAR(e.getLocation())
    },

    // update (dt) {},
});
