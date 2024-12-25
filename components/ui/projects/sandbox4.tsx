import MagicButton from '@/components/MagicButton'
import React from 'react'
import { IoFileTrayStacked } from 'react-icons/io5'

const Sandbox4 = () => {
  return (
    <div className="mt-28 mb-20">
        <div className="sandbox">
          <div className="my-12">
            <a href="/files/Final Project Report.pdf" download>
            <MagicButton
            title='Download Full Report'
            icon={<IoFileTrayStacked/>}
            position='right'
            />
            </a>

          </div>
            <h1>
                Future Improvements
            </h1>
            <ul>
                <li>
                A major limiting factor of our design was our earlier design -notably our inverter. While we did create a smaller version of the inverter, other layouts, like the XOR and full adder already had the larger design embedded into it. By recreating other core bit slices with smaller area, we could increase the size of N.
                </li>
                <li>
                Replace D Flip Flops with SRAM, due to its smaller transistor count, it would be possible to reduce the size of our design by implementing as SRAM.
                </li>
                <li>
                Add an additional register for each input and output (or add registers throughout the combinational circuit). This would reduce available space in the limited area but would reduce the impact of metastability and decrease the critical path.
                </li>
                <li>
                SIPO and PISO registers to be implemented as bits. This would’ve sped up our design process.
                </li>
 
            </ul>

        </div>
    </div>
  )
}

export default Sandbox4