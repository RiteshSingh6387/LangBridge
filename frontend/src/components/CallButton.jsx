import { VideoIcon } from "lucide-react";
function CallButton({handleVideoCall}){
    return (
        <div className = "p-3 border-b flex items-center justify-end max-w-auto w-full absolute top-0">
            <button onClick = {handleVideoCall} className = "btn btn-primary btn-sm text-white">
                <VideoIcon className = "size-6" />
            </button>

        </div>
    )
}

export default CallButton;