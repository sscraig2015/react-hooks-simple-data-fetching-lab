import React, {  useState, useEffect} from "react"
import RenderImage from "./RenderImage"

function App(){
    
    const [fetchedImage, setFetchedImage] = useState('')
    const [loading, setLoading] = useState(true)
    
    useEffect(()=> {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((resp) => resp.json())
            .then((data) => {
                setFetchedImage(data.message)
                setLoading(false)
                
            })
            
    },[])

    return(
        <div>
            <p>{loading ? 'Loading...' : null}</p>
            <RenderImage image={fetchedImage}/>
        </div>
    )

}

export default App
