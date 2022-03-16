import logo from './logo.svg';
import './App.css';

function App() {
  const user= [
  {
    name: "A",
    location: "India",
    foodType: "Veg",
    age: "22",
    likes: "Coding",
    github: "A",
    avatar: "https://assets.materialup.com/uploads/0bee3e01-ba96-4a9d-b288-620780ba6269/attachment.png"

  },
  {
    name: "B",
    location: "USA",
    foodType: "Veg",
    age: "24",
    likes: "Dancing",
    github: "B",
    avatar: "https://img.freepik.com/free-vector/smiling-girl-avatar_102172-32.jpg"

  },
  {
    name: "C",
    location: "Canada",
    foodType: "Veg",
    age: "29",
    likes: "Eating",
    github: "C",
    avatar: "https://i.pinimg.com/736x/ef/b4/56/efb4563befb0ae1bed74f004785f3f0f.jpg"

  },
  {
    name: "D",
    location: "Paris",
    foodType: "Veg",
    age: "26",
    likes: "Playing",
    github: "D",
    avatar: "https://img.lovepik.com/free-png/20210923/lovepik-cute-girl-avatar-png-image_401231841_wh1200.png"

  },

 ]
  return (
    <div className="App">
     <div style={{width:"100%",display:"flex", float:"left", flexWrap:"wrap"}}>
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
