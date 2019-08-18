class StackDataStructure{
    constructor(){
      this.properties ={};
      this.size =0;
    }
    add(x){
      this.properties.slice(0,8);
      this.properties.push(x);
      this.size++;
    }
    pop(){
      this.size && this.size--;
      return this.properties.pop();
      
    }
    getSize(){
      return this.size;
    }
  }

  