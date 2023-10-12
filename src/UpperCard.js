const UpperCardItem=[
    {
        id:1,
        vector:'revenue.png',
        total:"Total Revenues",
        amount:"$2,129,430",
        percentage:"+2.5%",
        background:{backgroundColor:"#7FCD93"},
    },
    {
        id:2,
        vector:'transaction.png',
        total:"Total Transactions",
        amount:"1520",
        percentage:"+1.7%",
        background:{backgroundColor:"#DEBF85"},
    },
    {
        id:3,
        vector:'likes.png',
        total:"Total Likes",
        amount:"9721",
        percentage:"+1.4%",
        background:{backgroundColor:"#ECA4A4"},
    },
    {
        id:4,
        vector:'users.png',
        total:"Total Users",
        amount:"1520",
        percentage:"+4.2%",
        background:{backgroundColor:"#A9B0E5"},
        margin:{marginRight:'0px'},
    },
]

function UpperCard(){
    return(
        <>
        <div className="uppercard">
            <div className="cardSection">
                {UpperCardItem.map((items)=>{
                    const{margin,vector,total,amount,percentage,background}=items;
                    return(
                        <div className="card" style={margin}>
                            <div className="vectorIcon" style={background}><img src={vector} alt="vector"/></div>
                            <span className="total">{total}</span>
                            <div className="cardBottom">
                                <div className="amount">{amount}</div>
                                <div className="percent">{percentage}</div>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
export default UpperCard;