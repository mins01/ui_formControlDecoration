class FormControlDecoration{
    static instance = null;
    target = null;
    wrap = null;
    static getInstance(){
        if(!this.instance){
            this.instance = new this();
        }
        return this.instance;
    }
    static activate(){
        if(!globalThis.document){ console.log('globalThis.document is not exists.'); return;}
        const instance = this.getInstance();
        instance.addEventListener(globalThis.document)
        instance.initialize();
    }
    static deactivate(){
        this.getInstance().removeEventListener()
    }
    static sync(target){
        this.getInstance().setData(target);
    }




    constructor(target){
        this.target = target;
        this.target._$fcd = this;
        this.wrap = this.target.closest('.fcd-wrap');
        this.decos = this.wrap.querySelectorAll('.fcd-deco');
    }
    camelToDash(camel){
        return camel.replace(/[A-Z]/g, (c) => {"-" + c.toLowerCase()});
    }
    sync(){
        this.decos.forEach((el) => {
            el.innerText = this.target.getAttribute(el.dataset.fcdInnertext)
        });
    }
    
    

}
