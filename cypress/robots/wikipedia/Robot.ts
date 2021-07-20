import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitWikipedia(text:string){
        this.accessUrl('https://www.wikipedia.org/');
    }
}

export class RobotEyes extends BaseEyes{
    
}

export class RobotHands extends BaseHands{

    searchtesting(){
        this.typeTextonDom("name", "search", "Automation Testing")
            .clickOnDomElement("[class='sprite svg-search-icon']")
    }
}