import { LoaderCircle } from "lucide-react"

function LoandingOverlay(){
    return (
    <div
        role="status"
        aria-live="polite"
        className="fixed inset-0 z-[60] flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-sm">
            <LoaderCircle className="animate-spin w-14 h-14 text-zinc-900 dark:text-white"/>
    </div>
    );
}

export default LoandingOverlay
