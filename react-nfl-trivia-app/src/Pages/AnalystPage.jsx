import React from 'react'
import Analyst from '../components/Analyst'
import AnalystCard from '../components/AnalystCard'
import { useState } from 'react'

export default function AnalystPage() {

  const [currentAnalyst, setCurrentAnalyst] = useState(null)

  return (
    <>
        <Analyst setCurrentAnalyst={setCurrentAnalyst} />
        <AnalystCard currentAnalyst={currentAnalyst} />
    </>
  )
}

