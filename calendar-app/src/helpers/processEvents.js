import { moment } from "moment";
export const processEvents = (events = [] ) => {

    return  events.map( 
      (e) => ({
            ...e,
            // start: e.start,
            // end: e.end
            start: moment(e.start).toDate(),
            end: moment(e.end).toDate()
        }) 
    );
}
