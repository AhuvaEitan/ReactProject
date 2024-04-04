export function initManagers(managers){
    return { type: 'initManagers', payload: managers}
}

export function isValid(manager){
    debugger
    return { type: 'isValid', payload: manager}
}

