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
        label:cc.Label,
        _num:0,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad:function () {
         this.label.string = this._num;
         cc.find('Canvas').on('hit-good-soap',this.onHitGoodSoap,this);
     },

     onHitGoodSoap:function(){
         this._num += 10;
         this.label.string = this._num;
     },

    // update (dt) {},
});
