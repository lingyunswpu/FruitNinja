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
        itemPrefabArray:[cc.Prefab],
        speed:400,
        g:-120,
        deltaNum:0.2,
        currentNum:1,
        delay:3,
        spriteWait:cc.SpriteFrame,
        spriteExec:cc.SpriteFrame,

    },

    throwAnim:function(){
        this.getComponent(cc.Sprite).SpriteFrame = this.spriteExec;
        this.scheduleOnce(function(){
            this.getComponent(cc.Sprite).SpriteFrame = this.spriteWait;
        }.bind(this),0.3);
    },

    onLoad:function(){
        this.generate();
        this.schedule(this.generate,this.delay);
    },

    generate:function(){
        this.throwAnim();
        this.currentNum += this.deltaNum;
        let realCurrentNum  = Math.floor(this.currentNum);
        for(let i = 0; i < realCurrentNum; i++){
            let randomIdx = Math.random() > 0.5 ? 0:1;
            let item = cc.instantiate(this.itemPrefabArray[randomIdx]);
            let randomVector = cc.pNormalize(cc.v2(cc.randomMinus1To1() * 0.35,1));
            item.parent = this.node.parent;
            item.position = this.node.position;
            item.getComponent('throw-item-script').init(cc.pMult(randomVector,this.speed),this.g);
            item.zIndex = this.node.zIndex -1;
        }
    },

});
