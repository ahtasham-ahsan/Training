// how to build an array
class My_Array {
    constructor(){
        this.length = 0;
        this.data = {};
    }
    get(index){
        return this.data[index];
    }
    set(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pip(){
        const last_item = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;

        return last_item;
    }
    del(index){
        const item = this.data[index];
        this.shift_items(index);
    }
    shift_items(index){
        for(let i=index; i<this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--; 
    }
}


const new_Array = new My_Array();
new_Array.set('Hello');
new_Array.set('Hi');
new_Array.set('Hellooo');
console.log(new_Array);

// console.log(new_Array.get(0));
new_Array.pip()
console.log(new_Array);
