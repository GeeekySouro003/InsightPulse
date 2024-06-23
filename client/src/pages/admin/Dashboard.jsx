import React from 'react'
import RadarChart from '../../components/Radar-chart'
import AreaDTChart from '../../components/AreaDT-chart'
import DonutChart from '../../components/Donut-chart'
import Box from '../../components/Box'
import TopUserslist from '../../components/TopUserslist'

const Dashboard = () => {
  return (
    <main className='w-[100vw] px-4 sm:px-12 py-2 sm:py-4' id='dashboard'>
        <section className='my-0 sm:my-4' id="dashboard-overview">
            <h2 className='text-xl sm:text-2xl mb-2 sm:mb-4 text-sky-700'>Overview</h2>
            <div className="flex flex-wrap gap-y-1 sm:flex-nowrap sm:flex-row justify-around">
                {/* props will be dynamically inserted into 'Boxes' */}
                
                <Box label={'Total Feedbacks received'} data={'123'} />
                <Box label={'Average Ratings'} data={'3.7 ⭐'} />
                <Box label={'Total Users'} data={'45'} />
                <Box label={'Average Submissions per User'} data={'5'}/>
            </div>
        </section>

        <section className='my-4 pr-2 w-full sm:w-3/5 inline-block' id="feedback-trends">
            <AreaDTChart />
        </section>
        <section className='my-4 w-full sm:w-2/5 pl-2 inline-block' id="category-breakdown">
            <RadarChart />
        </section>

        <section className='my-4 w-full sm:w-3/5 pr-8 sm:pr-16 inline-block'>
            <DonutChart />
        </section>
        <section className='my-4 w-full sm:w-2/5 inline-block'>
            <TopUserslist />
        </section>
        
    </main>
  )
}

export default Dashboard