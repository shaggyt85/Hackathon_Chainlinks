'use client'
import { useState } from 'react'
import { FormFieldCamapigns, CustomButton } from '..';
import { storage } from '@/firebase.config';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { getAllCampaigns, saveItem } from '@/app/utils/firebaseFunction';
import { actionType } from '@/app/Context/reducer';
import { useStateValue } from '@/app/Context/StateProvider';


const NewCampaigns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fields, setFields] = useState(false)
  const [alertStatus, setAlertStatus] = useState('danger')
  const [msg, setMsg] = useState(null)
  const [{campaigns}, dispatch ] = useStateValue()
  const [isForm, setIsForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '', 
    endLine: '',
    image: '',
    startLine: '',
  });
  
  const handleFormFieldChange = (fieldName, e) => {
    setIsForm({
      ...isForm,
      [fieldName]: e.target.value,
    });
  }

  const saveDetails = (e) => {
    e.preventDefault()
    setIsLoading(true)
    const { name, title, description, target, endLine, startLine, image } = isForm;
    try {
      if (!isForm.title) {
        setFields(true)
        setMsg('Required fields cant be empty')
        setAlertStatus('danger')
        setTimeout(() => {
          setFields(false)
          setIsLoading(false)
        }, 4000)
    } else {
      const data = {
        id: `${Date.now()}`,
        name,
        title,
        description,
        image,
        target,
        endLine,
        startLine,
      }
      saveItem(data, 'Campaigns')
      setFields(true)
        setMsg('data uploaded success')
        clearData()
        setAlertStatus('success')
        setTimeout(() => {
          setFields(false)
          setIsLoading(false)
        }, 4000)
      console.log(data, 'data')
    }
    } catch (error){
      console.log(error)
    }
    fetchData()
  }
  
  const clearData = () => {
    setIsForm({
      name: '',
      title: '',
      description: '',
      target: '', 
      endLine: '',
      image: '',
      startLine: '',
    })
  }

    const fetchData = async () => {
      await getAllCampaigns().then(data => {
        console.log(data,  'data')
        dispatch({
          type: actionType.SET_CAMPAIGNS,
          payload: data
      })
    })
  }


  return (
    <div className=" flex justify-center items-center flex-col rounded-[10px]">
      <div className='w-[90%] md:w-[75%]  p-4 flex flex-col items-center justify-center gap-4 '>
          {
            fields && (
              <div className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === 'danger' ? 'bg-red-400 text-red-800' : 'bg-emerald-800'}`}>
                {msg}
              </div>
            )
          }
          </div>
      {isLoading && "Loader..."}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px]  rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] ">
          Start a Campaign
        </h1>
      </div>
      <form
        onSubmit={saveDetails}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormFieldCamapigns
            LabelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            value={isForm.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormFieldCamapigns
            LabelName="Campaign Title *"
            placeholder="Write a title"
            inputType="text"
            value={isForm.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>
        <FormFieldCamapigns
            LabelName="Story *"
            placeholder="Write your Story"
            isTextArea
            value={isForm.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
          />
          

        <div className="flex flex-wrap gap-[40px]">
          <FormFieldCamapigns 
            LabelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            value={isForm.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
          <FormFieldCamapigns 
            LabelName="In Date *"
            placeholder="In Date"
            inputType="date"
            value={isForm.startLine}
            handleChange={(e) => handleFormFieldChange('startLine', e)}
            
          />
          <FormFieldCamapigns 
            LabelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={isForm.endLine}
            handleChange={(e) => handleFormFieldChange('endLine', e)}
            
          />
        </div>

        <FormFieldCamapigns 
            LabelName="Campaign image *"
            placeholder="Place image URL of your campaign"
            inputType="url"
            value={isForm.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
              btnType="submit"
              title="Submit new campaign"
              styles="bg-[#1dc071]"
              
            />
          </div>
      </form>
    </div>
  )
}

export default NewCampaigns