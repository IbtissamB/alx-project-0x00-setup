import Card from "@/components/Card"
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      {/* Size Buttons */}
      <div className="flex gap-4">
        <Button title="Small" styles="text-sm px-1 py-1 bg-blue-500 text-white rounded-md" />
        <Button title="Medium" styles="text-base px-3 py-1 bg-green-500 text-white rounded-md" />
        <Button title="Large" styles="text-lg px-6 py-3 bg-purple-500 text-white rounded-md" />
      </div>

      {/* Rounded Variants */}
      <div className="flex gap-4">
        <Button title="Rounded-sm" styles="text-base px-4 py-2 bg-orange-500 text-white rounded-sm" />
        <Button title="Rounded-md" styles="text-base px-4 py-2 bg-yellow-500 text-black rounded-md" />
        <Button title="Rounded-full" styles="text-base px-4 py-2 bg-red-500 text-white rounded-full" />
        <Button title="Rounded-lg" styles="text-base px-4 py-2 bg-pink-500 text-white rounded-lg" />
      </div>
    </div>
  )
}
export default Landing