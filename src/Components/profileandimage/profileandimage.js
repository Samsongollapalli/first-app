
const ProfileandImage =()=>{

const Profiledetails = {
    name : "samson",
    age : 20, 
    salary : 100000,
    mobile : 9949
}
const {name,salary,age,mobile} = Profiledetails; 

return (
    <div>
        <h1> my name is {name} </h1>
        <h1> My age is {age} </h1>
        <h1> my mobile is {mobile}</h1>
        <h1> My salary is {salary}</h1>
    </div>
)
};

export default ProfileandImage;