// const sKey = {};
// const items = new WeakMap();

class Stack {
    constructor() {
    //    items.set(sKey, [])
    this.items = [];
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    pop() {
        if(this.items.length == 0)
            return undefined;
        return this.items.pop();
        
    }

    push(data) {
        this.items.push(data);
    }

    size() {
        return this.items.length;
    }

}
