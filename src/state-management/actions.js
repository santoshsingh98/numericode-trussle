export function encoder(state){
    const elems = state.split(" ");
    const decodedStr = elems.map((element) => {return getCharByCode(parseInt(element))})
    return `${decodedStr.join("").toUpperCase()}`
}

function getCharByCode(code){
    if(code > 27){
        return getCharByCode(code/27);
    }else if(code < 27 && (code % 1 === 0)){
        console.log("into last part",code )
        return String.fromCharCode(96+code);
    }else{
        return ' '
    }
}