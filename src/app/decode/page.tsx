import React from 'react'
import CommonLayout from '../components/CommonLayout'

// export const extractSecretMessage = async (audioBuffer: AudioBuffer): Promise<string> => {
//   // Assuming the secret message was embedded in the LSB of the left channel
//   const leftChannelData = audioBuffer.getChannelData(0);
//   let bitSequence = '';

//   // Extract bits from the LSB of each sample (or every nth sample based on how you embedded the message)
//   for (let i = 0; i < leftChannelData.length; i += 1) {
//     // Convert the float sample to an integer to access its LSB
//     const sampleInt = floatToIntSample(leftChannelData[i]);
//     // Extract the LSB
//     const lsb = sampleInt & 1;
//     bitSequence += lsb.toString();
//   } 
  

//   // Group bits into bytes (8 bits per byte) and convert to characters
//   let message = '';
//   for (let i = 0; i < bitSequence.length; i += 8) {
//     const byte = bitSequence.substring(i, i + 8); 
    
//     const charCode = parseInt(byte, 2);
//     // Assuming the message ends with a null character (or some known delimiter)
//     if (charCode === 0) break;
//     message += String.fromCharCode(charCode);
//   }
  
//   return message;
// }

// Helper function to convert a float audio sample to an integer
function floatToIntSample(floatSample: number): number {
  // The exact conversion may depend on how your audio data is normalized
  // This is a simplistic approach assuming samples are in the range of -1.0 to 1.0
  return Math.floor((floatSample + 1) * 32767.5); // Convert to 16-bit integer range
}


const Decode: React.FC = () => {

  return (
    <CommonLayout title='decode secret message'>
      <div className='w-full max-w-[1280px] mx-auto  h-[60vh] grid grid-cols-2 items-center gap-x-12'>
        <div>
          <label htmlFor="audio" className="labelStyle">Select encoded audio file*</label>
          <input type="file" className='w-full bg-[#f4f4f4] rounded-lg py-3 px-6' />
          <div className='my-3 w-full flex items-center'>
            <div className='w-full border-b-2 border-gray-300'></div>
            <span className='px-8 font-semibold'>OR</span>
            <div className='border-b-2 border-gray-300 w-full'></div>
          </div>
          <div className='w-full h-[12rem] bg-[#f4f4f4] rounded-lg'>
          </div>
        </div>
        <div>
          <label htmlFor="audio" className="labelStyle">View your secret message</label>
          <textarea name="message" rows={10} placeholder='Enter your secret message' className='w-full rounded-lg p-6  border-gray-600 bg-[#f4f4f4] outline-border_1 ' disabled />
        </div>
      </div>
      <div className='btn'>Decode</div>
    </CommonLayout>
  )
}

export default Decode
