import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
return (
<div className = "ui container comments">
    {/*name of the prop and the value must be in the component tag in order to pass props.
    
    */ }
    <ApprovalCard>
        <CommentDetail 
        author = {faker.name.firstName()} 
        timeAgo = "Today at 4:45pm"  
        imageAvatar = {faker.image.avatar()}
        text = {faker.lorem.sentence()} 
        />
    </ApprovalCard>
    <ApprovalCard>
        <CommentDetail 
        author = {faker.name.firstName()} 
        timeAgo = "Today at 3:33pm" 
        imageAvatar = {faker.image.avatar()} 
        text = {faker.lorem.sentence()} 
        />
   </ApprovalCard>

   <ApprovalCard> 
        <CommentDetail 
        author = {faker.name.firstName()} 
        timeAgo = "Today at 1:14pm" 
        imageAvatar = {faker.image.avatar()} 
        text = {faker.lorem.sentence()} 
        />
   </ApprovalCard>
   <ApprovalCard> 
        <CommentDetail 
        author = {faker.name.firstName()}  
        timeAgo = "Today at 2:52pm" 
        imageAvatar = {faker.image.avatar()} 
        text = {faker.lorem.sentence()} 
        />
 </ApprovalCard>
</div>

);

};

ReactDOM.render(<App />,document.querySelector('#root'));

/*
creating a reuseable, configurable componenet 

identify the JSX that appears to be duplicated 

what is the purpose of that block of JSX? Think of a descriptive name for what it does

Create a new file to house this new component - it shoud have the same name as the component

create a new component in the new file, paste the jsx into it 

Make the new component configurable by sing React's props system.

Props 
system for passing data from a paren component to a child component 

goal is to customize or configure a childe component.
*/

/* 
How react use to be 

functional componenets: can produce JSX to show content to the user 

Class componenets : can produce JSX to show content to the user, 
                    can use the lifecycle method system to run code at specfic points in time
                    can use the state system to update content on the screen


                    How reac is now 

                    Class componenet\s
                    can produce JSX to show content to the user 
                    can use the lifecycle method system to run code at specific points in time 
                    can use the state system to update content on the screen
                    
                    Functional componenets(within the hook system)
                    cna product JSX to the user 
                    can use hooks to run code at specific points in time 
                    can use hooks to access state system and update content on screen.
                    
                    which one should we use since they are similar ?
                    established projects are using class based components 
                    newer projects are class based or function based components.

*/

/*
class componenets 

easier code organizations 
can use state another react system 
    easier to handle user input 
understands lifecycle events 
    easier to do things when the app first starts
*/