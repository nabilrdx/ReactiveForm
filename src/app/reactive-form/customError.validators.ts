import { AbstractControl, ValidationErrors } from "@angular/forms";
// import { resolve } from "dns";

export class CustomError{
    static shouldHaveSpecialChar(control: AbstractControl):ValidationErrors|null{
        let format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if(!(format.test(control.value as string)))
            return {
                shouldHaveSpecialChar: true
            }
        else
            return null
    }

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if((control.value as string).includes(' '))
            return {
                cannotContainSpace: true
            }
        else
            return null;
    }
    //async
    static serverUniqueName(control:AbstractControl):Promise<ValidationErrors | null>{
        let json=[
            {
                name:'nabil*'
            },{
                name:'kev@in'
            }
        ]
        let includes = json.find(e=>e.name==control.value);
        if(includes){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve({serverUniqueName:true})
                },3000)
        })
        }
        else{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve(null)
                }, 3000)
            })
        }
    }

    static isValidNumber(control:AbstractControl):ValidationErrors|null{
        let regex = /^[0]?[789]\d{9}$/;
        if(!(regex.test(control.value)))
            return {isValidNumber: true}
        else
            return null;
    }

    static isValidEmail(control:AbstractControl):ValidationErrors|null{
        let regex =     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(!(regex.test(control.value)))
            return {isValidEmail:true}
        else
            return null
    }

    static isValidPassword(control:AbstractControl):ValidationErrors|null{
        let regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if(!(regex.test(control.value)))
            return {isValidPassword: true}
        else
            return null;
    }
}