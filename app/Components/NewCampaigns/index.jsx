'use client'
import { useState } from 'react'
import { FormFieldCamapigns, CustomButton } from '..';

const NewCampaigns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isForm, setIsForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '', 
    deadline: '',
    image: '',
    inline: '',
  });
  
  const handleFormFieldChange = (fieldName, e) => {
    setIsForm({
      ...isForm,
      [fieldName]: e.target.value,
    });
  }

  return (
    <div className=" flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && "Loader..."}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px]  rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] ">
          Start a Campaign
        </h1>
      </div>
      <form
        // onSubmit={handleSubmit}
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
            value={isForm.inline}
            handleChange={(e) => handleFormFieldChange('inline', e)}
            
          />
          <FormFieldCamapigns 
            LabelName="End Date *"
            placeholder="End Date"
            inputType="date"
            value={isForm.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
            
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