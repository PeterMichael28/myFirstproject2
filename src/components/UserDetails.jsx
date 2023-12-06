/* eslint-disable react/prop-types */


const UserDetails = ( { fName, age, color } ) => {
    
// console.log({color})
  return (
      <div className="bg-slate-300 ">
          My name is {" "}
          <span className="text-red-700 text-2xl font-bold">
              
          { fName.toUpperCase() },
      </span> {" "}
          and i am
          { age }
          years old
    </div>
  )
}

export default UserDetails