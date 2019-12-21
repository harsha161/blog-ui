export const increment =() =>{
    return {type:'INCREMENT'}
}
export const decrement=()=>{
    return {type:'DECREMENT'}
}
export const reset=()=>{
    return {type:'RESET'}
}
export const incrementBy=(num)=>{
    return {type:'INCREMENT_BY', payload:num}
}