const validator=(mail,password,username='')=>{
    const mailvalid=ismailvalid(mail)
    const passvalid=ispassvalid(password)
    if (username!==''){
        return validusername(username)&&mailvalid&&passvalid
    }
    return mailvalid&& passvalid
}
const validusername=(user)=>{
    return user.length>=5
}
export const ismailvalid=(mail)=>{
    const emailpatten=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailpatten.test(mail)
}
const ispassvalid=(password)=>{
    return password.length>=5 && password.length<=12
}

export default validator
