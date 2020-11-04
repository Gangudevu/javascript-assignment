var objBooks = [ { book_id: 2314,title: 'My experiments with Truth',author: 'Mahatama Gandhi',status: false}, 
    {  
        book_id: 7864,  
        title: 'Origin of species',  
        author: 'Charles Darwin',  
        status: false  
    },  

    {  
        book_id: 1524,  
                title: 'Geetanjali',  
        author: 'Rabindra Nath Tagore',  
        status: true  
    },  
    {  
        book_id: 1524,  
                title: 'Geetanjali',  
        author: 'Rabindra Nath Tagore',  
        status: true  
    },  
    {  
        book_id: 0981,  
        title: 'Le Contract Social',  
        author: 'Jean Jacques Rousseau',  
        status: true  
    }];

    objBooks.sort((num1,num2)=>{
        return num1.book_id==num2.book_id?0:num1.book_id>num2.book_id?1:-1;
    });
    console.log("--- based on id order ---")
    console.log(objBooks);

    objBooks.sort((num1,num2)=>{
        return num1.title==num2.title?0:num1.title>num2.title?1:-1;
    });
    console.log("--- based on title order ---")
    console.log(objBooks);
    //var arr = [{ type_id: "3", full_empty: "true", quantity: 1 }, { type_id: "3", full_empty: "true", quantity: 1 }, { type_id: "9", full_empty: "true", quantity: 4 }, { type_id: "9", full_empty: "false", quantity: 4 }, { type_id: "9", full_empty: "true", quantity: 4 }, { type_id: "9", full_empty: "true", quantity: 4 }, { type_id: "9", full_empty: "true", quantity: 4 }],
    filtered = objBooks.filter(
        (temp => a =>
            (k => !temp[k] && (temp[k] = true))(a.book_id + '|' + a.title)
        )(Object.create(null))
    );
console.log("--- after removing duplicate elements ---");
console.log(filtered);
