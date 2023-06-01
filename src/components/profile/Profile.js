import {useState} from 'react'
import './Profile.scss'
import { profileData } from './profile-data'
import {FaTrashAlt} from 'react-icons/fa'

const Profile = () => {
     const [userProfile, setUserProfile ] = useState(profileData);
     const [search, setSearch ] = useState('');

     const removeProfile = (id) =>{
        const newProfileList = userProfile.filter((profile) =>  profile.id !== id);
        setUserProfile(newProfileList);
     }

    const handelInputChange = e =>{
        setSearch(e.target.value)
    }
  return (
    <section className='profile-sec --flex-center'>
        <div className="container">
            <h2 className='--text-light'>Profile App</h2>
            <div className="--form-control">
                <input type="text" className='--width-100'  placeholder='Enter search term...' onChange={(e) => handelInputChange(e)} value={search}/>
            </div>
            {userProfile.filter( value => {
                if (search.trim() == ''){
                    return value
                } else if (value.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                    return value;
                }
            }).map((profile) => (
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