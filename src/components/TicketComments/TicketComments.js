import "./ticketcomment.css";

export default function TicketComments({comments}){

    if(!comments) return null;
    console.log(comments);

    return comments.map((item, i)=>{
        return(
        <div className="ticket-comment mt-3" key={i}>
            <div className="send text-secondary font-weight-bold">
                <div className="sender">{item.messageBy}</div>
                <div className="date">{item.date}</div>
            </div>
            <div className="comment">{item.message}</div>
        </div>
        ) 
    })
}