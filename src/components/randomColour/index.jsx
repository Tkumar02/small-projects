import { useState } from "react"

export default function RandomColour(){

    const[typeOfColour,setTypeOfColour]=useState('')
    const[colour,setColour] = useState("#000000")
    const[r1,setR1] = useState(0)
    const[b1,setB1] = useState(0)
    const[g1,setG1] = useState(0)
    const[hexPick,setHexPick] = useState(false)

    function randomColourUtility(length){
        return Math.floor(Math.random()*length)
    }

    const handleRandomHexColour = () =>{
        //let hexColour = Math.floor(Math.random()*(999999-100000)+100000)
        setTypeOfColour('hex')
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColour = '#'
        for (let i=0;i<6;i++){
            hexColour+= hex[randomColourUtility(hex.length)]
        }
        setColour(hexColour)
        console.log(colour,hexPick)
    }

    const handleRandomRGBColour = () => {
        setTypeOfColour('rgb')
        let r = randomColourUtility(256)
        let g = randomColourUtility(256)
        let b = randomColourUtility(256)
        setColour(`rgb(${r},${g},${b})`)
        console.log(colour)
    }

    function handleRGBColour(){
        let rgbColour = 'rgb(' + r1 +',' + g1 + ',' + b1 + ')'
        setColour(rgbColour)
    }

    return (
        <div
        style={{
            width:"100vw",
            height: "100vh",
            background: colour,
        }}
        className="container">
            <div className="inputColour">
                <label style={{color:'green', marginRight:'10px',border:'solid 1px white', backgroundColor:'white', padding:'5px'}}>Hex Colour:</label>
                <input type="text" onChange={(event)=> setColour('#'+event.target.value)}/>
            </div>
            <div className="inputColour">
                <label style={{color:'green', marginRight:'10px',border:'solid 1px white', backgroundColor:'white', padding:'5px'}}>RGB Colour:</label>
                <input onChange={(event)=>{setR1(event.target.value)}} placeholder="red" type="number" maxLength={3} />
                <input onChange={(event)=>{setG1(event.target.value)}} placeholder="green" type="number" maxLength={3} />
                <input onChange={(event)=>{setB1(event.target.value)}} placeholder="blue" type="number" maxLength={3} />
                <button onClick={handleRGBColour}>Generate RGB Colour</button>
            </div>
            <div style={{marginTop:'10px', marginBottom:'10px'}}>
                <label style={{color:'green', marginTop:'15px', marginRight:'10px',border:'solid 1px white', backgroundColor:'white', padding:'5px'}} htmlFor="hexPicked">Hex</label>
                <input type="checkbox" name='hexPicked' id='hexPicked' onChange={()=>{setHexPick(!hexPick)}}/>
            </div>
            <button onClick={
                hexPick ? handleRandomHexColour : handleRandomRGBColour
            }>Generate Random {hexPick ? 'Hex' : 'RGB' } Colour</button>
            <div>
                <h3>Current Colour: </h3>
                <h1>{colour}</h1>
            </div>
        </div>
    )
}