import {useState} from 'react'
import './Profile.scss'
import { profileData } from './profile-data'
import {FaTrashAlt} from 'react-icons/fa'

const Profile = () => {
     const [userProfile, setUserProfile ] = useState(profileData);
  return (
    <section className='profile-sec'>
        <div className="container">
            <h2>Profile App</h2>
            {userProfile.map((profile) => (
                <div className="profile" key={profile.id}>
                    <img src={profile.img} alt="profile" />
                    <div className='desc'>
                        <h4>Name: {profile.name}</h4>
                        <p>Job: {profile.job}</p>
                    </div>
                    <FaTrashAlt size={18}/>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Profile