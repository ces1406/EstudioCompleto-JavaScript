function menor5TiraErr(val1){
    try {
        if (val1<5){
            throw({msg:'error->valor menor a 5',codigo:1})
        }
        console.log('valor ok (mayor a 5)')
    } catch (error) {
        console.log('* ERROR *');
        console.log('codigo: ',error.codigo)
        console.log(error.msg);        
    }
}

function menor6TiraErr(val1){
    try {
        if (val1<6){
            throw new Error('valor menor a 6')//({msg:'error->valor menor a 5',codigo:1})
        }
        console.log('valor ok (mayor a 5)')
    } catch (error) {
        console.log('* ERROR *');
        console.log('codigo: ',error.codigo)
        console.log(error.msg); 
        console.log(error.message.msg); 
        console.log(JSON.stringify(error.message));  
        console.log(error.message);      
    }
}

menor5TiraErr(43);
menor5TiraErr(4);
menor6TiraErr(5);