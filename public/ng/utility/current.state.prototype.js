String.prototype.currentState= String.prototype.currentState || function(){
    return this.replace(/[.]/g , ' > ');
};