import React from 'react'

export default function TimezoneSelect({timeZones,handleTimeZoneChange}) {
    
    function handleChange(event){
        const diff = timeZones.find(it=>it.name===event.target.value).duration;
        handleTimeZoneChange(diff);
    }



    return (
        <select onChange={handleChange} name="timezone-select">
            {
                timeZones.map(zone=>
                    <option key={zone.id} >{zone.name}</option>
                )
            }
        </select>
    )
}
