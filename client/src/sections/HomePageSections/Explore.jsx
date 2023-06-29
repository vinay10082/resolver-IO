import React from 'react'
import Card from '../../components/Card'

const Explore = () => {
  return (
    <>
  <div class="flex flex-wrap">
    <div class="text-center my-8 mx-auto">
      <Card
      header="Text Generation" 
      title="TEXT SUMMARY"
      description = "Summarize long text into short sentences"
      navigateLink= '/summary'
      />
    </div>
    <div class="text-center my-8 mx-auto">
    <Card 
    header="Paragraph Generation" 
      title="PARAGRAPH"
      description = "Generate Paragraph with words"
      navigateLink= '/paragraph'
      />
    </div>
    <div class="text-center my-8 mx-auto">
    <Card 
    header="AI ChatBot" 
      title="CHATBOT"
      description = "Chat with Artificial Intelligent chatbot"
      navigateLink= '/chatbot'
      />
    </div>
    <div class="text-center my-8 mx-auto">
    <Card 
    header="Javascript Generation" 
      title="JS Code"
      description = "Generate JS code on demand"
      navigateLink= '/js-converter'
      />
    </div>
    <div class="text-center my-8 mx-auto">
    <Card 
    header="AI Scifi Images" 
      title="SCIFI IMAGE"
      description = "Generate Scifi image on demand"
      navigateLink= '/scifi-image'
      />
    </div>
  </div>
    </>
  )
}

export default Explore