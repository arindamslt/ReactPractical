import "./user.css";
import {useState} from "react";
import axios from "axios";
function User()
{
    let[user,setUser]=useState([]);
    let [data, setData] = useState([]);

    const getUsers=()=>{
        axios.get("https://randomuser.me/api/?results=20")
        .then((res=>{
            console.log(res.data.results)
            setUser(res.data.results);
            setData(res.data.results);
        }))
        .catch((error=>{
            console.log(error);
            alert("SOMETHING WENT WRONG");
        }))
        
    }
    const filterUser = (event) => {
        alert(event.target.value);
        if (event.target.value === "male") {
          setUser(data.filter((usr) => usr.gender ==="male")); // array - male information
          console.log(data);
        } else if (event.target.value ==="female") {
          setUser(data.filter((usr) => usr.gender ==="female"));
        } else {
          setUser(data);
        }
      };
    
    return(
     <div className="mainContainer"> 
        <h2>USER INFORMATION</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis
        quae voluptatibus corrupti quas delectus reiciendis vitae voluptatem
        ipsam. Nemo hic ad nisi? Sunt sed quisquam pariatur porro corporis
        officia iusto modi rerum quo est, quidem, quam dolorem! Veritatis sed
        mollitia numquam quae omnis repudiandae asperiores accusantium incidunt
        est pariatur sint ratione nesciunt quis obcaecati, deleniti libero, a
        assumenda in, quibusdam perferendis vitae illo dolorum! Officiis atque
        tenetur possimus esse doloremque exercitationem? Maxime recusandae id
        veritatis ut ducimus velit dolor porro neque consequatur atque cumque
        ratione, labore quae, quod est laudantium harum voluptas reiciendis
        commodi aut eveniet excepturi alias magnam doloribus. Sequi, voluptates.
        Beatae libero vitae non sit blanditiis, nulla architecto eaque ipsa
        officia fugit dolorum ipsum! Exercitationem quibusdam tenetur, iste
        voluptate quidem nam dolores soluta rerum. Possimus molestiae error
        quod, non doloribus nesciunt, deserunt veniam maxime exercitationem
        praesentium consequuntur quibusdam aspernatur perspiciatis maiores
        adipisci beatae! Deserunt quod laborum molestias, id dolores perferendis
        facere earum sequi voluptatem harum necessitatibus nam et fuga
        blanditiis nemo distinctio quasi. Similique consequuntur quo dolore
        cupiditate aspernatur voluptatibus eligendi magnam consequatur quia
        doloremque impedit, voluptatem exercitationem quae animi, mollitia iste.
        Deserunt animi blanditiis dolore totam perferendis, laudantium cumque
        illum atque, voluptates quia necessitatibus cupiditate in?</p>
        <button onClick={getUsers}>GET DATA</button>
        {
            user.length>0 &&
            (
                <div className="radioContainer">
              <input
            type="radio"
            name="gender"
            defaultChecked
            value="all"
            onChange={filterUser}
          />
          ALL
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={filterUser}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={filterUser}
          />
          Female
                 </div>
            )
            
        }
        {
            user.length>0?(
        
        <div className="tableContainer"> 
            <table cellPadding={20} align="center"> 
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>EMAIL</th>
                    <th>CITY</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((element,index)=>{
                            return(
                             <tr>
                                <td>{index+1}</td>
                                <img src={element.picture.medium} width={70} height={70} />
                                <td>{element.name.first}</td>
                                <td>{element.gender}</td>
                                <td>{element.email}</td>
                                <td>{element.location.city}</td>
                             </tr>
                            );
                        })
                    }
                    
                </tbody>
            </table>
        </div>
            ):(
                <h2>No Users Information</h2>
            )}
     </div>
    );
}
export default User;