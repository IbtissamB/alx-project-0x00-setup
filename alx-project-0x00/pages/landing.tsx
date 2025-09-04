import Card from "@/components/Card"
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Button title="Small Rounded" styles="px-3 py-1 text-sm rounded-sm bg-blue-500" />
      <Button title="Medium Rounded" styles="px-4 py-2 text-base rounded-md bg-green-500" />
      <Button title="Large Full" styles="px-6 py-3 text-lg rounded-full bg-purple-500" />
    </div>
  )
}
export default Landing