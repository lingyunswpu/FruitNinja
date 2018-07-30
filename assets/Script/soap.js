
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
        g:-10,
        _speed:null,
        _points:null,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    init:function(initSpeed){
        this._speed = initSpeed;
        this._points = this.getComponet(cc.PolygonCollider).points;
        cc.find('Canvas').on('touchstart',this.onTouchStart,this);
    },

    onTouchStart:function(e){

    }


    // update (dt) {},
});
