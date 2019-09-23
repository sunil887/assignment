import {STORE_DATA} from './actionType'
import { combineReducers } from 'redux';




const root =  (state = [],action)=>{
    
    const {type, storedEmployeeData, modifiedEmployee  } = action
    const modifiedState =  Object.assign([],state)
    switch(type){
        case STORE_DATA:
                console.log(storedEmployeeData)
                modifiedState = storedEmployeeData 
            return modifiedState
        
         default:
            return modifiedState

        
        
    }

}

export const reducer = combineReducers({
    root
})