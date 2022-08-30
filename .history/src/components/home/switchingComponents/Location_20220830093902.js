import React from 'react'

const Location = ({formData, setFormData}) => {
  return (
    
<form>
  <div className ="mb-6">
    <label for="origin" className ="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your origin</label>
    
    
  </div>
  <div className ="mb-6">
    <label for="destination" className ="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your destination</label>
    <input type="destination" id="destination" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
    placeholder="Enter second location" required="" value={formData.destination} onChange={(e) => setFormData({...formData, destination: e.target.value})}/>
  </div>

  <label for="companies" class="block mb-2 text-sm font-medium text-white dark:text-gray-400">Select an option</label>
<select id="companies" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})}>
  <option selected>Choose a moving company</option>
  <option value="MoversNShakers">MoversNShakers</option>
  <option value="OfisiMove">OfisiMove</option>
  <option value="UtahamaLini">UtahamaLini?</option>
</select>
  
</form>



  );
}

export default Location