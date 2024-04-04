export function initUserPersonalDetails(personalDetails){
    return { type: 'initUserPersonalDetails', payload: personalDetails}
}

export function initUserCreditDetails(creditDEtails){
    return { type: 'initUserCreditDetails', payload: creditDEtails}
}

export function addProductToCart(ProductId){
    return { type: 'addProduct', payload: ProductId}
}

export function removeProductFromCart(ProductId){
    return { type: 'removeProduct', payload: ProductId}
}

export function updateIsManager(isManager){
    return { type: 'updateIsManager', payload: isManager}
}




// export function updateUser(userId, user){
//     return { type: 'editProduct', payload: userId, user }
// }

// export function getUserById(userId){
//     return { type: 'editProduct', payload: userId }
// }

// export function addUser(){
//     return { type: 'addUser'}
// }
// export function updateUser()
// {
//     return {type: 'updateUser'}
// }
// export function initUser()
// {
//     return {type: 'initUser'}
// }
