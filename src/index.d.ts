// index.d.ts or declarations.d.ts
declare module 'audiobuffer-to-blob' {
    /**
     * Converts an AudioBuffer to a Blob.
     * @param audioBuffer The AudioBuffer that you want to convert to a Blob.
     * @param type The MIME type of the audio file. Defaults to 'audio/wav'.
     * @returns A Blob representing the audio data.
     */
    export default function (audioBuffer: AudioBuffer, type?: string): Blob;
}
