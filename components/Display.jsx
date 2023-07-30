import useClipboard from "react-use-clipboard";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Display = () => {
  const listen = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  const [isCopied, setCopied] = useClipboard(transcript, {
    successDuration: 1000,
  });
  return (
    <>
      <div className="grid place-items-center h-screen">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="text-primary text-center text-6xl font-bold tracking-widest lg:p-0 p-3 lg:mt-0 mt-">
              Vocalization.Pro
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <div className="lg:p-0 p-3 text-center">
                "AMPLIFY YOUR VOICE with
                <span className="text-primary font-bold">
                  {" "}
                  Vocalization.Pro
                </span>{" "}
                - A speech to text converter Empowering with Seamless Speech
                Recognition and Communication!"
              </div>
              <div className="lg:p-0 p-3 text-center">
                Built with Next.js and Styled with Tailwind CSS - Harnessing the
                Latest in Web Development Technology for an Unbeatable User
                Experience!
              </div>
            </div>
          </div>
          <div className="lg:w-[50rem] md:w-[60rem] w-full lg:h-[50vh] md:h-[40vh] h-[80vh] rounded-xl mx-auto">
            <div className="w-full h-full overflow-y-auto p-5 rounded-xl mx-auto bg-emerald-900 text-white font-bold text-justify scrollbar-thin scrollbar-thumb-emerald-500 scrollbar-track-slate-300 lg:text-base text-lg">
              {transcript}
            </div>
            <div className="flex justify-between items-center gap-3 p-5">
              <button
                onClick={setCopied}
                className="bg-primary px-4 py-2 text-primary-content font-bold rounded-lg hover:bg-white hover:text-primary transition-all w-full"
              >
                {isCopied ? "copied! 👍" : "Copy to clipboard"}
              </button>
              <button
                onClick={listen}
                className="bg-primary px-4 py-2 text-primary-content font-bold rounded-lg hover:bg-white hover:text-primary transition-all w-full"
              >
                Start Listenting
              </button>
              <button
                onClick={SpeechRecognition.stopListening}
                className="bg-primary px-4 py-2 text-primary-content font-bold rounded-lg hover:bg-white hover:text-primary transition-all w-full"
              >
                Stop Listening
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
