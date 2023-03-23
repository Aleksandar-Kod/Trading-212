const validNameRegex= new RegExp("[A-Z,a-z,`, ,.]")
export function(value:string){
    return validNameRegex.test(value)
}