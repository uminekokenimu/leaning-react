import './App.css'
import { useEffect, useState } from 'react'
import {
  Button,
  Box,
  Checkbox,
  Flex,
  Input,
  Text
} from '@chakra-ui/react'

type Record = {
  id: number;
  title: string;
  amount: number;
  isIncome: boolean;
}

function App() {
  const [records, setRecords] = useState<Record[]>([]);
  const [title, setTitle] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [isIncome, setIsIncome] = useState<boolean>(false);

  const addRecord = () => {
    const newRecord: Record = {
      id: records.length + 1,
      title: title,
      amount: amount || 0,
      isIncome: isIncome,
    };
    setRecords([...records, newRecord]);
    setTitle("");
    setAmount(0);
    setIsIncome(false);
  };

  useEffect(() => {
    getRecords()

    async function getRecords() {
      const response = await fetch('http://localhost:3000/records')
      const data = await response.json()
      setRecords(data)
    }
  }, [])

  return (
    <div>
      <Text fontSize="2xl">Sample App</Text>
      <Box mb="8px">
        <Input
          placeholder='Input title'
          mb="4px"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Input
          placeholder='Input expenditure'
          mb="4px"
          type="number"
          onChange={(e) => setAmount(Number(e.target.value))}
          value={amount}
        />
        <Flex align="center" justifyContent="space-between">
          <Checkbox.Root
            onCheckedChange={() => setIsIncome(!isIncome)}
            checked={isIncome}
          >
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>Income</Checkbox.Label>
          </Checkbox.Root>
          <Button
            colorPalette={"teal"} onClick={addRecord}>Add</Button>
        </Flex>
      </Box>
      <div>
        {records.map((record) => (
          <div key={record.id}>
            <Flex align="center" justifyContent="space-between">
              <Text>{record.title}</Text>
              <Text>
                {record.isIncome ? "+" : "-"}
                {record.amount}
              </Text>
            </Flex>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
