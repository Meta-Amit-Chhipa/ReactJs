import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App() {
  let Blog=[
    {
       id:"01",
       title:'Post Title 1',
       desc:'Post Description 1'
    },
    {
      id:"02",
      title:'Post Title 2',
      desc:'Post Description 2'
   },
   {
    id:"03",
    title:'Post Title 3',
    desc:'Post Description 3'
 },
 {
  id:"04",
  title:'Post Title 4',
  desc:'Post Description 4'
},
  ]
  return (
    <div className="App">
         <Post item={Blog}/>
    </div>
  );
}
export default App;
