import React,{useState} from 'react'

const Problem2 = () => {
    const [arr, setArr] = useState([])
    const [text, setText] = useState('')
    const [index, setIndex] = useState(null)
    const [indexText, setIndexText] = useState('')

    const add=()=>{
        if(text.trim()){
            setArr([...arr, text]);
            setText('');
        }
    }

    const remove =(index) =>{ 
        const newTodos = [...arr]
        newTodos.splice(index, 1);
        setArr(newTodos)
      }


      const edit = (index)=>{
        setIndex(index)
        setIndexText(arr[index])
      }
  return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={add}>Add</button>
        <ul>
            {
                arr.map((x , index)=>(<li key={index}>
               {x}
                <button onClick={ () =>remove(index)}>Remove</button>
                </li>))
            }
        </ul>
    </div>
  )
}

export default Problem2