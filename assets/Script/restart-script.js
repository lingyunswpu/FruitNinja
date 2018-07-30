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
        _sceneLading:false,
        scoreLabel:cc.Label,
    },

    onLoad:function(){
        this.scoreLabel.string = "得分："+ window.score;
        this.node.on('touchstart',this.onTouchStart,this);
    },

    onTouchStart:function(){
        if(!this._sceneLading){
            this._sceneLading = true;
            cc.director.loadScene('main-scene');
        }
    }
});
