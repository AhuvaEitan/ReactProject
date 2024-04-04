export function addProduct(product){
    return { type: 'addProductToList', payload: product }
}

export function removeProduct(productId){
    return { type: 'removeProductFromList', payload: productId }
}
export function editProduct(productId, product){
    return { type: 'editProduct', payload: productId, product }
}


