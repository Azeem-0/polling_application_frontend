export default function PollStatusComponent({ activeState }: {
    activeState: boolean
}) {
    return <p className="text-sm text-gray-600 ">
        Status:{" "}
        <span className={`font-medium ${activeState ? "text-green-600" : "text-red-600"}`}>
            {activeState ? "Active" : "Closed"}
        </span>
    </p>
};