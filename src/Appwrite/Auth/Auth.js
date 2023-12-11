import Conf from "../../conf/Conf";
import { Client,Account,ID } from "appwrite";


export class Authservice {
    client =  new Client();
    account;
    constructor(){
        this.client.setEndpoint(Conf.appwriteUrl).setProject(Conf.appwriteProjectId)
        this.Account = new Account(this.client)
    }

    async createuser({email,password,name}){
        try{
            const user = await this.Account.create(ID.unique(),email,password,name)
            if(user){
                return this.login({email,password})
            }else{
                return user
            }
        }catch(error){
            throw error
        }
    }
    async login({email,password}){
       try{
            return await this.Account.createEmailSession(email,password)
       }catch(error){
        throw error
       }
    }
    async getCurrentuser(){
        try{
            return await this.Account.get()
        }catch(error){
            throw error
        }
        return null
    }
    async logout(){
        try{
            await this.Account.deleteSessions( )
        }
        catch(error){
            throw error
        }
    }
}


const authServices = new Authservice()
export default authServices