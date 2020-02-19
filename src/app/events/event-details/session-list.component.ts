import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../shared/index';

@Component({
    selector: "session-list",
    templateUrl: "./session-list.component.html",

})
export class SessionListComponent implements OnChanges {
    @Input() sessions:ISession[];
    @Input() filter:string;
    visibleSessions:ISession[] = [];
    @Input() sortIt:string;

    ngOnChanges(){
        if(this.sessions){
            this.filterSessions(this.filter);
            this.sortIt === "name" ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVoteDesc);
        }
    }
    filterSessions(filter){
        if(filter === "all"){
            this.visibleSessions = this.sessions.slice(0);
        }else{
            this.visibleSessions = this.sessions.filter(session =>{
                return session.level.toLowerCase() === filter;
            });
        }
    }
}

function sortByNameAsc(session1: ISession, session2: ISession){
    if(session1.name > session2.name) return 1;
    else if(session1.name > session2.name) return 0;
    else return -1;
}
function sortByVoteDesc(session1: ISession, session2: ISession){
   return session2.voters.length - session1.voters.length;
}