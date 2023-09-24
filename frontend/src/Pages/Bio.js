import React from 'react'
import EditBio from '../components/EditBio'
import UploadResume from '../components/UploadResume'
import {MdEdit} from 'react-icons/md'
import {GrNext} from 'react-icons/gr'
import logo from '../logo512.png';

export default function Bio() {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isEditingResume, setIsEditingResume] = useState(false);
  const [bloodGroup, setBloodGroup] = useState('');
  const [bioContent, setBioContent] = useState('');

  const handleEditBioClick = () => {
    setIsEditingBio(true);
  };

  const handleEditResumeClick = () => {
    setIsEditingResume(true);
  };

  const handleSaveBio = (newBio) => {
    setBioContent(newBio);
    setIsEditingBio(false);
  };

  const handleSaveResume = () => {
    // Implement saving resume logic here
    setIsEditingResume(false);
  };
  return (
    <div>
        <div className='flex justify-between mt-4 p-2'>
            <div>
                <p className='font-weight-700 font-semibold'>About Me</p>
            </div>
            <div>
                <button>
                    <MdEdit/>
                </button>
            </div>
        </div>
        <div className='text-gray-500 shadow-md mt-4 p-2'>
            <p className='color-[rgb(182,182,182)]'>No about me added yet.</p>
        </div>
        <div className='flex justify-between mt-4 p-2'>
            <div>
            <p className='font-weight-700 font-semibold'>Blood Group</p>
            </div>
            <div>
                <button className='text-gray-500 font-semibold'>
                    Select
                </button>
            </div>
        </div>
        <div className='flex justify-between shadow-md mt-4 p-2 content-center'>
            <div className='flex'>
                <img className='w-8' src={logo} alt='No image available'/>
                <p className='font-weight-700 font-semibold ml-2'>Resume</p>
            </div>
            <div>
                <button className='text-gray-500'>
                    <GrNext/>
                </button>
            </div>
        </div>
    </div>
  )
}
