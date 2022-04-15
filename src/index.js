import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";
import Message from "./Message";
import Segment from "./Segment";




function getTime(){
    return (new Date()).toLocaleTimeString()
}


const style = {
        backgroundColor: "blue",
        color : "white"
    }

const App = () => {
    
    const text = "Click Me"

    return(
        <div>
            <div className="ui container">

            <label htmlFor="name">
                Enter Name:
            
            </label>
            <input type="text" id="name"/>
            <button style={style}>{text}</button>
            <hr/>
            <h1>This is the new time</h1>
            <h3>{getTime()}</h3>

            </div>


            {/* end of first react project */}
            {/* seccond react project starts for comments */}
           
           <div className="ui container comments" >

               <ApprovalCard>
                   are you sure you want to make these changes
               </ApprovalCard>
               <ApprovalCard>
                     <CommentDetails
                           author="sam"
                           time="Today at 6pm"
                           commentMade="This is great"
                           avatar={faker.image.avatar()}
                     />

               </ApprovalCard>
              <ApprovalCard>
                     <CommentDetails
                          author="John"
                          time="12:30pm"
                          commentMade="fantastic resource"
                          avatar={faker.image.avatar()}
                     />

              </ApprovalCard>


              <ApprovalCard>
                   <CommentDetails
                         author="Amanda"
                         time="7pm yesterday night"
                         commentMade="i love what is see"
                         avatar={faker.image.avatar()}
                  />

              </ApprovalCard>
               
             <Message header = "Change in service"  headerBody=" we just updated our privacy policy,how better can we serve you"/>

             <Segment>
                   <div className='ui icon header'>
                            <i className='pdf file outline icon'></i>
                            No document for this customer
                   </div>
                   <div className='ui primary button'>
                              Add document
                  </div>
            </Segment>


            <Segment>
                <h4 className="ui header">For your information</h4>
                <p>
                    This is just the beginning , we go too show you pepper
                    Sha dey look omo iy a me ma for , we gather dey on this
                </p>
            </Segment>
              

               

           </div>
        </div>
    )
}




ReactDOM.render(
    <App/>,document.querySelector('#root')
)
