class QueueDataStructure{
    constructor(){
    this.storage ={};
    this.end =0;
    this.front =0;
    }

remove(){

        let results = this.storage[this.front];
        delete this.storage[this.front];
        this.front < this.end &&this.front ++;
        return results;
    }

end(item){
    this.storage[this.end] = item;
    this.end++;
    
}
size(){
    return this.head - this.tail;
}
}
