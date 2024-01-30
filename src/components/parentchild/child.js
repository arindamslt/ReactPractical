function Child({data})
{
    return(
        <div style={{
            boxShadow:"0 0 10px green",
            textAlign:"center",
            padding:"30px",
            margin:"20px auto",
            width:"300px",
        }}>
       <h2>CHILD COMPONENT</h2>
       <p>{data}</p>
        </div>
    );
}
export default Child;