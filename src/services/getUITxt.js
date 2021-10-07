


const text = {
    "login": {
        "username": "Username",
        "placeholderUsername": "Write your email",
        "password": "Password",
        "placeholderPassword":"Write your password "
    },
    "componentName":{
        "jot":"jot"
    }
}


const getUITxt = (component, txtName) => {
    console.log('getUITxt - component - txtName', component, txtName)
    console.log('getUITxt - text', text[component][txtName])

    return text[component][txtName]
}
export default getUITxt