let obj = {
    
    name: 'alvi',

    print: function () {
       
        setTimeout(() => {
            console.log(this.name);
        }, 5000);
    }
}

obj.print()