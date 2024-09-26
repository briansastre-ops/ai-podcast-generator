import { GeneratePodcastProps } from '@/types'
import React, { useState } from 'react'
import { Label } from './ui/label'
import { Textarea } from '@/components/ui/textarea';
import { Button } from './ui/button';
import { Loader } from 'lucide-react';



const GeneratePodcast = ({
    GeneratePodcast,
    setAudioStorage,
    setAudio,
    voiceType,
    audio,
    voicePrompt,
    setVoicePrompt, }: GeneratePodcastProps) => {

      const [isGenerating, setIsGenerating] = useState(false)
  return (
    <div>
      <div className='flex flex-col gap-2.5'>
        <Label className='text-16 font-bold text-white-1'>
          AI Prompt to generate Podcast
        </Label>
        <Textarea
          className='input-class font-light focus-visible:ring-offset-orange-1'
          placeholder='Provide text to generate audio'
          rows={5}
          value={voicePrompt}
          onChange={(e)=> setVoicePrompt(e.target.value)}
        />
      </div>
      <div className='mt-5 w-full max-w-[200px]'>
                <Button type= 'submit' className="test=16  bg-orange-1 py-4 font-bold text-white-1  ">
                            {isGenerating ? (
                              <>


                                Generating
                                <Loader size={20} className="animate-spin ml-3"/>
                              </>
                            ): (
                              'Generate'
                            )}
                </Button>
      </div>
      {audio &&(
        <audio
        controls
        src={audio}
        autoPlay
        className='mt-5'
        onLoadedMetadata={(e)=> setAudioDuration(e.currentTarget.duration)}
        />
      )}
    </div>
  )
}

export default GeneratePodcast