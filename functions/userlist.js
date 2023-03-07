import * as db from '../src/dbfunction/db.js';


const handler = async function (event, context) {
    //getendpoint
    let userList;

    await db.listAllParticipants()
        .then((result) => (userList = result))
        .catch((err) => console.log(err));

        return {
            statusCode: 200,
            body: JSON.stringify({
                numberOfParticipants: userList.length,
                userList,
            })
        }
    } 
       
   export {handler} 
