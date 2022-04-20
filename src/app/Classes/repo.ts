export class Repo {
    constructor(public name: string,public html_url:string,public description:string, public watchers:number, public language:string, public updated_at:Date, public created_at:Date){
    }
}
