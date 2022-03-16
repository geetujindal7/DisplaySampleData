import logo from './logo.svg';
import './App.css';

function App() {
  const user= [
  {
    name: "Geetika",
    location: "India",
    foodType: "Veg",
    age: "23",
    likes: "Coding",
    github: "geetujindal7",
    avatar: "https://assets.materialup.com/uploads/0bee3e01-ba96-4a9d-b288-620780ba6269/attachment.png"

  },

 ]
  return (
    <div className="App">
     <div style={{width:"100%",display:"flex", float:"left"}}>
      {
        user.map((i) =>
        {
          return(
            <>
           
            <div className="container">
              <img className="card" src={i.avatar}>
              </img>
              <a className="name" href="https://github.com/geetujindal7">{i.name}</a>
             
              <p className="heade">
                Location
              </p>
              <h4 className="ans">{i.location}</h4>

              <p className="heade">
                Eats
              </p>
              <h4 className="ans">{i.foodType}</h4>

              <p className="heade">
                Age
              </p>
              <h4 className="ans">{i.age}</h4>

              <p className="heade">
                Likes
              </p>
              <h4 className="ans">{i.likes}</h4>

              <p className="heade">
                Github
              </p>
              <a className="ans" href={"https://github.com/geetujindal7"}>@{i.github}</a>
            </div>
            
            </>
          );
        })
      }
      </div>
    </div>
  );
}

export default App;
