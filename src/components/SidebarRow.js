import react from 'react'
import IconButton from '@material-ui/core/IconButton'
import './SidebarRow.css'
function SidebarRow({Icon,title}) {
     return(
         <div className="row">
           
               <Icon/>
          
           <p>{title}</p>
           
         </div>
     )

}

export default SidebarRow