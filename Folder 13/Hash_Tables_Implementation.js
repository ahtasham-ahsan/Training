class Hash_Table{
    constructor(size){
        this.data = new Array (size)
    }

    _Hash(key){
        let hash = 0;
        for(let i = 0 ; i < key.length ; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
            // console.log(hash)
        }
        return hash
    }
    set(key, value){
        let address = this._Hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key){
        let address = this._Hash(key);
        const current_Bucket = this.data[address];
        console.log(current_Bucket);
        if(current_Bucket){
            for (let i = 0; i < current_Bucket.length; i++) {
                if(current_Bucket[i][0] === key){
                    return current_Bucket[i][1];
                }                
            }
        }
        return undefined;
    }

    keys(){
        const keys_array = [];
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]){
                keys_array.push(this.data[i][0][0]);
            }            
        }
        return keys_array;
    }
}

const my_Hash_Table = new Hash_Table(50);

console.log(my_Hash_Table._Hash('grapes'));



my_Hash_Table.set('grapes', 1000);
my_Hash_Table.set('apples', 54);
my_Hash_Table.set('oranges', 12);
my_Hash_Table.set('pineapples', 2);
my_Hash_Table.set('peaches', 4);
// console.log(my_Hash_Table.get('grapes'));
// console.log(my_Hash_Table.get('apples'));

console.log(my_Hash_Table.keys());
