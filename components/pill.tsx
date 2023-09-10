export default function Pill({ name }: { name: string }) {
    return (
        <div className="rounded-full bg-teal-400/30 px-3 py-1 text-sm text-teal-300">
            {name}
        </div>
    );
}
