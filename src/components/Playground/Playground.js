import React, { Component } from 'react';

class Playground extends Component {
    render () {
        //function declaration
        let formatName =(user)=> {
            return user.firstName + ' ' + user.lastName;
        }

        let havePowers =(user)=>{
            return user.mutantPowers ? user.mutantPowers : 'No powers found';
        }

        const user = {
          firstName: 'Lenny',
          lastName: 'Peters',
          avatar:'http://www.lennypeters.com/wp-content/themes/lennypeters/img/logo.svg',
          email:'lenny@lennypeters.com',
          phone:'212-867-5309',
          mutantPowers:''
        };

        return (
            //calling the function to render the name off of the constant user
            <main id="content" className="main">
                <h1>Welcome {formatName(user)}!</h1>
                <hr/>
                <img src={user.avatar} className="circle" alt="cat"/>
                <ul>
                    <li>First Name: {user.firstName}</li>
                    <li>Last Name: {user.lastName}</li>
                    <li>Phone number: {user.phone}</li>
                    <li>Mutant Powers: {havePowers(user)}</li>
                </ul>
            </main>
        )
    }
}

export default Playground;