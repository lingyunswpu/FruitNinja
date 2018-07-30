cc.Class({
    extends: cc.Component,

    properties: {
        _sceneLoading:false,
        scoreLabel:cc.Label,
    },

    // use this for initialization
    onLoad: function () {
        this.node.on('hit-bad-soap',this.onHitBadSoap,this)
    },

    // called every frame
    onHitBadSoap:function(){
        if(!this._sceneLoading){
            this._sceneLoading = true;
            window.score = this.scoreLabel.string;
            cc.director.loadScene('game-over-scene');
        }
    },

});
