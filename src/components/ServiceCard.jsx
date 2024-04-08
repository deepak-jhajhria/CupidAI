import Ourservice from './Ourservices'
import { serviceCardItems } from '../common/Helper'


const ServiceCard = () => {
    return (
        <div className='py-32 bg-black bg-bg_gradient'>
            <div className='max-w-[966px] px-3  mx-auto '>
                <h2 className='text-4xl font-bold text-center text-white font-inter md:leading-12'>Our Services</h2>
                <p className=' font-medium text-gray text-xxl text-center mx-auto leading-7 lg:max-w-[500px] pt-5'>Tweak anything and everything to ensure fits your business, not the other way around.</p>
                <div className='flex flex-row flex-wrap -mx-3 pt-7'>
                    {serviceCardItems.map((p) => <Ourservice key={p.id} svg={p.svges} head={p.heading} para={p.paragraph} width={p.width} />)}
                </div>
            </div>
        </div>
    )
}
export default ServiceCard
