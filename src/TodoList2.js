import React, { useState } from 'react'
import { Button, Form, Input, List, Modal } from 'semantic-ui-react'

export default function TodoList2() {

  let oldData = []
  if (localStorage.getItem('todos')) {
    oldData = JSON.parse(localStorage.getItem('todos'))
  }

  const [list, setList] = useState(oldData)
  const [text, setText] = useState('')
  const [text2, setText2] = useState('')
  const [box, setBox] = useState(false)
  const [sure, setSure] = useState(false)
  const [one, setOne] = useState(false)
  const [delKey, setDelKey] = useState(null)

  function addItem(e) {
    e.preventDefault()
    if (text === '' || text2 === '') return
    let newList = [...list]
    newList.push({ text, text2 })
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
    setText('')
    setText2('')
    setBox(false)
  }

  function deleteItem(index) {
    let newList = [...list]
    newList.splice(index, 1)
    setList(newList)
    localStorage.setItem('todos', JSON.stringify(newList))
    setOne(false)
  }

  function deleteAll() {
    setList([])
    localStorage.setItem('todos', JSON.stringify([]))
    setSure(false)
  }

  function confirmDelAll() {
    setSure(true)
  }

  function cancelBox() {
    setBox(false)
    setText('')
    setText2('')
  }

  function confirmDelOne(index) {
    setDelKey(index)
    setOne(true)
  }


  return (
    <div>
      {/* Add Item Modal */}
      <Modal
        size='mini'
        open={box}
        closeIcon
        onOpen={() => setBox(true)}
        onClose={() => setBox(false)}
      >
        <Modal.Content>
          <Form onSubmit={addItem}>
            <Form.Field>
              <label htmlFor="">Title</label>
              <Input value={text} onChange={(e) => setText(e.target.value)} />
            </Form.Field>
            <Form.Field>
              <label htmlFor="">Description</label>
              <Input value={text2} onChange={(e) => setText2(e.target.value)} />
            </Form.Field>
            <Button color='green'>ADD</Button>
            <Button color='black' onClick={cancelBox}>Cancel</Button>
          </Form>
        </Modal.Content>
      </Modal>

      {/* Delete All confirm Modal */}
      <Modal
        closeIcon
        size='mini'
        open={sure}
        onOpen={() => setSure(true)}
        onClose={() => setSure(false)}
      >
        <Modal.Header>Delete all items?</Modal.Header>
        <Modal.Content>THis will all items in the TOdo List</Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setSure(false)}>No</Button>
          <Button onClick={deleteAll} color='red'>Delete All</Button>
        </Modal.Actions>
      </Modal>

      {/* Delete One confirm Modal */}
      <Modal
        size='mini'
        open={one}
        onOpen={() => setOne(true)}
        onClose={() => setOne(false)}
      >
        <Modal.Header>Delete this item?</Modal.Header>
        <Modal.Actions>
          <Button onClick={() => deleteItem(delKey)} color='red'>Delete</Button>
          <Button onClick={() => setOne(false)} color='black'>Cancel</Button>
        </Modal.Actions>
      </Modal>

      <Button color='green' onClick={() => setBox(true)}>ADD</Button>

      {list.length > 0 && <Button color='red' onClick={confirmDelAll}>Delete All</Button>}


      <List divided verticalAlign='middle' style={{ padding: 20 }}  >
        {list.map((item, index) => (
          <List.Item>

            <List.Content floated='right'>
              <Button onClick={() => confirmDelOne(index)} color='orange'>Delete</Button>
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
