import {useState} from 'react'
import './Profile.scss'
import { profileData } from './profile-data'
import {FaTrashAlt} from 'react-icons/fa'

const Profile = () => {
     const [userProfile, setUserProfile ] = useState(profileData);

     const removeProfile = (id) =>{
        const newProfileList = userProfile.filter((profile) =>  profile.id !== id);
        setUserProfile(newProfileList);
     }
  return (
    <section className='profile-sec --flex-center'>
        <div className="container">
            <h2 className='--text-light'>Profile App</h2>
            {userProfile.map((profile) => (
                <div className="profile --card --flex-between" key={profile.id}>
                    <img src={profile.img} alt="profile" />
                    <div className='desc'>
                        <h4 className='--text-light'>Name: {profile.name}</h4>
                        <p className='--text-light'>Job: {profile.job}</p>
                    </div>
                    <FaTrashAlt size={18} className='icon' onClick={() => removeProfile(profile.id)}/>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Profile