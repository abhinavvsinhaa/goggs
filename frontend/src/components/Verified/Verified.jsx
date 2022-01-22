import React from 'react';
import './verified.css'
/*
  {
    "verified": 1,
    "user": {
        "name": "Abhinav Sinha",
        "image": "https://drive.google.com/file/d/1fdna7jqoJh6efxU7ha0QOXER6wyA-quC/view?usp=sharing",
        "enroll": 9920103085
    }
}
*/

const Profile = ({ user }) => { 
  return (
    <div>
      <table style={{
        left:"30%",
        top:"20%"
      }} className="table table-bordered table-responsive">
        <tr>
          <td className="imageRow imgRowNew">
           <iframe src="https://embed.lottiefiles.com/animation/77860"></iframe>
            <img src={user.image} alt="image" width='200px' className="image" />
          </td>
        </tr>
        <tr>
          <td style={{ backgroundColor: 'whitesmoke' }} className="user-detailss">{user.name}</td>
        </tr>
        <tr>
          <td className="user-details">{user.enroll}</td>
        </tr>
    </table>
    </div>
    
  );
}

const Verified = ({verified, user}) => {
  return <div className='verified'>
    {verified===0 && <iframe src="https://embed.lottiefiles.com/animation/74713"></iframe> }
    {verified === 0 && <h1>User Verification Failed</h1>}
    {verified === 1 && <Profile user={user}/>}
  </div>;
};

export default Verified;
