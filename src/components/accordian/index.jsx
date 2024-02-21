import { useState } from "react"
import data from "./data"
import './styles.css'

export default function Accordion(){
    const [selected,setSelected] = useState(null)
    const[multi,setMulti] = useState([])
    const [multiSelect, setMultiSelect] = useState(false)

    function handleSingleSelection(id){
        setSelected(id==selected ? null : id)
        console.log('selected',selected)
    }

    function handleMultiSelection(id){
        let copyMultipe = [...multi];
        const findIndexOfCurrentId = copyMultipe.indexOf(id);
        if(findIndexOfCurrentId=== -1){
            copyMultipe.push(id)
        }
        else{
            copyMultipe.splice(findIndexOfCurrentId,1)
        }
        setMulti(copyMultipe)
        console.log('selected = ', selected)
    }

    return(
        <div className="wrapper">
            <button onClick={()=>{setMultiSelect(!multiSelect); console.log(multiSelect) }}>Enable multi selection</button>
            <div className="accordian">
                {data && data.length>0 ?(
                <div>
                    {data.map((item)=>
                    <div className="item">
                        <div className="title">
                            <h2>{item.question}</h2>
                            <span onClick={multiSelect ? ()=>handleMultiSelection(item.id) : ()=>handleSingleSelection(item.id)}>+</span>
                        </div>
                        {multiSelect
                            ? multi.indexOf(item.id) !== -1 && (<div className="content">{item.answer}</div>)
                            : selected == item.id && (<div className="content">{item.answer}</div>)}
                    </div>
                        )}
                </div>) : (
                <div>No data found</div>)}
            </div>
        </div>
    )
}




