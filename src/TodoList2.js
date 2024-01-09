import React, { useState } from 'react'
import { Button, Input, List } from 'semantic-ui-react'

export default function TodoList2() {

  let oldData = []
  if (localStorage.getItem('todos')) {
    oldData = JSON.parse(localStorage.getItem('todos'))

  }

  const [list, setList] = useState(oldData)
  const [text, setText] = useState('')
  const [text2, setText2] = useState('')

  function addItem(e) {
    e.preventDefault()
    if (text === '' || text2 === '') return
    let newList = [...list]
    newList.push({ text, text2 })
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
    setText('')
    setText2('')
  }

  function deleteItem(index) {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
  }

  function deleteAll() {
    setList([])
    localStorage.setItem('todos', JSON.stringify([]))
  }


  return (
    <div>
      <form onSubmit={addItem}>
        <Input value={text} onChange={(e) => setText(e.target.value)} label="title" />
        <br />
        <Input value={text2} onChange={(e) => setText2(e.target.value)} label='description' />
        <br />
        <Button color='green'>ADD</Button>
        <Button color='red' onClick={deleteAll} >DeleteAll</Button>
      </form>

      <List divided verticalAlign='middle' style={{ padding: 20 }}  >
        {list.map((item, index) => (
          <List.Item>

            <List.Content floated='right'>
              <Button onClick={() => deleteItem(index)}>Delete</Button>
            </List.Content>

            <List.Content>
              {item.text}
              <br />
              {item.text2}
            </List.Content>

          </List.Item>



        ))}


      </List>

    </div>
  )
}
