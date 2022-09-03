
import './App.css';
// import {faker} from "@faker-js/faker";
import React from 'react';
import {faker} from "@faker-js/faker";
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';


function App() {
  
  return (
    <>
      <div className="ui container comments">
      
      <ApprovalCard title={"FC Barcelona"} descripte ={"Latest News"}>
          
          
            <CommentDetail 
            author={"Pedri"}
             date={"Today at 6:30"}
              description={"Transfer to Arsenal"}
              image={faker.image.avatar()}
              />
         
          

        </ApprovalCard>
        <ApprovalCard title={"PSG"} descripte ={"Latest News"}>
              <CommentDetail 
              author={"Messi"} 
              date={"Today at 7:30"}
              description={"Transfer to ManCity"}
              image={faker.image.avatar()}
              />
           </ApprovalCard>

           <ApprovalCard title={"FC Barcelona"} descripte ={"Latest News"}>
              <CommentDetail
              author={"Gavi"} 
              date={"Today at 8:30"} 
              description={"Transfer to AC Milan"}
              image={faker.image.avatar()}
              />
           </ApprovalCard>
       </div>
    </>
  );
}

export default App;
