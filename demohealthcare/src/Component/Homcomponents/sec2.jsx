import React from 'react'
import { motion } from 'framer-motion'

const Sec2 = () => {
    return (
        <div className='w-full py-10 px-4 flex justify-center'>

            {/* Container */}
            <div className='w-full max-w-6xl flex flex-col md:flex-row gap-6'>

                {/* CARD 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='w-full md:w-1/3 p-5 flex flex-col items-center rounded-xl relative bg-cover bg-center overflow-hidden min-h-[300px]'
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800')" }}
                >

                    <div className="absolute inset-0 bg-black/60 rounded-xl"></div>

                    <div className='relative z-10 flex flex-col items-center gap-4 text-center'>
                        <h2 className='text-white text-lg md:text-xl font-bold'>
                            Schedule Appointment
                        </h2>

                        <div className='w-20 h-[2px] bg-gray-400'></div>

                        <div className='flex flex-col gap-2 text-sm'>
                            <p><span className='text-[#37CBD1]'>Mon - Sat:</span> <span className='text-gray-300'>9:00 AM - 6:00 PM</span></p>
                            <p><span className='text-[#37CBD1]'>Sunday:</span> <span className='text-gray-300'>12:00 PM - 6:00 PM</span></p>
                        </div>
                    </div>
                </motion.div>

                {/* CARD 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='w-full md:w-1/3 p-5 flex flex-col items-center rounded-xl relative bg-cover bg-center overflow-hidden min-h-[300px]'
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800')" }}
                >

                    <div className="absolute inset-0 bg-black/60 rounded-xl"></div>

                    <div className='relative z-10 flex flex-col items-center gap-4 text-center'>
                        <h2 className='text-white text-lg md:text-xl font-bold'>
                            Experienced Doctors
                        </h2>

                        <div className='w-20 h-[2px] bg-gray-400'></div>

                        <p className='text-gray-200 text-sm leading-relaxed'>
                            Our team of highly qualified doctors provides safe and compassionate care across multiple specialties.
                        </p>
                    </div>
                </motion.div>

                {/* CARD 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='w-full md:w-1/3 p-5 flex flex-col items-center rounded-xl relative bg-cover bg-center overflow-hidden min-h-[300px]'
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800')" }}
                >

                    <div className="absolute inset-0 bg-black/60 rounded-xl"></div>

                    <div className='relative z-10 flex flex-col items-center gap-4 text-center'>
                        <h2 className='text-white text-lg md:text-xl font-bold'>
                            Online Consultation
                        </h2>

                        <div className='w-20 h-[2px] bg-gray-400'></div>

                        <p className='text-gray-200 text-sm leading-relaxed'>
                            Talk to a doctor online and get instant medical advice.
                        </p>

                        <div className='text-[#37CBD1] font-bold text-xl'>
                            1-800-555-500
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Sec2