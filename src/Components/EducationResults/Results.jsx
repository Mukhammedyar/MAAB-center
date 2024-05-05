import RightSideCard from './RightSideCard'
import LeftSideCard from './leftSideCard'

export default function Results() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-5 ">
        <LeftSideCard/>
        <RightSideCard/>
    </div>
  )
}
