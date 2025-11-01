class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }   
}
class Book extends Item {
    constructor(name, price, quantity, author) {
        super(name, price, quantity);  
        this.author = author;
    }
}

class Electronics extends Item {
    constructor(name, price, quantity, brand) {
        super(name, price, quantity);  
        this.brand = brand;
    }   
}

class Inventory {
    static db = [];
    static itemCount = 0;

    static addItem(item) {
        Inventory.db.push(item);
        Inventory.itemCount++;
    }
    static getItemCount() {
        return Inventory.itemCount;
    }
    static getElectonicsCount() {
        const electronics = Inventory.db.filter(n => n.hasOwnProperty('brand')); 
        let count = 0;
        electronics.forEach(n => {
            count += n.quantity;    
        })
        return count;
    }
    static removeItem(itemName) {
        Inventory.db = Inventory.db.filter(n => n.name !== itemName);
    }
}

Inventory.addItem(new Book("The Great Gatsby", 10.99, 3, "F. Scott Fitzgerald"));
Inventory.addItem(new Electronics("Smartphone", 699.99, 5, "TechBrand"));

console.log(Inventory.db);
//console.log(Inventory.getElectonicsCount());
Inventory.removeItem("The Great Gatsby");
console.log(Inventory.db);
//added some changes