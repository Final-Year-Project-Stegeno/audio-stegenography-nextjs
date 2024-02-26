
import AudioBufferToBolb from "audiobuffer-to-blob"


export async function encodeAudio(audio: File, message: string) {
    const audioContext = new (window.AudioContext)();
    try {
        const arrayBuffer = await audio.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        const encodeAudio = await embedSecretMessage(audioBuffer, message, audioContext);
        const blob = AudioBufferToBolb(encodeAudio);
        downloadAudio(blob);
    } catch (error) {
        console.log(error);
    }
}


export async function embedSecretMessage(
    audioBuffer: AudioBuffer,
    secretMessage: string,
    audioContext: AudioContext
): Promise<AudioBuffer> {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;

    let channelData = audioBuffer.getChannelData(0); 

    let messageBits =
        secretMessage
            .split("")
            .map((char) => {
                return char.charCodeAt(0).toString(2).padStart(8, "0");
            })
            .join("") + "00000000";  

    for (let i = 0; i < messageBits.length; i++) {
        let bit = parseInt(messageBits[i]);
        let sample = channelData[i];
        if (bit === 0) {
            channelData[i] = Math.floor(sample * 128) / 128;
        } else {
            channelData[i] = Math.ceil(sample * 128) / 128;
        }
    }
    
    return audioBuffer;  
}

export async function downloadAudio(wavBlob: Blob) {
    try {
        const modifiedAudioURL = URL.createObjectURL(wavBlob);
        const downloadLink = document.createElement('a');
        downloadLink.href = modifiedAudioURL;
        downloadLink.download = 'modified_audio.wav';
        downloadLink.click(); 
        URL.revokeObjectURL(modifiedAudioURL);
    } catch (error) {
        console.log(error);
    }
}