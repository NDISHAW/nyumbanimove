import React from 'react'
// import { form, Button } from "react-bootstrap";

const houseSizeSize = ({formData, setFormData}) => {
  return (
    <div>

<form>

<div className="mb-6">
<label for="houseSize" class="block mb-2 text-sm font-medium text-white dark:text-gray-400">houseSize Size</label>
<select id="houseSize" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={formData.houseSize} onChange={(e) => setFormData({...formData, houseSize: e.target.value})}>
  <option selected>Choose your houseSize size</option>
  <option value="2Bedroom">2 Bedroom</option>
  <option value="1Bedroom">1 Bedroom</option>
  <option value="Bedsitter">Bedsitter</option>
  <option value="Studio">Studio</option>
</select>
</div>


  <div className ="mb-6">
    <label for="date" className ="block mb-2 text-sm font-medium text-white dark:text-gray-300">Moving Date</label>
    <input type="date" id="date" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter first location" required="" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})}/>
  </div>
  <div className ="mb-6">
    <label for="time" className ="block mb-2 text-sm font-medium text-white dark:text-gray-300">Perfect Moving Time</label>
    <input type="time" id="time" className ="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" 
    placeholder="Enter second location" required="" value={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})}/>
  </div>


  
</form>


    </div>
  )
}

export default houseSizeSize