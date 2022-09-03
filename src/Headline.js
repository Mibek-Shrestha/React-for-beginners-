const Headline = (props) => {
    return ( 

        <div className="ui message">
                <div className="header">{props.title}</div>
                <p>{props.descripte}</p>
        </div> 
     );
}
 
export default Headline;